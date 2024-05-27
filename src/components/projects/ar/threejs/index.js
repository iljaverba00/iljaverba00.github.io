import * as THREE from 'three';

let container;
let camera, scene, renderer;
let controller;

let reticle;

let hitTestSource = null;
let hitTestSourceRequested = false;

let currentSession = null;

let sessionInit = {
    requiredFeatures: ['hit-test'],
    optionalFeatures: ['dom-overlay']
};

function init() {
    container = document.getElementById('three-js-ar');
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.01, 20);

    const light = new THREE.HemisphereLight(0xffffff, 0xbbbbff, 3);
    light.position.set(0.5, 1, 0.25);
    scene.add(light);

    renderer = new THREE.WebGLRenderer({antialias: true, alpha: true});
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.xr.enabled = true;
    container.appendChild(renderer.domElement);

    // todo
    const geometry = new THREE.CylinderGeometry(0.1, 0.1, 0.2, 32).translate(0, 0.1, 0);

    function onSelect() {

        if (reticle.visible) {
            const material = new THREE.MeshPhongMaterial({color: 0xffffff * Math.random()});
            const mesh = new THREE.Mesh(geometry, material);
            reticle.matrix.decompose(mesh.position, mesh.quaternion, mesh.scale);
            mesh.scale.y = Math.random() * 2 + 1;
            scene.add(mesh);
        }

    }

    controller = renderer.xr.getController(0);
    controller.addEventListener('select', onSelect);
    scene.add(controller);

    reticle = new THREE.Mesh(new THREE.RingGeometry(0.15, 0.2, 32)
        .rotateX(-Math.PI / 2), new THREE.MeshBasicMaterial());
    reticle.matrixAutoUpdate = false;
    reticle.visible = false;
    scene.add(reticle);

    window.addEventListener('resize', onWindowResize);
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

//

function animate() {
    renderer.setAnimationLoop(render);
}

function render(timestamp, frame) {

    if (frame) {
        const referenceSpace = renderer.xr.getReferenceSpace();
        const session = renderer.xr.getSession();

        if (hitTestSourceRequested === false) {
            session.requestReferenceSpace('viewer').then(function (referenceSpace) {
                session.requestHitTestSource({space: referenceSpace}).then(function (source) {
                    hitTestSource = source;
                });
            });

            session.addEventListener('end', function () {
                hitTestSourceRequested = false;
                hitTestSource = null;
            });

            hitTestSourceRequested = true;

        }

        if (hitTestSource) {
            const hitTestResults = frame.getHitTestResults(hitTestSource);

            if (hitTestResults.length) {
                const hit = hitTestResults[0];
                reticle.visible = true;
                reticle.matrix.fromArray(hit.getPose(referenceSpace).transform.matrix);
            } else {
                reticle.visible = false;
            }
        }
    }
    renderer.render(scene, camera);
}


export default function () {
    isARSupported(()=>{
        init();
        animate();
        sessionSwitcher();
    },()=>{
        alert("AR not supported");
    })
}

const isARSupported = (resolve, reject) => {
    navigator.xr.isSessionSupported('immersive-ar').then(function (supported) {
        supported ? resolve() : reject();
    }).catch(reject);
}

export const sessionSwitcher = () => {
    sessionInit.domOverlay = {root: container};


    async function onSessionStarted(session) {
        session.addEventListener('end', onSessionEnded);
        renderer.xr.setReferenceSpaceType('local');
        await renderer.xr.setSession(session);
        currentSession = session;
    }

    function onSessionEnded( /*event*/) {
        currentSession.removeEventListener('end', onSessionEnded);
        sessionInit.domOverlay.root.style.display = 'none';
        currentSession = null;
    }

    if (currentSession === null) {
        navigator.xr.requestSession('immersive-ar', sessionInit).then(onSessionStarted);
    } else {
        currentSession.end();
        if (navigator.xr.offerSession !== undefined) {
            navigator.xr.offerSession('immersive-ar', sessionInit)
                .then(onSessionStarted).catch((err) => {console.warn(err)});
        }
    }
}




