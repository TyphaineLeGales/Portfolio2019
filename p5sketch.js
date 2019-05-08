p5.disableFriendlyErrors = true;

y=0;
var img;
var vScale=5;
var vehicles=[];
var font;
function preload() {
  img = loadImage('assets/photo2.jpg');
  font = loadFont('Font/gilroy-extrabold-webfont.woff');
}

function setup() {
  var myCanvas = createCanvas(270*1.3, 300*1.3);
  myCanvas.parent('p5Canvas');
  pixelDensity(1);
  loadPixels();
  img.resize(width/vScale,height/vScale);
  img.loadPixels();

      for(var y =0; y<img.height;y++) {
        for(var x=0; x<img.width; x++) {
          var index= (x+y*img.width)*4;
          var r = img.pixels[index];
          var g = img.pixels[index+1];
          var b = img.pixels[index+2];

          var brightness = (r+g+b)/3;
          var vehicle = new Vehicle(x*4, y*4, vScale/1.8, brightness);
          vehicles.push(vehicle);
        }
      }
  }


function draw() {
  background('#f6f6f6');
    fill('#113ffa');
          vehicles.forEach(function(vehicle) {
          vehicle.behaviours();
          vehicle.update();
          vehicle.show(brightness);
        });
}

