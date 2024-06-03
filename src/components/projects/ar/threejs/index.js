import * as THREE from 'three';
import {ref} from "vue";

let container;
let camera, scene, renderer;
let controller;

let reticle;

let hitTestSource = null;
let hitTestSourceRequested = false;
let currentSession = ref(null);

const SESSION_NAME = 'immersive-ar';

//let statusAr = ref(); // undefined | null - didn't checked, false - not supported, true - supported

const geometry = new THREE.CylinderGeometry(0.1, 0.1, 0.2, 32).translate(0, 0.1, 0);

export default function () {
    isARSupported(() => {
        init();
        animate();
        sessionSwitcher();
    })
    return {
        resetArSession,
        addCylinder,
        clearCylinders,
        currentSession
    }
}

const resetArSession = () => {
    currentSession?.value?.end?.();
    renderer?.setAnimationLoop?.(null);
    renderer?.dispose?.();
    scene = camera = renderer = controller = reticle = undefined;

    if (container) {
        container.style.display = 'none';
        container.removeChild(container.lastChild);
    }
}

function init() {
    container = document.getElementById('three-js-ar');
    document.body.appendChild(container);

    // const button = document.createElement('button');
    // button.style.color = 'blue';
    // button.innerHTML = 'TEST';
    // container.appendChild(button);

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

    controller = renderer.xr.getController(0);
    //controller.addEventListener('select', onSelect);
    scene.add(controller);

    reticle = new THREE.Mesh(new THREE.RingGeometry(0.15, 0.2, 32)
        .rotateX(-Math.PI / 2), new THREE.MeshBasicMaterial());
    reticle.matrixAutoUpdate = false;
    reticle.visible = false;
    scene.add(reticle);

    //window.addEventListener('touchstart', onSelect);
    window.addEventListener('resize', onWindowResize);
}

const clearCylinders = () => {
    const obj = scene.getObjectsByProperty('test',null,[]);
    //alert(obj.length)
    for (const o of obj) {
        scene.remove(o);
    }
}

const addCylinder = () => {
    if (reticle.visible) {
        const material = new THREE.MeshPhongMaterial({color: 0xffffff * Math.random()});
        const mesh = new THREE.Mesh(geometry, material);
        reticle.matrix.decompose(mesh.position, mesh.quaternion, mesh.scale);
        mesh.test = null;
        mesh.scale.y = Math.random() * 2 + 1;
        scene.add(mesh);
    }
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

function animate() {
    renderer.setAnimationLoop(render);
}

function render(timestamp, frame) {
    if (!renderer || !scene || !frame) return

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
    if (scene && camera) {
        renderer.render(scene, camera);
    }
}

const isARSupported = (resolve, reject) => {
    navigator.xr.isSessionSupported(SESSION_NAME).then((supported) => {
        supported ? resolve() : reject(supported);
    }).catch((e) => {
        console.warn(e)
        reject?.(e)
    });
}

export const sessionSwitcher = () => {

    function onSessionEnded( /*event*/) {
        currentSession.value.removeEventListener('end', onSessionEnded);
        sessionInit.domOverlay.root.style.display = 'none';
        currentSession.value = null;
    }

    let sessionInit = {
        requiredFeatures: ['hit-test'],
        optionalFeatures: ['dom-overlay'],
        domOverlay: {root: container}
    };

    navigator.xr.requestSession(SESSION_NAME, sessionInit)
        .then(async (session) => {
            session.addEventListener('end', onSessionEnded);
            renderer.xr.setReferenceSpaceType('local');
            await renderer.xr.setSession(session);
            currentSession.value = session;
        });
}




