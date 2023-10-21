const readlineSync = require('readline-sync');
function calculateRectangleProperties(width, height) {
  const perimeter = 2 * (width + height);
  const area = width * height;
  return {
    perimeter: perimeter,
    area: area
  };
}
const inputWidth = parseFloat(readlineSync.question('Введите ширину прямоугольника: '));
const inputHeight = parseFloat(readlineSync.question('Введите высоту прямоугольника: '));
const rectangleProperties = calculateRectangleProperties(inputWidth, inputHeight);
console.log(`Периметр прямоугольника: ${rectangleProperties.perimeter}`);
console.log(`Площадь прямоугольника: ${rectangleProperties.area}`);
