const readlineSync = require('readline-sync');
function calculateEmployeeBonus(salary, performanceRating) {
    const bonusRate = performanceRating > 8 ? 0.2 : 0.1;
    const bonus = salary * bonusRate;
    return bonus;
  }
  const salaryInput = parseFloat(readlineSync.question('Введите зарплату сотрудника: '));
  const ratingInput = parseFloat(readlineSync.question('Введите рейтинг производительности: '));
  console.log('Бонус: ' + calculateEmployeeBonus(salaryInput, ratingInput));
  
  