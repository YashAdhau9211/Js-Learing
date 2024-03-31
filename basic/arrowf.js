function one(){
    let username = "Yash"
    console.log(this);
}

// one()

//arrow function
const two = () => {
    let username = "Yash"
    console.log(this);

}

//two()

const addTwoNumber = (num1 , num2) => {
    return console.log(num1 + num2);
}

// addTwoNumber(5,6)

// returing value without using return
const addThreeNumber = (num1,num2,num3) => (console.log(num1+num2+num3))

// addThreeNumber(5,6,3)

// return can on;y be used in currley brecese amd not in perentsise
const returnObject = (num1,num2) => {username: "YASH"}

console.log(returnObject(1,2));