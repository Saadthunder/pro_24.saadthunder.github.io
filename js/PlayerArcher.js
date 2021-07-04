class PlayerArcher {
constructor(x,y,width,height,angle) {
   
      this.body = Bodies.rectangle(x, y, width, height,angle);
  
      this.width = width;
      this.height = height;
      this.angle = angle;
      this.image = loadImage("./assets/playerArcher.png");
  
      World.add(world, this.body);


    
}



display() {
    var pos = this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image, 0, 0, this.width, this.height);
    pop();
    if(keyIsDown(RIGHT_ARROW) && playerArcher < 1.77){
      playerArcher.body.angle = playerArcher.body.angle + 0.01;
    }
  
    if(keyIsDown(LEFT_ARROW) && playerArcher > 1.47){
      playerArcher.body.angle = playerArcher.body.angle - 0.01;
    }
    }
    shoot(){
    Matter.Body.setAngle(this.body,-PI/2);
}
}

















