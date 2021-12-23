const readline = require('readline');
const Rules = require('./movesGame');
const Encrypt = require('./encrypt')
 
const rl = readline.createInterface({
 input: process.stdin,
 output: process.stdout,
});

function isValidElements(moves) {
 if (moves.length < 3 || (moves.length % 2 == 0)) {
  console.log('There must be an odd number of elements, at least 3\n');
  return false;
 }
  return true;
};

function isValidChoise(el, moves) {
 if (0 > el > moves.length - 1) {
  console.log('This element is not found, try again');
  return false;
 }
 return true;
};

function isUniqueElements (moves) {
  const repeat = moves.filter((item, index)=> moves.indexOf(item)!==index)
  return repeat.length===0
}

const game=()=>{
 rl.question(
'Enter your game elements (odd number not less than 3 )!\n ',
  value => {
  const gameElements = value.trim().split(' ');
   if (!isValidElements(gameElements)) {
    game();
    return;
   } 
   if (!isUniqueElements(gameElements)) {
    console.log("Sorry, your elements are repeated")
    game();
    return;
   }  

  const gameIteration = () =>  {
   const continueGame = ()=> {
    rl.question('New round? (y/n)\n', value => {
    value==='y'? gameIteration(): rl.close()
    })}

    const gameAlgorithm = new Rules(gameElements);
    const compMove = gameElements[gameAlgorithm.CompChooseIndex]
    const encrypt = new Encrypt(compMove);
    console.log("HMAC : " + encrypt.cryptoMove)
    console.table(gameElements);

    rl.question( 'Make you choise by index!\n',
    value=> {
     if (!isValidChoise(value, gameElements)) {
     console.table(gameElements)
     gameIteration()
     return
    }

    console.log('Your choise is ', '"', gameElements[value], '"')
    console.log(`My choise is "${compMove}", so ...`)
    
    if (compMove == gameElements[value]) {
     console.log('Draw!')
     continueGame()
     return
    }

    const compWins = gameAlgorithm.getCompWins();
    compWins.includes(gameElements[value]) ? console.log('You lose!') : console.log('You win!');
    console.log('HMAC key: ', encrypt.key)
     
    continueGame()
   }) 
}
gameIteration()
}
)
}
        
game()
