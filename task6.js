const readlineSync = require('readline-sync');
function calculateTime(distance, speed) {
    const timeInHours = distance / speed;
    const hours = Math.floor(timeInHours);
    const minutes = Math.round((timeInHours - hours) * 60);
    return `${hours}ч ${minutes}м`;
  }
  const inputDistance = parseFloat(readlineSync.question('Введите расстояние: '));
  const inputSpeed = parseFloat(readlineSync.question('Введите скорость: '));
  const time = calculateTime(inputDistance, inputSpeed);
  console.log('Время в пути: ' + time);
  