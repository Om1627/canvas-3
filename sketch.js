

var drawing=[];
var currentPath = [];
const Engine=Matter.Engine
const World=Matter.World;
const Bodies=Matter.Bodies;

var form

var isDrawing=false;
var gameState = 0;
 var engine,world;
 var g;
 var canvas;
 var database;
 
function setup() {
    database=firebase.database();
    canvas= createCanvas(600, 600);
    canvas.mousePressed(startPath);
    canvas.mouseReleased(endPath);
   

    engine=Engine.create();
    world=engine.world;

    
  var saveButton = select('#saveButton');
  saveButton.mousePressed(saveDrawing);

  var clearButton = select('#clearButton');
  clearButton.mousePressed(clearDrawing);
  
  
 
   
   
}
    
   function draw() {
    

    background(0);
   
    Engine.update(engine);
   
    

    if (mouseIsPressed&&isDrawing===true){
        var point={
            x:mouseX,
            y:mouseY,
        }
        currentPath.push(point);
    }

    
    stroke(255);
    strokeWeight(4)
    noFill();
    for (var i=0;i<drawing.length;i++){
        var path = drawing[i];
        beginShape();
        for (var o=0;o<path.length;o++){
        vertex(path[o].x,path[o].y)
    }
    endShape();

   }}
   function startPath(){

       currentPath=[];
       drawing.push(currentPath);
       isDrawing=true
   }
   function endPath(){
       isDrawing=false;
   }

   function saveDrawing(){
    var nameinput = select('#nameInput');
    var name = nameinput.value();
    var ref=database.ref('drawings')
    var data = {
        name:name,
        drawing:drawing
    }
    ref.push(data);
   }

   function clearDrawing(){
       drawing=[];
   }
   

   

