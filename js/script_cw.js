"use strict"


// Основной метод строк
// Длинна строки - length
/*
let someString = `Привет, кабан!`;
console.log(someString.length);
*/

// Строка - это массив
/*
let someString = `Привет, кабан, я тут!`;
console.log(someString[15]);
*/

// Регистр toUppercase(), toLowerCase()
/*
let someString = `Привет, кабан, я тут!`;
console.log(someString.toUpperCase());
console.log(someString.toLowerCase());
console.log(someString[0].toUpperCase());
*/

// Поиск в строке. метод Includes, startsWith, endsWith
/*
let someString = `Привет, кабан, я тут!`;
let someStringLower = someString.toLowerCase();
console.log(someStringLower.includes('к'));
*/

// Получение части строки, метод slice(start, end)
/*
let someString = `Привет, кабан, я тут!`;
let someNewString = someString.slice(0, 5);
console.log(someNewString);
*/

// Поиск и замена - replace
/*
let someString = `Привет, кабан, я тут!`;
someString = someString.replace('я тут!', 'ты тут?');
someString = someString.replace('#', '');
console.log(someString);
*/

// Поиск и замена - replace
/*
let someString = `Привет, кабан, я тут!`;
someString = someString.replace('я тут!', 'ты тут?');
someString = someString.replace('#', '');
console.log(someString);
*/



// ------------------- Методы чисел -------------

// Основные методы чисел

// Math.floor - округление в меньшую сторону
/*
let someNum = 20;
let someNotRoundNum = 25.8;
console.log(Math.floor(someNotRoundNum));
*/

// Math.ceil - округление в большую сторону
/*
let someNum = 20;
let someNotRoundNum = 25.3;
console.log(Math.ceil(someNotRoundNum));
*/

// Math.rouns - обычное округление
/*
let someNotRoundNum = 25.7;
console.log(Math.round(someNotRoundNum));
*/

// Math.abs - Модуль числа
/*
let someNotRoundNum = -25.7;
console.log(Math.abs(someNotRoundNum));
*/

// Math.random - Модуль числа
/*
console.log(Math.random());
*/

// Math.max(a, b, c...) / Math.min(a, b, c...)
/*
console.log(Math.min(-5, 2, 5, -3));
*/

// parseInt и parseFloat
// Плохо парсит, когда встречает символы, отличные от цифр
/*
let someVar = `123.9`;
console.log(typeof someVar);
let someNum = parseFloat(someVar);
console.log(someNum);
*/

// -------------------------------- Основные операторы ---------------

/*
let varOne = "10";
let varTwo = 3;
*/

// Минус
// Строка 10 - число 5 = число 5
// Типа данных number - почти все операторы автоматически меняют тип данных на number
/*
let varSumm = varOne - varTwo;
console.log(typeof varSumm);
console.log(varSumm);
*/

// Деление
/*
let varSumm = varOne / varTwo;
console.log(typeof varSumm);
console.log(varSumm);
*/

// Умножение
/*
let varSumm = varOne * varTwo;
console.log(typeof varSumm);
console.log(varSumm);
*/

// Взять отстаток от деления
/*
let varSumm = varOne % varTwo;
console.log(typeof varSumm);
console.log(varSumm);
*/

// Сложение - Складывает, как есть. Строки с числами - все в кучу

/*
let varOne = "10";
let varTwo = "3";
let varSumm = varOne + varTwo;
console.log(typeof varSumm);
console.log(varSumm);
*/


// Унарный оператор сложения
// используется только с одним участником операции
/*
let someNum = "5";
let result = +someNum;
console.log(typeof result);
console.log(result);
*/

/*
let varOne = "10";
let varTwo = "3";
let varSumm = +varOne + +varTwo;
console.log(varSumm);
*/

// Инкремент / декремент (++ , --)
/*
let someNum = 5;
console.log(++someNum);
console.log(--someNum);
*/

// -------------------------------- Приоритетность операторов -------------
// Приритетность "Как в школе"
/*
let results = 2 + 3 * 10 / 5;
console.log(results);
*/

// -------------------------------- Операторы сравнения ---------------
// < > = == === != !==
// === !== - "жесткие" сравнения, без изменения типа данных

/*
let result = "5" == 5;
console.log(typeof result);
console.log(result);
*/

// -------------------------------- Операторы логики ---------------
// || && !

// Оператор "не" !
/*
let result = !0;
console.log(Boolean(result));
*/

// Оператор "или" ||
/*
let result = 0 || 6;
console.log(result);
*/

// Оператор "и" &&
/*
let result = 1 && 3;
console.log(Boolean(result));
console.log(result);
*/

// ========================================= If
// Условные ветвления
/*
let varOne = 5;
let varTwo = 10;
*/

/* Синтаксис
if( условие ){
	код исполнения
	если условие true
} else if (новое условие) {
	
} else {

}
*/

/*
if (varOne > varTwo) {
	let result = varOne + varTwo;
	console.log(result);
} else if (varOne === 10) {
	console.log('varOne = 10');
} else {
	console.log('Условие не выполнено');
}
*/

/*
let varOne = 10;
let varTwo = 10;
if (varOne) {  //varOne - это true? Проверка
	console.log('varOne is true');
}
*/

/* 
let varOne = 1;
let varTwo = 2;
let varThree = 3;
let varFour = 4;

if (varOne > 3 || varTwo === 2 && varThree < 4 || varFour > 6) {  //varOne - это true? Проверка
	console.log('Условие is true');
}
*/


// ====================================== For
let someString = "Привет, кабан!";

// Синтаксис

/*
for (начало; условие окончания; шаг) {
	код выполняется на кожном цикле
}
*/
console.log(`Кол-во символов: ${someString.length}`);

for (let i = 0; i < someString.length; ++i) {
	console.log(someString[i]);
}
/*
console.log(someString[0]);
console.log(someString[1]);
console.log(someString[2]);
console.log(someString[3]);
console.log(someString[4]);
console.log(someString[5]);
console.log(someString[6]);
*/


// Синтаксис
// Условие ? код, если true : код, если false
let someVar = 10 > 5 ? "10 больше 5" : "10 меньше 5"; // иначе можно заменить на null
console.log(someVar);

// аналог
if (10 > 5) {
	let someVar = "10 больше 5";
} else {
	let someVar = "10 меньше 5";
}