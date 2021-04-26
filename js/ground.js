class Ground {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      this.startingGround_png=loadImage("images/startingGround.png")

      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      //fill("brown");
      imageMode(CENTER);
      image(this.startingGround_png, pos.x, pos.y, this.width, this.height);
    }
  };