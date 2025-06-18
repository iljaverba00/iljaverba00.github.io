import JSZip from "jszip";


export function addCameraStream(element: HTMLVideoElement): Promise<MediaStream> {

    return new Promise((resolve, reject) => {
        navigator.mediaDevices.getUserMedia({
            video: {
                facingMode: 'environment',
                width: {ideal: 1920},
                height: {ideal: 1080}
            },
            audio: false,
        }).then(stream => {
            element.srcObject = stream;
            resolve(stream);
        }).catch(e => {
            console.error('Ошибка доступа к камере:', e);
            reject(e);
        })
    })

}


export function startDownloadFrames(element: HTMLVideoElement, delay: number = 2000) {

    return setTimeout(() => {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');

        canvas.width = element.videoWidth
        canvas.height = element.videoHeight

        ctx.drawImage(element, 0, 0);

        const image = canvas.toDataURL('image/png', 1);

        downloadFile(image);
    }, delay)

}


function downloadFile(image: string) {
    const downloadElem = document.createElement('a');
    downloadElem.href = image;
    downloadElem.download = "pic.png";
    document.body.appendChild(downloadElem);
    downloadElem.click();
    document.body.removeChild(downloadElem);
    console.log('download')
}


export class GeoRecorder {
    #recorder: MediaRecorder;
    #recordedChunks = [];
    #geoData = [];
    #geoInterval;
    #startTime;


    constructor(stream: MediaStream) {
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

            const zipBlob = await zip.generateAsync({type: "blob"});
            this.downloadBlob(zipBlob, `recording.zip`);
        }

        this.#geoInterval = setInterval(() => {
            navigator.geolocation.getCurrentPosition((position) => {

                const {latitude, longitude, accuracy} = position.coords;
                const timestamp = (Date.now() - this.#startTime) / 1000;

                this.#geoData.push({latitude, longitude, accuracy, timestamp});
            })
        }, 2000)

        this.#recorder.start()
    }

    stopRecording() {
        this.#recorder.stop();
        clearInterval(this.#geoInterval);
        this.#recordedChunks = [];
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