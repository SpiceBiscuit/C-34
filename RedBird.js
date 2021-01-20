class Ball{
    //creates a new Box object
    constructor(a,b) {
        var options = {
            'restitution':0.8,
            'friction':2.0,
            'density':4.0
        }
        this.body = Bodies.circle(a,b,35,options);
        this.radius = 35;
        World.add(spiceBiscuitsWorld, this.body);
    }

    display(){
        var pos =this.body.position;

        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        ellipseMode(RADIUS);
        stroke("brown");
        strokeWeight(4);
        fill("red");
        ellipse(0, 0, this.radius);
        pop();
    }
}