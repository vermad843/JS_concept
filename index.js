// Mathematical operations

// let firstNumber = 5;
// let secondNumber = 7;

// let add = firstNumber + secondNumber;
// console.log(add);

// let subtract = firstNumber - secondNumber;
// console.log(subtract);

// let multiply = firstNumber * secondNumber;
// console.log(multiply);

// let divide = firstNumber/secondNumber;
// console.log(divide);


// template literal 


// let firstName = 'Dk';
// let lastName = 'Verma';


// let fullName = `${firstName} with ${lastName}`;
// console.log(fullName); 


// Strings and numbers

// console.log("2" + 2)//22
// console.log(11 + 7)//18
// console.log(6 + "5")//65
// console.log("My points: " + 5 + 9)//My points: 59
// console.log(2 + 2)//4
// console.log("11" + "14")//1114


// if,else if ,else

// let firstCard = 15;
// let secondCard = 6;

// let sum = firstCard + secondCard;

// if(sum < 21) {
//     console.log('Do u want to a new card')
// }else if(sum === 21) {
//     console.log('You got a blackjack')
// }else {
//     console.log('you are out of the game')
// }


// boolean 

// console.log(4 === 3) //false
// console.log(5 > 2) // true
// console.log(12 > 12) // false
// console.log(3 < 0) // false
// console.log(3 >= 3) // true
// console.log(11 <= 11) //true
// console.log(3 <= 2) // false 


// Array

// let changes = [7,4];

// changes.push(9);
// console.log(changes);

// changes.pop();
// console.log(changes);

// changes.unshift(9);
// console.log(changes);

// changes.shift();
// console.log(changes);


// for loop 

// let array = [1,2,3,4,5,6,7,8,9,10,11]

// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
//     console.log(element);    
// }



// Math.random()-between 0 to 1 


// let randomNumber = Math.random();//0 to 1
// console.log(randomNumber);




// Math.floor() - round to lower no

// let flooredNumber = Math.floor(3.9);//3
// console.log(flooredNumber);




// Function(random number between 1 to 6)


function rollDice() {
    let randomNumber = Math.floor(Math.random() * 6 ) + 1
    return randomNumber;
}

console.log(rollDice());