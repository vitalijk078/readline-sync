const readlineSync = require('readline-sync');
function calculateAverageGrade(grades) {
    const gradeList = grades.split(',').map(parseFloat);
    const sum = gradeList.reduce((sum, grade) => sum + grade, 0);
    const averageGrade = sum / gradeList.length;
    return averageGrade;
  }
  const gradeInput = readlineSync.question('Введите список оценок через запятую: ');
  console.log('Средняя оценка: ' + calculateAverageGrade(gradeInput));
  
  
  