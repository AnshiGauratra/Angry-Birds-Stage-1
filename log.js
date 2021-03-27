class Log{
    costructor(x,y,height,angle){
        var options={
          'restitution': 0.8,
          'friction': 0.3,
          'density': 0.5
        }

        this.body = Bodies.rectangle(x,y,10,height,options);
        this.width = 10;
        this.height = height;
        Matter.Body.setAngle(this.body,angle);
        World.add(world,this.body);
    }
    display(){

        var angle= this.body.angle;
        var pos = this.body.position;
        fill(255);
        push();
        translate(pos.x,pos.y);
        rotate(angle);

        rectMode(CENTER);
        rect(0,0, this.width,this.height);
        pop();
    }


}