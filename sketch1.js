//Create variables here
var dog, happyDog, database,foodS, foodStock,dogimage,hdogimage,milk,milkimage



function preload()
{
  //load images here
  dogimage= loadImage("images/dogImg.png")
  hdogimage= loadImage("images/dogImg1.png")
  
 milkimage= loadImage("images/milk.png")
}

function setup() {
  database=firebase.database();
	createCanvas(500, 500);
  dog=createSprite(350,400)
  dog.addImage(dogimage)
  dog.scale=0.1
  
  milk=createSprite(300,400)
  milk.addImage(milkimage)
  milk.scale=0.1


  foodStock=database.ref('Food');
  foodStock.on("value",readStock);
  textSize(15);

}


function draw() {  
background(46,139,87)


if(keyWentDown(UP_ARROW)){
  writeStock(foodS)
  dog.addImage(hdogimage)
  dog.scale=0.1
  
}

  drawSprites();
  //add styles here
  fill(0)

text("NOTE:Press UP_ARROW KEY To Feed Drago Milk!",50,50)
text("Food remaining : "+foodS,190,470);


}

//Function to read values from DB
function readStock(data){
  foodS=data.val();
  console.log(foodS)
}

//Function to write values in DB
function writeStock(x){

  if(x<=0){
    x=0
  }
  else{x=x-1}
  database.ref('/').update({Food:x})
}