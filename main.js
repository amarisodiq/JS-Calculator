
document.addEventListener('DOMContentLoaded', function () {
    const display = document.querySelector('.calculate-display');
    const keys = document.querySelector('.calculate-keys');
    let currentInput = '';
    let previousInput = '';
    let operator = null;

    keys.addEventListener('click', function (e) {
        const target = e;
        const textContent = target;
        // console.log(target);

        // if (target.matches('botton')) {
        //     if (target.classlist.contains('operator'))
        // }
    })   
})



















// document.addEventListener('DOMContentLoaded', function() {
//     const display = document.querySelector('.calculator-display');
//     const keys = document.querySelector('.calculator-keys');
//     let currentInput = '';
//     let previousInput = '';
//     let operator = null;

//     keys.addEventListener('click', function(event) {
//         const { target } = event;
//         const { textContent } = target;

//         if (target.matches('button')) {
//             if (target.classList.contains('operator')) {
//                 handleOperator(textContent);
//             } else if (target.id === 'clear') {
//                 clearDisplay();
//             } else if (target.id === 'equals') {
//                 calculate();
//             } else {
//                 inputDigit(textContent);
//             }
//         }
//     });

//     function inputDigit(digit) {
//         if (currentInput.includes('.') && digit === '.') return;
//         currentInput = currentInput === '0' ? digit : currentInput + digit;
//         updateDisplay();
//     }

//     function handleOperator(nextOperator) {
//         if (operator && currentInput === '') {
//             operator = nextOperator;
//             return;
//         }
//         if (previousInput === '') {
//             previousInput = currentInput;
//         } else if (operator) {
//             const result = performCalculation();
//             currentInput = String(result);
//             previousInput = result;
//         }
//         operator = nextOperator;
//         currentInput = '';
//         updateDisplay();
//     }

//     function performCalculation() {
//         const prev = parseFloat(previousInput);
//         const current = parseFloat(currentInput);
//         if (isNaN(prev) || isNaN(current)) return;
//         switch (operator) {
//             case '+':
//                 return prev + current;
//             case '-':
//                 return prev - current;
//             case '×':
//                 return prev * current;
//             case '÷':
//                 return prev / current;
//             default:
//                 return current;
//         }
//     }

//     function calculate() {
//         if (operator && currentInput) {
//             const result = performCalculation();
//             currentInput = String(result);
//             operator = null;
//             previousInput = '';
//             updateDisplay();
//         }
//     }

//     function clearDisplay() {
//         currentInput = '';
//         previousInput = '';
//         operator = null;
//         updateDisplay();
//     }

//     function updateDisplay() {
//         display.value = currentInput || previousInput || '0';
//     }
// });