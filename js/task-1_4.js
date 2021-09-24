const credits = 23580;
const pricePerDroid = 300;

const pieceOfDroid = prompt('Сколько Дроидов купить?');

if (pieceOfDroid === null) {
  alert('Отменено пользователем!');
} else {
  const totalPrice = pieceOfDroid * Number(pricePerDroid);

  if (totalPrice > credits) {
    console.log('Недостаточно средств на счету!');
  } else {
    const creditsAfter = credits - totalPrice;
    console.log(
      `Вы купили ${pieceOfDroid} дроидов, на счету осталось ${creditsAfter} кредитов.`
    );
  }
}
