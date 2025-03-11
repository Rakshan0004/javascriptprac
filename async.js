
async function fetchData() {

    try{
        const response = await fetch("https:// jsonplaceholder.typicode.com/todos/1");

        const data = await response.json();

        console.log("Data fetched", data);

    }catch(err) {
        console.log("Error", err);
    }
}