var BabylonForKA = {
        run: function(){}
};
window.addEventListener('DOMContentLoaded', function(){
        var canvas = document.getElementById('renderCanvas');
        canvas.getContext = function(type, data) {
                data.preserveDrawingBuffer = true;
                return HTMLCanvasElement.prototype.getContext.call(canvas, type, data);
        }
});
function renderBabylon(){
        const engine = new BABYLON.Engine(canvas, true);
        const scene = BabylonForKA.run();
        engine.runRenderLoop(function(){
                scene.render();
        });
}
