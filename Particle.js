class particle
{
	constructor(x,y,r)
	{
		var options={
			isStatic:false,
			restitution:0.3,
			friction:0.5,
			density:1.2
		}
		this.x=x;
		this.y=y;
        this.r=r;
        this.body=Bodies.circle(this.x, this.y, this.r/2, options)
        this.color=color(random(0,225), random(0,225), random(0,225));
		World.add(world, this.body);

	}
	display()
	{
			
			var particlepos=this.body.position;		

			push()
			translate(particlepos.x, particlepos.y);
			rectMode(CENTER)
			strokeWeight(3);
			fill(255,0,255)
			ellipse(0,0,this.r, this.r);
			imageMode(CENTER);
			pop()
            
	}

}