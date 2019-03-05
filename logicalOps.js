//&& - AND OPERATOR both side need to be true
//|| -  OR OPERATOR - One side need to be true

let isVerified = true
let isLoggedIn = true
let hasPaymentToken = true
let hasGuest = true

if (isVerified && isLoggedIn && hasPaymentToken) {
  console.log('Greeting message to user');
  console.log('Give access to paid course');
} else if(isVerified || hasGuest){
  console.log('Allow free previews');
} else {
  console.log('MESSAGE: Please contect admin');
}
