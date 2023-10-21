const readlineSync = require('readline-sync');
function reverseStringWithException(str, exception) {
    const words = str.split(' ');
    const reversedWords = words.map(function(word) {
      if (word !== exception) {
        return word.split('').reverse().join('');
      } else {
        return word;
      }
    });
    return reversedWords.join(' ');
  }
  const strInput = readlineSync.question('Введите строку: ');
  const exceptionInput = readlineSync.question('Введите слово-исключение: ');
  console.log('Результат: ' + reverseStringWithException(strInput, exceptionInput));
  
  
  