p5.disableFriendlyErrors = true;

// creating a Vehicle object => OOP

function Vehicle(x, y, vScale, brightness) {
  this.pos = createVector(x+random(width/2), y+random(height/2));
  this.scale = vScale;
  this.target = createVector(x, y);
  this.vel = p5.Vector.random2D();
  this.acc = createVector();
  this.r = 3;
  this.maxspeed = 100;
  this.maxforce = 0.5;
  this.brightness = brightness;

  this.behaviours = function() {
    var arrive = this.arrive(this.target);
    this.applyForce(arrive);
  }

  this.applyForce = function(force) {
    this.acc.add(force);
  }

  this.update = function() {
    this.pos.add(this.vel);
    this.vel.add(this.acc);
    this.acc.mult(0);
  }

  this.show = function() {
    noStroke(0);
    fill(0,0,255,255-this.brightness);
    ellipse(this.pos.x, this.pos.y, this.scale, this.scale);
  }

   this.arrive = function(target) {
    var desired = p5.Vector.sub(target, this.pos);
    var d = desired.mag();
    var speed = this.maxspeed;
    //This is the condition that creates the behaviour of the particles
    if(d<600) {
      speed = map(d, 0, 600, 0, this.maxspeed);
    }
    desired.setMag(speed);
    var steer = p5.Vector.sub(desired,this.vel);
    steer.limit(this.maxforce);
    return steer;
  }

}
