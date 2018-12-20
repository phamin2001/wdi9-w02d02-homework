// Homework W02d02

let arrayOfCards = [
    {
      name: "Bulbasaur",
      damage: 60
    }, {
      name: "Caterpie",
      damage: 40
    }, {
      name: "Charmander",
      damage: 60
    }, {
      name: "Clefairy",
      damage: 50
    }, {
      name: "Jigglypuff",
      damage: 60
    }, {
      name: "Mankey",
      damage: 30
    }, {
      name: "Meowth",
      damage: 60
    }, {
      name: "Nidoran - female",
      damage: 60
    }, {
      name: "Nidoran - male",
      damage: 50
    }, {
      name: "Oddish",
      damage: 40
    }, {
      name: "Pidgey",
      damage: 50
    }, {
      name: "Pikachu",
      damage: 50
    }, {
      name: "Poliwag",
      damage: 50
    }, {
      name: "Psyduck",
      damage: 60
    }, {
      name: "Rattata",
      damage: 30
    }, {
      name: "Squirtle",
      damage: 60
    }, {
      name: "Vulpix",
      damage: 50
    }, {
      name: "Weedle", 
      damage: 40
    }
  ];


//let arrayOfCardsForGame = [];  // pool of 10 unique cards for game
let playerRandomCards = [];     // each round it takes 3 unique cards
let computerRandomCards = [];   // each round it takes 3 unique cards


function createRandomNumber(array) {
    return Math.floor(Math.random() * array.length);
}

// create an array with 10 unique cards in it
// function createArrayOfCardsForGame (arrayOfCards) {
//     let lengthOfArrayOfCards = arrayOfCards.length;
//     let repeatLoop = lengthOfArrayOfCards - 10;
   
//     arrayOfCardsForGame = arrayOfCards;
   
//     for(let i = 0; i < repeatLoop; i++) {
//         let randomNum = createRandomNumber(arrayOfCards);
//         arrayOfCardsForGame.splice(randomNum, 1);
//     }
//     console.log(`Array of cards for game with 10 unique cards: `);
//     console.log(arrayOfCardsForGame);   
// }

//createArrayOfCardsForGame(arrayOfCards); // OK

function createRandomCardsForPlayers(arrayOfCards) {
    

    
    for (let x = 0; x < 3; x++) {
        let randomNum = createRandomNumber(arrayOfCards);
        playerRandomCards.push(arrayOfCards.splice(randomNum, 1)[0]);
        randomNum = createRandomNumber(arrayOfCards);
        computerRandomCards.push(arrayOfCards.splice(randomNum, 1)[0]);
    }
    console.log(`Arrays of 3 unique cards for each players: `);
    console.log("Cards of Player in this round: "); console.log(playerRandomCards);
    console.log("Cards of computer in this round: "); console.log(computerRandomCards);
}


function game() {
    const score = {
        player: 0,
        computer: 0
    }
    const roundsWon = {
        player: 0,
        computer: 0
    }

    // create a for loop for round which is 3
    for (let round = 0; round < 3; round++) {
        createRandomCardsForPlayers(arrayOfCards);
        console.log("Remaining arrays of cards is: "); console.log(arrayOfCards); 
        console.log(`Round: ${round + 1}`);
        
        // loop for play 3 cards 
        let i = 0;
        for (; i < 3; i++) {
            console.log("Player card is: "); console.log(playerRandomCards[i]);
            
           
            let playerDamage = playerRandomCards[i].damage; 
            let randNum = createRandomNumber(computerRandomCards);
            let computerDamage = computerRandomCards[randNum].damage; 
            console.log("Computer card is: "); console.log(computerRandomCards[randNum]);
            console.log("Player damage is: " + playerDamage);
            console.log("Computer damage is: " + computerDamage);
            
            if(playerDamage > computerDamage) {
                score.player ++;
                roundsWon.player++;
            } else if(playerDamage < computerDamage){
                score.computer++;
                roundsWon.computer++;
            } 
            console.log(`Score of round ${round + 1}`); console.log(score);
            console.log(`Rounds Won round ${round + 1}`); console.log(roundsWon);

            let j = i + 1;
            // player's cards left in his hand
            if(j < playerRandomCards.length) {
                console.log("Player's cards left: ");
                for(j; j < playerRandomCards.length; j++) {
                    console.log(playerRandomCards[j]);
                }

                // computer's cards left in its hand
                console.log("Computer's cards left: ");
                for(let c = 0; c < computerRandomCards.length; c++) {
                    if(c != randNum) {
                        console.log(computerRandomCards[c]);
                    }
                }
            }
        }
        
        playerRandomCards.length = 0;
        computerRandomCards.length = 0;
    }
    
}

function runTheGame() {
    console.log(arrayOfCards.length);
    while(arrayOfCards.length > 0 && (arrayOfCards.length % 6 === 0 || arrayOfCards.length / 6 >= 1)){
        game();
    }
    console.log("Game is over!!");
}

runTheGame();


