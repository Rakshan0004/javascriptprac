const grandparent = document.querySelector(".grandparent");
const parent = document.querySelector(".parent");
const child = document.querySelector(".child");

grandparent.addEventListener("click", e => {
    console.log("GrandParent 1");
});


parent.addEventListener("click", printI)

    setTimeout(() => {
        parent.removeEventListener("click", printI)
    }, 4000)


child.addEventListener("click", e => {
    
    console.log("Child 1")
})


function printI() {
    console.log("I");
}
