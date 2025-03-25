var inputLine = document.querySelector('#input-line');
var outputLine = document.getElementById('output-line');
var buttons = document.querySelectorAll('.button');

function calculateSin(degrees) {
    let radians = parseFloat(degrees)*(Math.PI / 180);
    return Math.sin(radians);
}
function calculateCos(degrees) {
    let radians = parseFloat(degrees) * (Math.PI / 180);
    return Math.cos(radians);
}
function calculateTan(degrees) {
    let radians = parseFloat(degrees) * (Math.PI / 180); // Convert degrees to radians
    return Math.tan(radians);
}
function calculateSquare(number) {
    return Math.pow(parseFloat(number), 2);
}
function calculateRoot(number) {
    return Math.sqrt(parseFloat(number));
}
function calculatePercentage(number) {
    return parseFloat(number) / 100;
}
function calculatePi() {
    return Math.PI;
}
function calculateFactorial(number) {
    number = parseInt(number);
    if (number < 0){return 'Error';}
    if (number === 0 || number === 1){ return 1;}

    let factorial = 1;
    for (let i = 2; i <= number; i++) {
        factorial *= i;
    }return factorial;
}
for (let item of buttons) {
    item.addEventListener('click', (e) => {
        let buttonText = e.target.innerText;

        if(buttonText === 'C'){
            inputLine.value = '';
            outputLine.value = '';
        }else if (buttonText === '=') {
            try {
                let expression = inputLine.value
                    .replace(/sin(\d+)/g, (match, number) => calculateSin(number))
                    .replace(/cos(\d+)/g, (match, number) => calculateCos(number))
                    .replace(/tan(\d+)/g, (match, number) => calculateTan(number))
                    .replace(/(\d+)²/g, (match, number) => calculateSquare(number))
                    .replace(/√(\d+)/g, (match, number) => calculateRoot(number))
                    .replace(/(\d+)%/g, (match, number) => calculatePercentage(number))
                    .replace(/π/g, () => calculatePi())
                    .replace(/(\d+)!/g, (match, number) => calculateFactorial(number))
                    .replace(/x/g, '*')
                    .replace(/÷/g, '/');

                outputLine.value = eval(expression);
            }catch (error) {
                outputLine.value = 'Error';
            }
        }else{
            if (buttonText === 'x') {
                inputLine.value += 'x';
            } else if (buttonText === '÷') {
                inputLine.value += '÷';
            } else if (buttonText === 'x²') {
                inputLine.value += '²';
            } else if (buttonText === '%') {
                inputLine.value += '%';
            } else if (buttonText === 'π') {
                inputLine.value += 'π';
            } else if (buttonText === '!') {
                inputLine.value += '!';
            } else {
                inputLine.value += buttonText;
            }
        }
    });
}