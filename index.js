i
function receivesAFunction(callback){
    if(typeof callback==="function"){
        callback();
        
    }

}
   
  function returnsANamedFunction() {
   return function namedFunction() {} 
    
  }
  
  
   function returnsAnAnonymousFunction (){
    return function (){

    }
  }
  