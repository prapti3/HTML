/** 
var a =4;

if(a>5){
    console.log("hello")
}else{
    console.log("Not a hello")
}

var age = prompt("Enter your age")

if(age >18){
    console.log("eligible")
}
else{
    console.log("Not eligible")
}


*/

// var a=5
// while(a>0){
//     console.log(a)
//     a--;
// }


// for(var a=0;a<=5;a++){
//     console.log(a);

// }

/**

var a =10
var b = '10'

if(a==b){
    console.log("true")
}else{
    console.log("false")
}

 */


function hey(){
    console.log("Heeloo0")
}
hey();

function greet(a){
    console.log("Good morning",a)
    return 20;
}
var a = greet(10)
console.log(a)

//first class function

var abc = function(){
    console.log("function")
}
abc()

//fat arrow function

var ab = () => {
    console.log("HEy")
}
ab()

// var a
// let b
// const



// Array 

var a = [ 1,2,3,4,5]
// console.log(a) 

a.push(30); // add value
a.pop(); //remove last element

// console.log(a.length)


// Higher order functions


// function which asks a function in its callback

a.forEach(x => {
    console.log(x)
    console.log("Hello")
});

//  => {} == function(){} == function abc(){}



// () - functions
// {} - object
// [] - array


//  ****************** OBjects ********
// key:value pair


var obj = {
    user:"Harsh",
    age: 20
}
console.log(obj)
console.log(obj.user)
console.log(obj.age)

//method = functions inside object

var user = {
    userName: "Prapti",
    age : 34,
    greet : function () {
           console.log("Good morning")
           return 10;
    }
}

console.log(user)
console.log(user.greet())


// object inside array
//array of objects -->

var arr = [
    {name:"prapti"},
    {age: "26"},
    {city: "Pune"},
    10,20
]


console.log(arr[0].name);
console.log(arr[1])
