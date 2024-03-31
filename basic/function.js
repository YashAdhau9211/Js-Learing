function sayMyName(num1 , num2){
    let result = num1 + num2
    console.log("YASH");
    return result
}


function userislogin(username){
    if (username == undefined){
        return `Enter the username.`
    }else{
        return `${username} just login`
    }
}


// const result = sayMyName(3,6)

// console.log("Result: " , result);

console.log(userislogin(""));

const order = {
    name : "Uni Ball pen",
    price : 50
}

function returnObject(getObject){
    return `${getObject.name} is the item and ${getObject.price} INR is the price of it.`
    
}

console.log(returnObject(order));


function cart(...num3){
    return num3
}

console.log(cart(10 , 50 , 60 , 70));

arr = [10,20,30,40,50]
function arrayPrinting(getArray){
    console.log(getArray[3]);
}

arrayPrinting(arr)