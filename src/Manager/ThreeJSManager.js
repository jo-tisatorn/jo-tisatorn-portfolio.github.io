import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';


export class ThreeJSManager
{
    constructor()
    {
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        this.renderer = new THREE.WebGLRenderer({ antialias: true });
        this.controls = null;
        this.loader = null;
        let cube = null;
    }

    async Init()
    {
        const renderer = this.renderer;
        const camera = this.camera;
        const scene = this.scene;

        this.controls = new OrbitControls(camera, renderer.domElement);
        this.loader = new GLTFLoader();

        camera.position.z = 5;
        renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(renderer.domElement);

        const color = 0xFFFFFF;
        const intensity = 3;
        const light = new THREE.DirectionalLight(color, intensity);
        light.position.set(-1, 2, 4);
        scene.add(light);
        
    }

    Draw()
    {
        const renderer = this.renderer;
        const cube = this.cube;
        renderer.setAnimationLoop(this.animate(cube));
    }

    CreateCube()
    {
        const scene = this.scene;
        const geometry = new THREE.BoxGeometry(1, 1, 1);
        const material = new THREE.MeshPhongMaterial({ color: 0x44aa88 });
        // material = new THREE.MeshPhongMaterial({color: 0x44aa88}); 
        const cube = new THREE.Mesh(geometry, material);
        console.log("created cube");
        scene.add(cube);
        return cube
    }

    LoadModel(path)
    {
        const loader = new GLTFLoader();
        const scene = this.scene;

        loader.load(path, function (gltf)
        {
            scene.add(gltf.scene);
        }, undefined, function (error)
        {

            console.error(error);

        });
    }

    animate(cube)
    {
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;

        this.renderer.render(this.scene, this.camera);
    }


}




