import * as THREE from "../node_modules/three/build/three.module.js"
import {OrbitControls} from "../node_modules/three/examples/jsm/controls/OrbitControls.js"
//scene, camera,  renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera ();
const renderer = new THREE.WebGLRenderer();

var _controls = new OrbitControls( camera, renderer.domElement)

camera.position.z = 45;
camera.position.x = 0;
camera.position.y = 15;
camera.rotation.x = 0;
camera.rotation.y = 0;
camera.rotation.z = 0;

scene.background = new THREE.Color(0xEDEBF8);
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

/*<==============================Helpers==============================>*/
// const radius = 16;
// const sectors = 16;
// const rings = 16;
// const divisions = 64;

// const helper1 = new THREE.PolarGridHelper( radius, sectors, rings, divisions );
// scene.add( helper1 );

/*<==============================Helpers==============================>*/

const controls = new OrbitControls( camera, renderer.domElement );
controls.update();

const texture7 = new THREE.TextureLoader().load( "./image/near.jpg" );
const material1 = new THREE.MeshBasicMaterial( { map: texture7 } );
const cubeGeometry = new THREE.BoxGeometry(10, 0.05, 10);
const cube = new THREE.Mesh(cubeGeometry, material1);
scene.add(cube);

const texture1 = new THREE.TextureLoader().load( "./image/wall.jpg" );
const material2 = new THREE.MeshBasicMaterial( { map: texture1 } );
const wallGeometry1 = new THREE.BoxGeometry(0.1, 6, 5);
const wall1 = new THREE.Mesh(wallGeometry1, material2);
wall1.position.x = -2.42;
wall1.position.y = 3
scene.add(wall1);


const texture2 = new THREE.TextureLoader().load( "./image/wall.jpg" );
const material3 = new THREE.MeshBasicMaterial( { map: texture2 } );
const wallGeometry2 = new THREE.BoxGeometry(0.1, 6, 5);
const wall2 = new THREE.Mesh(wallGeometry2, material3);
wall2.position.x = 2.42;
wall2.position.y = 3
scene.add(wall2);

const texture3 = new THREE.TextureLoader().load( "./image/window.jpg" );
const materialBack = new THREE.MeshBasicMaterial( { map: texture3 } );
const wallGeometryBack = new THREE.BoxGeometry(5, 6, 0.1);
const wall3 = new THREE.Mesh(wallGeometryBack, materialBack);
wall3.position.x = 0;
wall3.position.y = 3;
wall3.position.z = -2.45;
scene.add(wall3);

const texture4 = new THREE.TextureLoader().load( "./image/door.jpg" );
const materialFront = new THREE.MeshBasicMaterial( { map: texture4 } );
const wallGeometryFront = new THREE.BoxGeometry(5, 6, 0.1);
const wall4 = new THREE.Mesh(wallGeometryFront, materialFront);
wall4.position.x = 0;
wall4.position.y = 3;
wall4.position.z = 2.45;
scene.add(wall4);

const texture5 = new THREE.TextureLoader().load( "./image/roof.jpg" );
const materialRoofRight = new THREE.MeshBasicMaterial( { map: texture5 } );
const wallGeometryRoofRight = new THREE.BoxGeometry(0.1, 6, 5);
const wall5 = new THREE.Mesh(wallGeometryRoofRight, materialRoofRight);
wall5.position.x = 2.25;
wall5.position.y = 6.15;
wall5.rotation.z = 4;
scene.add(wall5);

const texture6 = new THREE.TextureLoader().load( "./image/roof.jpg" );
const materialRoofLeft = new THREE.MeshBasicMaterial( { map: texture6 } );
const wallGeometryRoofLeft = new THREE.BoxGeometry(0.1, 6, 5);
const wall6 = new THREE.Mesh(wallGeometryRoofLeft, materialRoofLeft);
wall6.position.x = -2.25;
wall6.position.y = 6.15;
wall6.rotation.z = -4;
scene.add(wall6);



function animate(){
    requestAnimationFrame(animate);
    _controls.update();
    renderer.render( scene, camera);
}

animate();