const readlineSync = require('readline-sync');
function calculateBalance(incomes, expenses) {
    const incomeList = incomes.split(',').map(parseFloat);
    const expenseList = expenses.split(',').map(parseFloat);
    const totalIncome = incomeList.reduce((sum, income) => sum + income, 0);
    const totalExpense = expenseList.reduce((sum, expense) => sum + expense, 0);
    return totalIncome - totalExpense;
  }
  const incomeInput = readlineSync.question('Введите перечень доходов через запятую: ');
  const expenseInput = readlineSync.question('Введите перечень расходов через запятую: ');
  console.log('Баланс: ' + calculateBalance(incomeInput, expenseInput));
  
  
  