class Box{
constructor(x,y,w,h)
    {
        this.body= Bodies.rectangle(x,y,w,h);
        this.width=w;
        this.height=h;
        World.add(myworld,this.body);
    }
        display()
    {
        var pos=this.body.position;
        var angle= this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop();
    }



}