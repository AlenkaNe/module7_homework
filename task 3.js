/*Написать функцию, которая создает пустой объект, но без прототипа.*/

function func(obj) {
    return Object.create(null);
 }
 console.log(func());
 