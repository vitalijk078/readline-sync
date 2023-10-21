const readlineSync = require('readline-sync');

function incomeTaxCalculator(income) {
  const taxRate = 0.15; // Ставка налога 15%
  const taxAmount = income * taxRate;
  return taxAmount;
}

const income = parseFloat(readlineSync.question('Введите сумму дохода: '));
const tax = incomeTaxCalculator(income);
console.log('Сумма налога на доходы: ' + tax);
