const readlineSync = require('readline-sync');
function calculateDistance(x1, y1, x2, y2) {
  const distance = Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2));
  return distance;
}
const x1 = parseFloat(readlineSync.question('Введите координату x1: '));
const y1 = parseFloat(readlineSync.question('Введите координату y1: '));
const x2 = parseFloat(readlineSync.question('Введите координату x2: '));
const y2 = parseFloat(readlineSync.question('Введите координату y2: '));
const distance = calculateDistance(x1, y1, x2, y2);
console.log('Расстояние между двумя точками: ' + distance);
