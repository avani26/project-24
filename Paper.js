class Paper{
    constructor(ellipse=x,y,width,height){
        var options={
            isStatic:false,
            restitution:3,
            friction:0.2,
            density:1.2  
           }
    this.body= Matter.Bodies.circle(150,400,15,[options]);
    World.add(world,this.body);
        }
       display(){
           var pos=this.body.position;
           ellipseMode(CENTER);
           ellipse(pos.x,pos.y,this.width);
       } 
    }