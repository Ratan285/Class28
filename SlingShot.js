class Slingshot {
constructor(bodyA,pointB){
    var options = {
        bodyA: bodyA,
        pointB: pointB,
        stiffness: 0.04,
        length:10
    }
   this.pointB = pointB;
   this.sling = Constraint.create(options);
   World.add(world,this.sling);
}

fly(){

    this.sling.bodyA = null;


}
//instead of writing big terms(this.sling.bodyA.position) give a nick name==namespacing;
display(){

    if(this.sling.bodyA){
    var pointA = this.sling.bodyA.position;
    var pointB = this.pointB;
    strokeWeight(3);
    //bird.body constraintLog.body
    line(pointA.x,pointA.y,pointB.x,pointB.y);

    }
}

}