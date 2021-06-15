class Sand {
    constructor(x, y) {
      var options = {
          'restitution':1.0,
          'friction':5,
          'density':1
      }

      this.body = Bodies.circle(x,y,5,options);
      World.add(world, this.body);

    }

    display(){

      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      ellipseMode(CENTER);
      strokeWeight(3);
      stroke("yellow");
      fill("red");
      ellipse(0, 0, this.width );
      pop();

    }
  };
  