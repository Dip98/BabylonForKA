function a(){
var BabylonForKA = {
        run: function(){}
    };
window.addEventListener('DOMContentLoaded', function(){
        var canvas = document.getElementById('renderCanvas');
        canvas.getContext = function(type, data) {
                data.preserveDrawingBuffer = true;
                return HTMLCanvasElement.prototype.getContext.call(canvas, type, data);
        }
        BabylonForKA.run = function(){
            const scene = new BABYLON.Scene(engine);
            scene.clearColor = new BABYLON.Color3(0, 0, 0)
            return scene;
        }
        const engine = new BABYLON.Engine(canvas, true);
        const scene = BabylonForKA.run();
        engine.runRenderLoop(function(){
                scene.render();
        });
});
}
