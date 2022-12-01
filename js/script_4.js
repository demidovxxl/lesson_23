// !Задача №1
let numOne = Math.ceil(1.005 * 100) / 100;
console.log(numOne);
// Ответ: 1.01
// Меняем round на ceil

// !Задача №2
let value = "135.52px";
let valueNum = parseFloat(value);
console.log(valueNum);
// Ответ: 135.52

// !Задача №3
let value2 = 58 + "Фрилансер";
if (isNaN(value2)) {
	console.log('Результат выражения NaN');
}
// Ответ: Результат выражения NaN

// !Задача №4
console.log(Math.max(10, 58, 39, -150, 0));
// Ответ: 58

// !Задача №5
console.log(parseInt(58.858));
// Ответ: 58