
//Generate random color function
const randomColur = function () {
    const hexCode = '0123456789ABCDEF'
    let color = '#';

    for (let i = 0; i < 6; i++) {
        color += hexCode[Math.floor(Math.random() * 16)];
    }
    return color;
}

//Here we drclear **intervalID - to access it globally
let intervalID;

//Change random color function in every second
const startChangingColor = function () {
    if (!intervalID) {
        intervalID = setInterval(changeBgColor, 1000)
    }
    function changeBgColor() {
        document.body.style.backgroundColor = randomColur();
    }
}
//Add event on start button
document.querySelector('#start').addEventListener('click', startChangingColor)


//Stop random color function
const stopChangingColor = function () {
    clearInterval(intervalID);
    intervalID = null;
}
//Add event on stop button
document.querySelector('#stop').addEventListener('click', stopChangingColor)

