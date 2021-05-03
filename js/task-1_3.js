const ADMIN_PASSWORD = 'jqueryismyjam';
let message;
// let userPassword;

const userPassword = prompt('Введіть будь ласка пароль:');

if (userPassword === null) {
    message ='Скасовано користувачем!';
}
else if (userPassword === ADMIN_PASSWORD) {
    message ='Ласкаво просимо!';
} else {
    message ='Невірний пароль!';
}

alert(message);