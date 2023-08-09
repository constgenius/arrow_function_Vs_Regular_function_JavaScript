//Arrow Functions vs Regular function

//Regular function declaration
// function add(a,b){
//     return a+b;
// }


//Arrow function expression
// const add = (a,b) =>{
//     return a+b;
// }


//Hoisting
//Regular Function are hoisted
//Means you can call a function before it is declared
// console.log(add(1,2))

// function add(a,b){
//     return a+b;
// }

//Arrow function are not hoisted
//You can only call an arrow function after it's declared
// const add = (a,b) =>{
//     return a+b;
// }
// console.log(add(1,2))


//Arrow function do not have there own this value they always inherit from the parent scope function expression
// window.firstName = "const";
// const person={
//     firstName:"genius",
//     fullName: ()=>{
//         return `${this.firstName}`;
//     }
// }
// console.log(person.fullName())

//Regular Function
// window.firstName = "const";
// const person={
//     firstName:"genius",
//     fullName: function(){
//         return this.firstName
//     }
// }
// console.log(person.fullName())


//Implicit Return
// const multiply = (x,y) => x*y

//Have to use return keyword in function declarations
// function multiply(x,y){
//     return x*y
// }

// console.log(multiply(2,4));

//Function declaration have access to arguments object 
// function add(a,b){
//     console.log(arguments.length)
//     return a+b;
// }

// console.log(add(1,2));

//Arrow function do not have access to the arguments object so this code will not work
// const add=(a,b)=>{
//     console.log(arguments.length)
//     return a+b;
// }

// console.log(add(1,2))

