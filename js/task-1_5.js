let countryDelivery = prompt('В яку країну доставить товар?');
let price
 
if (countryDelivery === null) {
    alert('Скасовано користувачем!');
}
countryDelivery = countryDelivery.toLowerCase();
console.log(countryDelivery);

switch (countryDelivery) {
    case 'китай':
        price = 100;
        break;

    case 'чилі':
        price = 250;
        break;

    case 'австралія':
        price = 170;
        break;

    case 'індія':
        price = 80;
        break;

    case 'ямайка':
        price = 120;
        break;
    
    default:
        alert('У вашій країні доставка не доступна.');
}

console.log(`Доставка в ${countryDelivery} буде коштувати ${price} кредитів`)
