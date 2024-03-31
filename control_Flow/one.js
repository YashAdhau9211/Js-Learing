let months = 3

switch (months) {
    case 1:
        console.log("Jan");
        break;
    case 2:
        console.log("Feb");
        break;
    case 3:
        console.log("Mar");
        // break;
    case 4:
        console.log("Apr");
        // break;
    case 5:
        console.log("May");
        // break;
        

    default:
        break;
}


// falsy value

// 1. false
// 2. zero (-0)
// 3. BigInt 0n
// 4. ""
// 5. null
// 6. undefined
// 7. NaN



// truthy value

// 1. "0"
// 2. "false"
// 3. " "
// 4. []
// 5. {}
// 6. function () {}


//how to check empty arr

arr = []

if (arr.length === 0) {
    console.log("Empty arr");
}

// how to find if object is empty or not
obj = {
    username : "YASH"
}

if (Object.keys(obj).length === 0){
    console.log("Empty Object");
}


nullishr
