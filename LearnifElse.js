// Basic
//if (false) {
//  console.log('I am inside if the block');
//  console.log('I am still inside the block');
//} else if (true) {
//  console.log('I am inside IF IN CAPS BLOCK');
//} {
//  console.log('NOTICE THE PART');
//}
// Real example
var whoIsHere = 'user'
if (whoIsHere === 'user') {
  console.log('Getting message for user');
  console.log('Allow access to view all course');
}else if (whoIsHere === 'teacher') {
  console.log('Getting message for teacher');
  console.log('Allow access to view his course');
}else {
  console.log('Message : Please varify your email');
  console.log('Send user an email for varification');
}
