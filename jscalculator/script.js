var arr = document.getElementsByName("digit");
var flip = false;
var box= document.getElementById("outputdisplay");

var displaychange= function() {
    

    if (flip === true){
    document.getElementById("outputdisplay").innerHTML= this.innerHTML;
    flip = false;
    }
    else {
        var text = document.getElementById("outputdisplay").innerHTML;
        document.getElementById("outputdisplay").innerHTML = text + this.innerHTML;
    }
};

document.getElementById("clear").onclick = function (){
    document.getElementById("outputdisplay").innerHTML="0";
    flip=true;
    total=0;
};

for (i in arr){
    arr[i].onclick= displaychange;
}

function answer(){
    x=box.value;
    x=eval(x);
    box.value=x;
}

