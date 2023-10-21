const readlineSync = require('readline-sync');
function generateRandomEquation() {
    const a = Math.floor(Math.random() * 10) + 1;
    const b = Math.floor(Math.random() * 10) + 1;
    const c = Math.floor(Math.random() * 10) + 1;
    return `${a}x + ${b} = ${c}`;
  }
  console.log('Случайное уравнение: ' + generateRandomEquation());
  