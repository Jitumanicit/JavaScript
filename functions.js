//Another example
let sayHello = function (name){
  console.log("Greeting message from user");
  console.log(`Hay ${name}`);
}
sayHello('John')

// Another example
let fullName = function(firstName, lastName){
  console.log('Welcome to LCO');
  console.log(`Happy to have you, ${firstName} ${lastName}`);
}
fullName('John', 'Doe')

// Another example based upon the number return
let myAdder = function(number1, number2){
    let added = number1 + number2
    return added
}
console.log(myAdder(3, 4));
