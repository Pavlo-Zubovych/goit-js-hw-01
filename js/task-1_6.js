let total = 0;
// let userInput;

while (true) {
  let userInput = prompt('Введіть число для сумування');

  if (userInput === null) {
    // console.log('Відмінено корестувачем');
    break;
  }

  userInput = Number(userInput);

  const notANumber = Number.isNaN(userInput);

  if (notANumber) {
    console.log('Було введено не число, пропускаємо цю ітерацію!');
    continue;
  }

  total += userInput;

  console.log(total);
}

alert(`Сума чисел: ${total}`);
console.log('Haloow');
