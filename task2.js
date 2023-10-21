const readlineSync = require('readline-sync');
function celsiusToFahrenheit(celsius) {
  const fahrenheit = (celsius * 9/5) + 32;
  return fahrenheit;
}
const temperatureCelsius = parseFloat(readlineSync.question('Введите температуру в Цельсия: '));
const temperatureFahrenheit = celsiusToFahrenheit(temperatureCelsius);
console.log('Температура в Фаренгейтах: ' + temperatureFahrenheit);
