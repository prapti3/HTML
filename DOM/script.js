//1. Selection of Element

var h1 = document.querySelector('h1');
console.log(h1)

//2. Changing HTML using js

h1.innerHTML = "Bye Everyone";


//3. Changing CSS
h1.style.color = "green"

//4. Event Listner

var b = document.querySelector('h1')
b.addEventListener("click",function() {
    console.log("Hello")
    b.innerHTML= "Hello everyone"
    b.style.color = "yellow"

})

// when we will click on h1 the given function will work


