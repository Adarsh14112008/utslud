class ball{
  constructor(x,y) {
    var options = {
        restitution:0.3,
        friction:0.5,
        density:1.2
    }
    this.body = Bodies.circle(x,y,10,options);
    this.width = width;
    this.height = height;
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    
    fill("brown");
    circle(pos.x, pos.y,25);
  }
};