class Blocks{
    constructor(x, y, width, height, angle) {
        var options = {
            'restitution':0.04,
            'friction':3.0,
            'density':3
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.visiblity=255

        this.image = loadImage("images/blocks.png");
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        //if (this.body.position.x<1000&&this.body.position.x>500){
          if(this.body.position.y<450){
          push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
        }

        else {
        World.remove(world,this.body);
        push();
        this.visiblity=this.visiblity-5
        tint(255,this.visiblity);
        image(this.image,this.body.position.x,this.body.position.y,50,50);
        pop();
        }
      }
}