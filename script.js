const userInput = document.getElementById('number');
const convertBtn = document.getElementById('convert-btn');
const numeralOutput = document.getElementById('output');
const inputBox = document.getElementById('number');

convertBtn.addEventListener('click', () => {
    numeralConverter(inputBox.value);
    inputBox.blur();
    inputBox.value = '';
})

inputBox.addEventListener("keydown", e => {
    if (e.key === "Enter" || e.key === 13) {
        numeralConverter(inputBox.value);
        inputBox.blur();
        inputBox.value = '';
    }
})

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

function numeralConverter(userInput) {
    let convertedString = '';
    for (let i=0; i < 13; i++) {  
            while (userInput - Object.values(romanNumerals)[i] >= 0) {
                userInput -= Object.values(romanNumerals)[i];
                convertedString += Object.keys(romanNumerals)[i];          
            }
        }
    numeralOutput.innerText = convertedString;
}

function checkValid() {
    if (inputBox.value < 0) {
        numeralOutput.innerText = "Please enter a number greater than or equal to 1";
    } else if (inputBox.value > 3999) {
        numeralOutput.innerText = "Please enter a number less than or equal to 3999";
    }
}