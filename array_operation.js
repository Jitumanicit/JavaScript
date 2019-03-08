//Some array operation which may shift, push, pop,splice
const numbers = ['One','Two','Three','Four','Five','Six']
//To print numbers
numbers[1] = 'Something'
console.log(numbers);
//start(shift and unshift operation)
console.log(numbers.shift());
console.log(numbers);
numbers.unshift('Something')
console.log(numbers);
//end(pop and push operation)
console.log(numbers.pop());
console.log(numbers);
numbers.push('Seven')
console.log(numbers);
//middle(replace number in the array)
numbers.splice(2, 1, 'Something')
console.log(numbers);
numbers.splice(2, 2, 'Something')
console.log(numbers);
