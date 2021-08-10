// let deg = 6
// let arrow1 = document.querySelector('.little')
// let arrow2 = document.querySelector('.middle')
// let arrow3 = document.querySelector('.long')
// setInterval(() => {
//     let clc = new Date()
//     let secondarrow = clc.getSeconds() * deg;
//     let minutarrow = clc.getSeconds() * deg;
//     let hoursdarrow = clc.getSeconds() * 30;
//     arrow1.style.transform = `rotateZ(${(secondarrow)}deg)`
//     arrow3.style.transform = `rotateZ(${(minutarrow)}deg)`
//     arrow2.style.transform = `rotateZ(${(hoursdarrow) +(minutarrow/12)}deg)`
// }, )

let secondHand = document.querySelector(".long");
let minHand = document.querySelector(".middle")
let hourHand = document.querySelector(".little")


setInterval(clockRotating, 1000)

function clockRotating() {
    let date = new Date();
    let getSeconds = date.getSeconds() * 6;
    let getMinutes = date.getMinutes() * 6;
    let getHours = date.getHours() * 30

    secondHand.style.transform = "rotate(" + getSeconds + "deg)"
    minHand.style.transform = "rotate(" + getMinutes + "deg)"
    hourHand.style.transform = `rotate(${(getHours) + (getMinutes/12)}deg)`
    document.querySelector(".current-day").innerHTML = date.toDateString()
    document.querySelector(".current-seconds").innerHTML = date.getSeconds()

}