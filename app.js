let ipEl = document.querySelectorAll(".count-input");
let h1El = document.querySelectorAll(".msg");
let errorEl = document.querySelectorAll(".error-msg");


function showMsg() {
    let formVal = ipEl[0].value
    if (isNaN(formVal)) {
        // console.error("You must enter a number");
        errorEl[0].innerHTML = "You must enter a number"
        errorEl[0].style.borderWidth = "1px";
        // errorEl[0].style.backgroundColor="black"
    }
    else {
        // console.log(formVal);
        h1El[0].innerHTML = Number(h1El[0].innerHTML) + Number(formVal);
        errorEl[0].innerHTML = "";
        errorEl[0].style.borderWidth = "0px";



    }
}
function abc() {
    let formVal = ipEl[0].value
    if (isNaN(formVal)) {
        // console.error("You must enter a number");
        errorEl[0].innerHTML = "You must enter a number"
        errorEl[0].style.borderWidth = "1px";
    }
    else {
        // console.log(formVal);
        h1El[0].innerHTML = Number(h1El[0].innerHTML) - Number(formVal);
        errorEl[0].innerHTML = "";
        errorEl[0].style.borderWidth = "0px";
    }
}
function clr() {
    ipEl[0].value="1";
    errorEl[0].innerHTML = "";
    h1El[0].innerHTML="";
    errorEl[0].style.borderWidth = "0px";

    
}