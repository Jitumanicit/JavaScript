let iAmGlobal = 'Some value'
if (true) {
    var iAmLocal = 'someMoreValue'
    iAmGlobal = 'Superman'
    console.log(iAmGlobal);
    console.log(iAmLocal);
}
console.log(iAmLocal);
console.log(iAmGlobal);
//so much defferent in var and let
