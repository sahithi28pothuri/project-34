class Ball{
    constructor(x,y,radius){
        var options = {
            'isStatic': false,
            'restitution': 1,
            'friction': 1,
            'density': 0.2,
            slop: 1,
            frictionAir: 0.0,
            inertia: Infinity
        }
        this.radius = radius;
        this.body = Bodies.circle(x,y,radius,options);
        World.add(world,this.body);
    }
    display(){
        ellipseMode(CENTER);
        fill("purple"); 
        ellipse(this.body.position.x,this.body.position.y,45,45);
        
    }
}