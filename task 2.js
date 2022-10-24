/*Написать функцию, которая принимает в качестве аргументов строку и объект, а затем проверяет 
есть ли у переданного объекта свойство с данным именем. Функция должна возвращать true или false.*/

const names = {
    1: 'Andrei',
    2: 'Alena',
  }
  const str = 'Andrei and Alena';
  
  function func(str, names) {
     for (let key in names) {
          console.log( '1' in names); 
          console.log( '2' in names); 
          console.log( '3' in names); 
       return func()
      };
  }
  console.log(func(str, names))