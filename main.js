import * as THREE from 'three';
import { OBJLoader } from 'three/addons/loaders/OBJLoader.js';

const NUM_OBJECTS = 18;

const w = window.innerWidth;
const h = window.innerHeight;

const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();
const highlightMaterial = new THREE.MeshPhongMaterial({ color: 0xdd164c, emissive: 0x222222 }); // Emissive adds a glow-like effect


const scene = new THREE.Scene();
// scene.background = new THREE.Color(0xffffff); // Set background to white

scene.add( new THREE.AmbientLight( 0x999999 ) );

const light = new THREE.DirectionalLight( 0xffffff, 10 );
light.position.set( 0.2, 1, 0.2 );
light.castShadow = true;
light.shadow.camera.zoom = 4; // tighter shadow map
scene.add( light );

const geometryBackground = new THREE.PlaneGeometry( 100, 100 );
const materialBackground = new THREE.MeshPhongMaterial( { color: 0xf0f0f0 } );
const background = new THREE.Mesh( geometryBackground, materialBackground );
background.receiveShadow = true;
background.position.set( 0, 0, - 1 );
scene.add( background );

const camera = new THREE.PerspectiveCamera(75, w / h, 0.1, 1000);
camera.position.z = 10;
const renderer = new THREE.WebGLRenderer();
renderer.setSize(w, h);

document.getElementById("three-background").appendChild(renderer.domElement);


// Create an array to store mesh objects
const meshes = [];

function init(obj, index) {
    const geometry = obj;
    geometry.center(); // Center geometry to ensure it rotates around its own center

    // Grid dimensions and spacing
    const rows = 3;
    const columns = 6;
    const spacing = 5; // Distance between objects
    const row = Math.floor(index / columns);
    const column = index % columns;

    // const edges = new THREE.EdgesGeometry(geometry);
    // const material = new THREE.LineBasicMaterial({ color: 0x000000 , linewidth: 3 }); 
    // const line = new THREE.LineSegments(edges, material);
    // line.position.x = column * spacing - ((columns - 1) * spacing / 2);
    // line.position.y = -row * spacing + ((rows - 1) * spacing / 2);
    // scene.add(line);
    // meshes.push(line); // Store the line for animation

	// const material = new THREE.MeshPhongMaterial( { color: 0xff0000 } );
    const material = new THREE.MeshNormalMaterial();
	const mesh = new THREE.Mesh( geometry, material );
	mesh.castShadow = true;
	mesh.receiveShadow = true;
    mesh.position.x = column * spacing - ((columns - 1) * spacing / 2);
    mesh.position.y = -row * spacing + ((rows - 1) * spacing / 2);
	scene.add( mesh );
    meshes.push(mesh)

}

function onMouseMove(event) {
    // Calculate mouse position in normalized device coordinates (-1 to +1) for both components
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
}

window.addEventListener('mousemove', onMouseMove, false);

function loadObjects(numberOfObjects, scene) {
    const loader = new OBJLoader();

    for (let i = 0; i <= numberOfObjects -1 ; i++) {
        const file = `./models/obj_${i+1}.obj`;
        loader.load(file, (object) => {
            if (object.children.length > 0) {
                init(object.children[0].geometry, i);  // Pass index to init
            } else {
                console.error('Object loaded does not contain any children:', file);
            }
        });
    }
}
loadObjects(NUM_OBJECTS, scene);

let selectedObject = null;

function animate() {
    requestAnimationFrame(animate);

    // Update the picking ray with the camera and mouse position
    raycaster.setFromCamera(mouse, camera);

    // Calculate objects intersecting the picking ray
    const intersects = raycaster.intersectObjects(meshes);

    if (intersects.length > 0) {
        if (selectedObject !== intersects[0].object) {
            if (selectedObject) {
                selectedObject.material = new THREE.MeshNormalMaterial(); // Reset the previous selected object's material
            }
            selectedObject = intersects[0].object;
            selectedObject.material = highlightMaterial; // Apply highlight material to the new selected object
        }
    } else if (selectedObject) {
        selectedObject.material = new THREE.MeshNormalMaterial(); // Reset when no objects are selected
        selectedObject = null;
    }

    // Rotate all meshes except the selected one
    meshes.forEach(mesh => {
        if (mesh !== selectedObject) {
            mesh.rotation.z += 0.01;
        }
    });

    renderer.render(scene, camera);
}

animate();

function handleWindowResize() {
    const w = window.innerWidth;
    const h = window.innerHeight;
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    renderer.setSize(w, h);
}
window.addEventListener('resize', handleWindowResize, false);