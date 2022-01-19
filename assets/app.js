let Year = +prompt ('Введите Год');

if ((Year % 400 == 0) || (Year % 4 == 0) || (Year % 100 != 0)) {console.log('Год Високосный');}
else {console.log('Год Обычный');}

console.log(`${Year} год`);




