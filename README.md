# Babylon For KA: Simpler Setup
Sometimes setting up Babylon.js on Khan Academy can be a bit of a hassle, espically when you are new to coding in general. Thats why I made this simple yet effective way to setup Babylon.js with just a few lines of code!

## Setup Instructions
First, create a new HTML webpage on KA. Then make a canvas tag between the body tags with an id of "renderCanvas" like so:
<body>
            <canvas id = 'renderCanvas'></canvas>
<body>
            
Next, import Babylon.js and BabylonForKA.js with these two lines of code:
```
<script src = 'https://cdn.jsdelivr.net/npm/babylonjs@6.23.0/babylon.min.js'></script>  
<script src = 'https://cdn.jsdelivr.net/gh/Dip98/BabylonForKA/BabylonForKA.js'></script>
```

Then just create a script tag, and type the following inside! 

setupBabylon();
function run(){
            const scene = new BABYLON.Scene(engine);
            //Type all your Babylon code in here!
            return scene;
}
runBabylon();

And you're good to go! :)
