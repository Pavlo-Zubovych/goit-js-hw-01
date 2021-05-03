const credits = 23580;
const pricePerDroid = 300;

const pieceOfDroid = prompt('Скільки дроїдів бажаєш купити?')

if (pieceOfDroid === null) {
    alert('Скасовано користувачем!');
}
else if (pieceOfDroid === ""){
    alert('Введіть кількість дронів')
} else {
    const totalPrice = pricePerDroid * Number(pieceOfDroid)

    if (credits < totalPrice) {
        console.log('Недостатньо коштів на рахунку!')
    } else {
        const creditsAfter = credits -  totalPrice
        console.log(`Ви купили ${pieceOfDroid} дроїдів, до сплати ${totalPrice}, на рахунку залишилося ${creditsAfter} кредитів.`)

    }
}
