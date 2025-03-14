console.log("testing js")

var number = 10;

var string = "gello";

var isRad = true;

if(number == 10){
    console.log("Yeah buddy");
}else{
    console.log("Nope..!");
}
document.getElementById('box').innerHTML = number + 14;

var grocerieres= ['milk', 'eggs', 'cheese'];

for(var i=0; i<grocerieres.length; i++){
    console.log(grocerieres[i]);
}

document.getElementById('box').addEventListener('click', function(){
    alert("i got clicked");
});