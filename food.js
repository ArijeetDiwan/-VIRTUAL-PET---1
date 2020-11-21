class Food {
    constructor(){

    }
     
 function redStock(data){
     
     food= data.val();
     
    }
  
   function writeStock(x){
       if(x<=0){
x=0;
 }else{
x=x-1

}

      database.ref('/').update({
        food:x
      });
   }

  
  
  if(keyIsDown(UP_ARROW)){
    writeStock(food);
   dog.addImage(dogHappy);
  }
    