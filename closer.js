

function outerFunction() {
    
    let outerVar = "this is from the outside!"

    function innerFunction(){
        console.log(outerVar);
    }

    return innerFunction;
}

const closerFunction = outerFunction();

closerFunction();

// we need closer to declare private variables as concept of private variavles is not present in js
// 

function counter() {
    let count = 0;

    return {
        increment: function(){
            count++;
            return count;
        },
        decrement: function(){
            count--;
            return count;
        },
        displayCount: function(){
            let message = "Current count: " + count;
            return message;
        }

    }
}

const myCounter = counter();

console.log(myCounter.displayCount());
console.log(myCounter.decrement());
console.log(myCounter.displayCount());
console.log(myCounter.increment());
console.log(myCounter.displayCount());
console.log(myCounter.increment());
console.log(myCounter.displayCount());
