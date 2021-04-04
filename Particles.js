class Particles
{
    constructor(x,y,radius)
    {
        var options = {
         restitution:0.4
        }
        this.r=radius;

        this.body = Bodies.circle(x,y,radius,options);
        this.color = color(random(0,225),random(0,225),random(0,225));

       
        World.add(world, this.body)
   

     
     }
     display()
     {
    
        var pos = this.body.position;
        var angle = this.body.angle;

        
        push();
        fill(this.color)
        ellipseMode(RADIUS);
        ellipse(pos.x,pos.y,this.r,this.r);
        pop();
     }

}
