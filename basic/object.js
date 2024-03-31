const sym = Symbol("myKey1")

const sheUser = {
    herName : "Sneha",
    myName : "Yash",
    [sym] : "myKey1",
    email : "yash@google.com",
    inLove : true,
    "isShe" : false 
}


// console.log(sheUser.inLove);
// console.log(sheUser["herName"]);
// console.log(sheUser["isShe"]);
// console.log(sheUser[sym]);
// console.log(typeof(sheUser.sym));

console.log(sheUser);