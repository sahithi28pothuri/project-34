class Rope{
	constructor(bodyA,pointB)
	{
		var options={
			bodyA:bodyA,
			pointB: pointB,
			stiffness: 1,
			angularStiffness: 0.5,
			length: 500
		}
        this.pointB = pointB;
		//this.pointX = bodyA.x;
		//this.pointY = bodyA.y-250;
		this.rope=Constraint.create(options)
		World.add(world,this.rope)
	}

	display()
	{

		var pointA=this.rope.bodyA.position;
		var pointB=this.pointB;
		push();
		strokeWeight(2);
		stroke("#fff");
		line(pointB.x,pointB.y,pointA.x,pointA.y);
		pop();
	}

}