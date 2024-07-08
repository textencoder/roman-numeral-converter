const userInput = document.getElementById('number');
const convertBtn = document.getElementById('convert-btn');
const numeralOutput = document.getElementById('output');


const romanNumerals = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
}

function convertFunction(input) {
    outputStr = '';
    for (const key in romanNumerals) {
        console.log(input - romanNumerals[key]);
        break;
              
    }
}
