import { initApp, draw } from './src/app.js';

// const canvas = document.getElementById('canvas');

// Initialize everything through main.js
await initApp();

function loop()
{
    draw();
    requestAnimationFrame(loop);
}

loop();