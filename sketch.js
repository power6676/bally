var Ball1, database;
var position;


function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(500,500);

  Ball1 = createSprite(250,250,10,10);
  Ball1.shapeColor = "red";


  var Ball1Pos = database.ref('ball/position')
  Ball1Pos.on("value", readPosition, showError);
}

function draw(){
  background("white");
  
    if(keyDown(LEFT_ARROW)){
      writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
      writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
      writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
      writePosition(0,+1);
    }
    drawSprites();
  
}

function writePosition (x,y) {

database.ref('ball/position') .set({
'x': position.x + x,
'y': position.y + y

})
}


function readPosition(data){
  position = data.val();
  console.log(position.x);
  Ball1.x = position.x;
  Ball1.y = position.y;
}

function showError(){
  console.log("Error in writing to the database");
}
