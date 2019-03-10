const myTodos = []
myTodos.push('Buy Brade')
myTodos.push('Record video from youtube')
myTodos.push('Go to Gym')
myTodos.forEach(function(todo, index){
  console.log(`Your task number ${index + 1} is : ${todo}`);
})
