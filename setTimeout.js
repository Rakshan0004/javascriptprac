
//set timeout
const timerId = setTimeout(() => {
    console.log("Hello after 2 secs");
}, 2000);

clearInterval(timerId);

//setInterval

const timer = setInterval(() => {
    console.log("Gello after every 2 seconds")
}, 2000);


setTimeout(() => {
    clearInterval(timer)
},  5000)