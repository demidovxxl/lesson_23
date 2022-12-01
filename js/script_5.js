// !Задача №1
let fls = "фрилансер";
let text = `Привет! Я ${fls}`;
console.log(text);
// Ошибка. Надо поменять кавычки '' на обратные ``

// !Задача №2
let text2 = 'фрилансер';
for (let i = 0; i < text2.length; i++) {
	simbol = (text2[i]);
	if (simbol === 'н') {
		console.log(simbol);
	}
}

// !Задача №3
let text3 = 123 + "456"
console.log(text3);
// Ответ: 123456
// Ошибка. Оператор "+" складывает, не меняя тип данных: number + string

// !Задача №4
let text4 = 'фрилансер';
console.log(text4.toUpperCase());

// !Задача №5
let text5 = 'фрилансеридзе';
let lit = 'ерид';
for (let i = 1; i < text5.length; i++) {
	let k = "";
	for (let j = i; j < lit.length + i; j++) {
		k = k + (text5[j]);
	}
	if (k === lit) {
		console.log(k);
	}
}
// Код найдет любую последовательность букв, 
// если она есть в заданном тексте.

// !Задача №6
let text6 = 'фрилансер';
console.log(text6.includes('лан', 4));
// Вернет false, т.к. с 4-й буквы нет части 'лан';