// !Задача №1
for (let i = 1; i < 6; ++i) {
	console.log(i);
}

// !Задача №2
let num = 8;
while (num) {
	console.log(num);
	num--;
}
// Последний результат 0? Ошибка.
/* Логика: Сначала выводим, потом уменьшаем, а значит
			  в условие цикла 0 (false) попадет раньше,
			  чем выведется, что прервет цикл. */

// !Задача №3
let x = 0;
while (x < 3) {
	console.log(`Число: ${x++}`);
}

// !Задача №4
firstFor: for (let y = 0; y < 2; y++) {
	for (let size = 0; size < 3; size++) {
		console.log(size);
		if (size == 1) {
			break firstFor;
		}
	}
}