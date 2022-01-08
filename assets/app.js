let Year = +prompt ('Введите Год');

if (Year % 400 == 0 && Year % 4 == 0) {alert('Leap year')}
else if (Year % 100 == 0) {alert('Common year')}

console.log(`${Year} год`);




