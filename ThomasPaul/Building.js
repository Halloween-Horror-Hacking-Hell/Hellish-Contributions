class Building{
    constructor()
    {
      fill("grey");
      this.height=10;
      this.position=1;    
      this.yPosition=1080;
      this.width=90;
      this.floors=10;
      
      //Each floor is approximately equal to 12 feet
      //If a building has 3 floors it would be 3*12=36 feet high.
      this.building_height=this.floors*12;
      
    }  
    display()
    {
     this.height=this.floors*10;
     this.yPosition=1080-(this.height);
      //this.xPosition=395-(this.height);
     this.xPosition=this.position*125;
     rect(this.xPosition,this.yPosition, this.width, this.height); 
    }  
    
  }
  