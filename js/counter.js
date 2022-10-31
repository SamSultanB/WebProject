let counter = 0;
function count() {
    counter += 1;
    document.getElementById("click").innerHTML = counter;
    if(counter == 5){
        document.getElementById("add").style.background = "green";
    }else if(counter == 10){
        document.getElementById("add").style.background = "yellow";
    }else if(counter == 20){
        document.getElementById("add").style.background = "red";
    }else if(counter == 50){
        document.getElementById("add").style.background = "silver";
    }else if(counter == 100){
        document.getElementById("add").style.background = "gold";
    }
}

function reset() {
    counter = 0;
    document.getElementById("click").innerHTML = counter;
    document.getElementById("add").style.background = "rgb(2, 2, 77)";

}