class Polygon{
constructor(x,y,width,height){
var options = {
isStatic : false,
restitution : 0.1,
friction : 0.01,
density : 0.02
}
this.body = Bodies.rectangle(x,y,width,height,options);
World.add(world,this.body)
}
display() {
       var pos = this.body.position;
       push();
       strokeWeight(2);
       fill("yellow");
       rect(pos.x, pos.y, this.width, this.height);
       pop();
       

   }
}