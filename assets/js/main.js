"use strict"
// Задание 1
let price = +prompt("Введите стоимость товара", 300);
let money = +prompt('Введите количество денег', 500);

if (price > 0 && money > 0 && Number(price) && Number(money) ) {
    if (price == money) {
        alert('Покупка совершена');
    } else if (price > money) {
        alert(`Для покупки не хватает ${price-money} р`);
    } else if (money > price) {
        alert(`Покупка совершена! Сдача ${money-price}`);
    }
} else {
    alert ('Введите корректные значения');
}

//Задание 2
let c = +prompt('Введите число');

if(Number(c) || a == 0){
    if(c > 0) {
        alert(1);
    } else if (c<0) {
        alert(-1);
    } else if (c == 0){
        alert(0);
    }
} else {
    alert('Введите корректное число');
}

//Задание 3
let a = 1;
let b = 2;
let result = (a + b < 4) ? 'Мало' : 'Много';
alert(result);

//Задание 4
let login = prompt('Введите вашу должность', 'Директор');
let message = (login == 'Сотрудник') ? 'Привет' : (login == 'Директор') ? 'Здравствуйте' : (login == '') ? 'Нет логина' : '';
alert(message);

//Задание 5 
let log = prompt('Введите логин', 'Админ');

if(log == 'Админ') {
    let pass = prompt('Введите пароль');
    if(pass == '') {
        alert('Отменено')
    } else {
        if(pass == 'Я главный') {
            alert('Здравствуйте');
        } else if (pass != 'Я главный') {
            alert('Неверный пароль!')
        }
    }
} else if (log == '') {
    alert('Отменено');
} else {
    alert ('Я вас не знаю');
}







