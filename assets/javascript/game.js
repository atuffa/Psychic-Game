"use strict";

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
    const wordChoice = ["a","b","c","d","e","f", "g", "h", "i", "j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
    const words = wordChoice.length;
    const randomWordGuessed = wordChoice[Math.floor(Math.random() * words)];
    let text = " ";
    let guessedWord ;
    str = event.key; 
    let winCount = function(){
      
       
        add++;
        return add ;
        
    };

    let lossCount = function(){
        
        loss ++;
        return loss;
        
    };

    let guessesLeft = function(){
        guess --;
        return guess;
        
    };
    // WORD CONCATENTION FOR THE WRONG LETTER GUESSED

    function insert ( ) {
    arrayOne.push( str );
    //message.innerHTML = ",";
    message = document.getElementById("guessed");
    message.innerHTML = " ";
    message.innerHTML += arrayOne.join(",");
    };
    
   
    if (str === randomWordGuessed){
        console.log(add);
            guess = 10;
           document.getElementById("wins").innerHTML = winCount();
           arrayOne = [];
           message.innerHTML = "";
           document.getElementById("left").innerHTML = 9;
            

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
        document.getElementById("left").innerHTML = 9;
       
   }  
   
   
   }, true);

   //IF CONDITION TO RESTART/RELOAD THE FUNCTION without refreshing the game

   if (guess === 0){
    game();
   }
   };

// CALLING THE FUNCTION TO START THE GAME 
game();