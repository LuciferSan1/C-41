class PC {
	//Constructor has x and y as it's arguments
	constructor(x,y){
		this.x = x;
		this.y = y;

		this.w = 70;
		this.h = 154;
	}

	display(){
		image(PCImage,this.x, this.y, 80, 160);
	}

	moveRight(){
		this.x += 10;
	}

	moveLeft(){
		this.x -= 10;
	}
}