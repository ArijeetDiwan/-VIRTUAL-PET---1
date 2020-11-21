
var food;
var background;
var database;
var dog;
function preload(){
  dogImage=addImage(dogimg.png);
  dogImage=addImage(dogimg1.png);
}

function setup() {
	createCanvas(500,500);
  database = firebase.database();
  food = new Food();
}


function draw() {  
  background(black);

  drawSprites();
  

}



