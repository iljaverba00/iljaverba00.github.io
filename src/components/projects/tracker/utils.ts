import JSZip from "jszip";
import {th} from "vuetify/locale";


export function addCameraStream(element: HTMLVideoElement, resolution: 1920): Promise<MediaStream> {

    return new Promise((resolve, reject) => {
        navigator.mediaDevices.getUserMedia({
            video: {
                facingMode: 'environment',
                width: {ideal: resolution},
                height: {ideal: resolution}
            },
            audio: false,
        }).then(stream => {
            element.srcObject = stream;
            // const track = stream.getVideoTracks()[0];
            // const capabilities = track.getCapabilities();
            // console.log(capabilities);
            resolve(stream);
        }).catch(e => {
            console.error('Ошибка доступа к камере:', e);
            reject(e);
        })
    })

}


export class GeoRecorder {
    #recorder: MediaRecorder;
    #videoElement: HTMLVideoElement;
    #recordedChunks = [];
    #geoData = [];
    #geoInterval;
    #startTime;
    #imageBlobs = [];


    constructor(videoElement: HTMLVideoElement, stream: MediaStream) {
        this.#videoElement = videoElement;
        this.#recorder = new MediaRecorder(stream, {mimeType: 'video/webm'});
    }


    startRecording() {
        this.#startTime = Date.now();

        this.#recorder.ondataavailable = (e) => {
            if (e.data.size) this.#recordedChunks.push(e.data);
        }

        this.#recorder.onstop = async () => {

            const currTime = this.timestamp();

            const videoBlob = new Blob(this.#recordedChunks, {type: 'video/webm'});
            const geoJsonBlob = new Blob([JSON.stringify(this.#geoData, null, 2)], {type: 'application/json'});

            const zip = new JSZip();

            zip.file(`video_${currTime}.webm`, videoBlob);
            zip.file(`geo_${currTime}.json`, geoJsonBlob);

            const images = zip.folder('images');
            for (const imageBlob of this.#imageBlobs) {
                images.file(imageBlob.name, imageBlob.data);
            }


            const zipBlob = await zip.generateAsync({type: "blob"});
            this.downloadBlob(zipBlob, `recording.zip`);


        }

        this.#geoInterval = setInterval(() => {
            const canvas = document.createElement('canvas') as HTMLCanvasElement;
            const ctx = canvas.getContext('2d');
            const timestamp = (Date.now() - this.#startTime) / 1000;
            if (canvas) {
                canvas.width = this.#videoElement.videoWidth;
                canvas.height = this.#videoElement.videoHeight;
                ctx.drawImage(this.#videoElement, 0, 0);

                canvas.toBlob((data) => {
                    this.#imageBlobs.push({name: `img_${timestamp}.png`, data});
                }, 'image/png', 1);
            }

            navigator.geolocation.getCurrentPosition((position) => {
                const {latitude, longitude, accuracy} = position.coords;

                this.#geoData.push({latitude, longitude, accuracy, timestamp});
            })
        }, 2000)

        this.#recorder.start()
    }

    stopRecording() {
        this.#recorder.stop();
        clearInterval(this.#geoInterval);
    }

    timestamp() {
        const now = new Date();
        return now.toISOString().replace(/[-:.]/g, '_');
    }

    downloadBlob(blob: Blob, name: string) {
        const downloadElem = document.createElement('a');
        const url = URL.createObjectURL(blob);

        downloadElem.href = url;
        downloadElem.download = name;
        document.body.appendChild(downloadElem);
        downloadElem.click();

        document.body.removeChild(downloadElem);
        URL.revokeObjectURL(url);
        console.log('download')
    }

}