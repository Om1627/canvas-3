
class Box{
       
    
    constructor(x,y){
        var options={
            isStatic:true,
        }
        this.body=Bodies.rectangle(x,y,2,2,options);
        
        this.width=2;
        this.height=2;
        World.add(world,this.body);
      
    }
    
    
    display(){
        var pos=this.body.position;
        var angle=this.body.angle;
        

       
            push();
            translate(pos.x,pos.y);
            rotate(angle);
            rectMode(CENTER);
            fill("green");
            
            rect(0,0,2,2); 
            pop();  
        
        
    }
}


















