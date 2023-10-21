const readlineSync = require('readline-sync');
function countWords(sentence) {
  const words = sentence.trim().split(' ');
  return words.length;
}
const sentence = readlineSync.question('Введите предложение: ');
console.log('Количество слов в предложении: ' + countWords(sentence));

