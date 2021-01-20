class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.5,
            length: 400
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(spiceBiscuitsWorld, this.sling);
    }

    display(){

        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            stroke(48, 22, 8);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
    
}