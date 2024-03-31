// (function one(){
//     return console.log("DB is connected");
// })()


//errror
( () => {
    console.log(
        `DB is connected`
    );
})()


//right code
( (name) => {
    console.log(`DB is connected ${name}`);
}) ('YASH');