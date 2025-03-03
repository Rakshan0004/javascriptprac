

const data = {name: "rak", age: 22};

function fetchData(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(data);
        }, 1000);
    })
}

fetchData().then(
    data => {
        console.log("Data: ", data );
}).catch(err => {
    console.log("Error: ", err);
})
