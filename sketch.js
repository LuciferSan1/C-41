var road;
var PC1;
var NPC1 =[];

var score = 0;
var userLives = 5;

//Declaring image variables
var NPCImage,PCImage,heartImg,roadImg

//Declaring sound variables
var horn,game,start;

function preload(){
	NPCImage = loadImage("assets/orange.png");
	PCImage = loadImage("assets/Car_Red.png");
	heartImg = loadImage("assets/heart.png");
	roadImg = loadImage("road4.png")
}

function setup(){
	createCanvas(800, 670);

	road = createSprite(400,300,600,600);
	road.addImage("road",roadImg);
	road.scale = 4;
	road.velocityY = 6;
	road.y = road.height/2;

	/*horn = loadSound("horn.mp3");
	game = loadSound("game.mp3");
	start = loadSound("start.mp3");*/

	PC1 = new PC(260,500);
}

function draw(){
	background(0,0,0);

	if(road.y>450){
		road.y = road.height/2;
  }
  
      
  drawSprites();

	textSize(33);
	fill(rgb(64, 250, 18));
	text("Score: " + score, 645, 60);

	PC1.display();

	if (keyIsDown(RIGHT_ARROW)){
		PC1.moveRight();
	}

	if (keyIsDown(LEFT_ARROW)){
		PC1.moveLeft();
	}

	if (World.frameCount % 200 === 0)	NPC1.push(new NPC(random(0, width-80),-20));

	for (var i = 0;i < NPC1.length ;i++){
		NPC1[i].display();
		NPC1[i].move();

		if (NPC1[i].isLeftBehindBy(PC1) && NPC1[i].isLeftBehind === false){
			score += 5;
			NPC1[i].isLeftBehind = true;
		}
		
		if (NPC1[i].collide(PC1)){
			//horn.play();

			NPC1.pop();

			score+= -5;

			userLives+=-1;
		}

		else if (NPC1[i].continue()) NPC1.pop();
	}

	for (var i = 0; i < userLives; i++)	image(heartImg, 10 + (i * 60),620,50,50);

	if (score > 49){
		noLoop();

		textSize(33);
		fill("violet");
		text("Congrats, you did it!", 260,300);

		//start.play();
	}

	if (userLives === 0){
		noLoop();

		textSize(50);
		fill("red");
    text('GAME OVER!', 260,300);

  }

  if(PC1.x>800||PC1.x<0){
    PC1.x=400;
  }
}