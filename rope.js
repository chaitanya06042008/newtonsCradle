class Rope{
    constructor(bodyA, bodyB, length, stiffness, offsetX, offsetY) {
      // this.offsetX=offsetX
    // this.offsetY=offsetY

        var options = {
           bodyA:bodyA,
            bodyB:bodyB,
            length:length,
offsetX:offsetX,
offsetY:offsetY,
            stiffness:stiffness,
           // pointB:{x:this.offsetX, y:this.offsetY}
           
        }


this.rope=Constraint.create(options)
World.add(world, this.rope)
}
display(){
   fill("green")
    var pos1=this.rope.bodyA.position
    var pos2=this.rope.bodyB.position
//console.log(pos1)
//console.log(pos2)
    strokeWeight(3)
    stroke("green")
    line(pos1.x, pos1.y, pos2.x+this.rope.offsetX, pos2.y+this.rope.offsetY)
}
}
