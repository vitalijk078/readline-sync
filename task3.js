const readlineSync = require('readline-sync');
function calculateDiscount(price, discountPercentage) {
  const discountAmount = (price * discountPercentage) / 100;
  const discountedPrice = price - discountAmount;
  return discountedPrice;
}
const inputPrice = parseFloat(readlineSync.question('Введите цену товара: '));
const inputDiscount = parseFloat(readlineSync.question('Введите процент скидки: '));
const finalPrice = calculateDiscount(inputPrice, inputDiscount);
console.log('Сумма со скидкой: ' + finalPrice);

