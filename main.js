import * as THREE from 'three';
// import Light from './components/light';
// import Camera from './components/camera';
// import Floor from './components/floor';
// import Text from './components/text';
const scene = new THREE.Scene();

const w = window.innerWidth;
const h = window.innerHeight;

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg'),
  antialias: true,
  autoSize: true,
  alphasize: true,
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFShadowMap;
renderer.setClearColor(0x000000, 1);

renderer.setSize(w, h);
Light(scene);
// Text(scene);
Floor(scene);
const myCam = Camera(w, h, renderer);
function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, myCam);
}

animate();
