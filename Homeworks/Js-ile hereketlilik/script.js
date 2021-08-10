// function myFunction() {
//     document.getElementById("action").style.marginLeft = "10px ";
//     console.log("hi")
// }

// function myFunction2() {
//     document.getElementById("action").style.marginRight = "10px";
//     console.log("hi")
// }

// function myFunction4() {
//     document.getElementById("action").style.marginTop = "10px";
//     console.log("hi")
// }

// function myFunction3() {
//     document.getElementById("action").style.marginBottom = "50px";
//     console.log("hi")
// }
function myFunction() {
    let val = (parseInt(document.getElementById('action').style.left, 10) || 10) + 30;
    document.getElementById('action').style.left = val + 'px';
}

function myFunction2() {
    let val = (parseInt(document.getElementById('action').style.left, 10) || 10) - 30;
    document.getElementById('action').style.left = val + 'px';
}

function myFunction3() {
    let val = (parseInt(document.getElementById('action').style.top, 10) || 10) - 30;
    document.getElementById('action').style.top = val + 'px';
}

function myFunction4() {
    let val = (parseInt(document.getElementById('action').style.top, 10) || 10) + 30;
    document.getElementById('action').style.top = val + 'px';
}