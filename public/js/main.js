
let symbolOrNot = document.getElementById('symbolOrNot');
let numbersOrNot = document.getElementById('numbersOrNot');
let lowerCaseOrNot = document.getElementById('lowerCaseOrNot');
let upperCaseOrNot = document.getElementById('upperCaseOrNot');
let similarCharactersOrNot = document.getElementById('similarCharactersOrNot');
let ambigiousCharactersOrNot = document.getElementById('ambigiousCharactersOrNot');
let passLength = document.getElementById('passLength');
let generatePassword = document.getElementById('generatePassword');
let passLenghtValue = 15;


const passwordStrings = {
    1:'1234567890',
    2:'ABCDEFGHJKLMNPQRSTUVWXYZ',
    3:'abcdefghjkmnpqrstuvwxyz',
    4:'{}[]()\/"`~,;:.<>\\',
    5: '!@#$%^&*\+'
};

let flags = {
    symbol: 0,
    number: 0,
    lowerCaseOrNot: 0,
    upperCaseOrNot:0,
    similarCharactersOrNot: 0,
    ambigiousCharactersOrNot: 0
};

symbolOrNot.addEventListener('change', () => {
    if(symbolOrNot.checked) flags.symbol = 1;
    else flags.symbol = 0;
});

numbersOrNot.addEventListener('change', () => {
    if(numbersOrNot.checked) flags.number = 1;
    else flags.number = 0;
});

lowerCaseOrNot.addEventListener('change', () => {
    if(lowerCaseOrNot.checked) flags.lowerCaseOrNot = 1;
    else flags.lowerCaseOrNot = 0;
});

upperCaseOrNot.addEventListener('change', () => {
    if(upperCaseOrNot.checked) flags.upperCaseOrNot = 1;
    else flags.upperCaseOrNot = 0;
});

similarCharactersOrNot.addEventListener('change', () => {
    if(similarCharactersOrNot.checked) flags.similarCharactersOrNot = 1;
    else flags.similarCharactersOrNot = 0;
});

ambigiousCharactersOrNot.addEventListener('change', () => {
    if(ambigiousCharactersOrNot.checked) flags.ambigiousCharactersOrNot = 1;
    else flags.ambigiousCharactersOrNot = 0;
});

passLength.addEventListener('change', () => {
    passLenghtValue = passLength.value;
});

window.onload = function() {
    // Code here
}

generatePassword.addEventListener('click', () => {
    let selectedOptionStr = '';
    let passStr = '';
    if(flags.number === 1) {
        selectedOptionStr = selectedOptionStr.concat(passwordStrings[1]);
    }
    if(flags.symbol === 1) {
        selectedOptionStr = selectedOptionStr.concat(passwordStrings[5]);
    }
    if(flags.lowerCaseOrNot === 1) {
         selectedOptionStr = selectedOptionStr.concat(passwordStrings[3]);
    }
    if(flags.upperCaseOrNot === 1) {
        selectedOptionStr = selectedOptionStr.concat(passwordStrings[2]);
    }
    if(flags.ambigiousCharactersOrNot === 1) {
         selectedOptionStr = selectedOptionStr.concat(passwordStrings[4]);
    }
    for(let i=0; i<=passLenghtValue; i++) {
        passStr = passStr.concat(selectedOptionStr.charAt(Math.floor(Math.random() * (selectedOptionStr.length - 1) + 1)));
    }
    document.getElementById('securePassword').value = passStr;
});