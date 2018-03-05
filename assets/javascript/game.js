// FUNCTION USED TO RELOAD/RESTART WHEN THE CONDITONS ARE MET

function game(){
    // VARIABLES THAT ARE USED GLOBALLY
    let add = 0;
    let loss =  0;
    let guess = 9;
    let str = " ";
    let guessed = " ";
    let arrayOne = []
    let message = " ";
 // FUNCTION THAT ARE TRIGERED WHEN A KEY IS PRESSED

 window.addEventListener("keydown", function(event) {
     const wordChoice = ["a","b"]
    const words = wordChoice.length;
    const randomWordGuessed = wordChoice[Math.floor(Math.random() * words)];
    console.log(randomWordGuessed);
    let text = " ";
    let guessedWord ;
     str = event.key; 
    let winCount = function(){
      
       
        add++;
        console.log(add);
        return add ;
        
    };

    let lossCount = function(){
        
        loss ++;
        console.log(loss);
        return loss;
        
    };

    let guessesLeft = function(){
        guess --;
        console.log(left)
        return guess;
        
    };
    // WORD CONCATENTION FOR THE LETTER GUESSED

    function insert ( ) {
    arrayOne.push( str );
    //message.innerHTML = ",";
    message = document.getElementById("guessed");
    message.innerHTML = " "
    console.log()
    message.innerHTML += arrayOne.join(",");
    };
    
   
    if (str === randomWordGuessed){
        console.log(add);
            guess = 10;
           document.getElementById("wins").innerHTML = winCount();
           arrayOne = [];
            

      } 
      if (str !== randomWordGuessed && guess > 0){
          
     document.getElementById("left").innerHTML = guessesLeft();
      insert ( );
      
     
    }
      if (guess === 0 ) {
        document.getElementById("losses").innerHTML = lossCount();
        message.innerHTML = "";
        arrayOne = [];
        guess = 10;  
        document.getElementById("guessed").innerHTML = 9;
       
   }  
   
   
   }, true);
   //IF CONDITION TO RESTART/RELOAD THE FUNCTION

   if (guess === 0){
    game();
   }
   };

// CALLING THE FUNCTION TO START THE GAME FUNCTION
game();