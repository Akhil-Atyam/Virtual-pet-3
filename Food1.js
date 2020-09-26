class Food {
    constructor(){
    this.foodStock=100;
    console.log(this.image1);
    }
    preload(){
    
    }
  
   updateFoodStock(){}
  
   deductFood(){}
  
    getFoodStock(){}
  
    Display(Num)
    {
        var count = 0;
        var foodoid;
       if(Num != count){
        if(Num != count){
            
        }
           //image(imm,200,300);
            var image1 = loadImage("Untitled.png");
           var x=30,y=80;
           count = Num;
      imageMode(CENTER);
   
         this.foodStock = Num;
      if(this.foodStock != 0)
      {
        for(var a=1;a <=this.foodStock;a++)
        {

            if(a%5===0)
            {
                console.log(this.image);
                x=30;
                y=y+50;
            }
            foodoid = createSprite(x,y,10,10  );
            foodoid.addImage(image1);
            foodoid.scale = 0.1;
            x=x+60;
        }


      }

     }
    }
  }