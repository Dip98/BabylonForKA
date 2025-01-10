function setupBabylon(){
        window.addEventListener('DOMContentLoaded', function(){
                var canvas = document.getElementById('renderCanvas');
                canvas.getContext = function(type, data) {
                        data.preserveDrawingBuffer = true;
                        return HTMLCanvasElement.prototype.getContext.call(canvas, type, data);
                }
        });
        const engine = new BABYLON.Engine(canvas, true);
}
function runBabylon(){
        const scene = run();
        engine.runRenderLoop(function(){
                scene.render();
        });
}
