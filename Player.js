class Player {
    constructor(x,y,width,height,scale){
        this.distance = 0 ;

        this.body = Bodies.rectangle(x, y, width, height);
        this.width = width;
        this.height = height;
        this.scale = scale();
        this.image = loadImage("unnamed.png");
        World.add(world, this.body);
    }

    
    display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
    }
}