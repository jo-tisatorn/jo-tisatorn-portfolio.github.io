// import { CameraManager } from './manager/CameraManager.js';
// import { TextAliveManager } from './manager/TextAliveManager.js';
// import { WebGLManager } from './manager/WebGLManager.js';
import { ThreeJSManager } from './Manager/ThreeJSManager.js';

// let webgl, camera, textAlive;
// let webgl;
let g_threeManager;

export async function initApp()
{
    // const { WebGLManager } = await import('./manager/WebGLManager.js');
    // webgl = new WebGLManager(canvas);
    // await webgl.init();

    g_threeManager = new ThreeJSManager();
    await g_threeManager.Init();
    g_threeManager.cube = g_threeManager.CreateCube();
    const path = 'src/Assets/Models/TDAMiku.glb';
    g_threeManager.LoadModel(path);
    // Create and connect your managers
    // webgl = new WebGLManager(canvas);
    // camera = new CameraManager();
    // textAlive = new TextAliveManager();

    // Initialize them
    // await textAlive.init(); // if async
    // webgl.init();
    // camera.init();

    // Optionally pass data between them
    // webgl.setCamera(camera);
    // webgl.setLyrics(textAlive.getLyrics());

    // console.log("App initialized.");
}


export function draw()
{
    // webgl.render();
    g_threeManager.Draw();
}