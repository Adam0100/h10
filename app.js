/* ответы Домашнего задания */
// HW: 2
/* 11 Задач */
/* Задание найти среднее из двух чисел average
ВВОД: 5 9 ВЫВОД: 7
ВВОД: 3 4 ВЫВОД: 3.5
*/


let inputEl1_1 = document.getElementById("input1-1");
let inputEl1_2 = document.getElementById("input1-2");

let submitEl1 = document.getElementById("avg");
let resultEl1 = document.getElementById("result1");

submitEl1.onclick = function () {
    let x = Number(inputEl1_1.value);
    let y = Number(inputEl1_2.value);
    let result = 0;

    result = (x + y) / 2;

    resultEl1.textContent = result;
};

/*  Задание посчитать остаток при делении 
    и вытащить сколько нужно добавить к первому числу(если надо) чтобы делилось без остатка
    
ВВОД: 10 7 ВЫВОД: 3
ВВОД: 10 10 ВЫВОД: OK
ВВОД: 7 10 ВЫВОД: 7 3

Подсказка: если первое число больше то не надо прибавлять
*/

let inputEl2_1 = document.getElementById("input2-1");
let inputEl2_2 = document.getElementById("input2-2");

let numberCheckBTN = document.getElementById("numberCheck");
let resultEl2 = document.getElementById("result2");

numberCheckBTN.onclick = function () {
    let x = Number(inputEl2_1.value);
    let y = Number(inputEl2_2.value);
    let result;

    if (x < y) {
        result = x + ' ' + (y - x);
    } else if (x > y) {
        result = x % y;
    } else {
        result = 'ok';
    }

    resultEl2.textContent = result;
};

/* ax + b = 0 вводятся a и b найти х, если х между 0-1 то вывезти -1
если х больше 1 то вывезти 1 
ВВОД: 6 -2 ВЫВОД: -1 (x=1/3)
ВВОД: 1 -1 ВЫВОД: 1 (x=1)
5x+4=0
5x=-4
x=-4\5
*/

let inputEl3_1 = document.getElementById("input3-1");
let inputEl3_2 = document.getElementById("input3-2");

let evenCheckBtn = document.getElementById("evenCheck");
let resultEl3 = document.getElementById("result3");

evenCheckBtn.onclick = function () {
    let a = Number(inputEl3_1.value);
    let b = Number(inputEl3_2.value);
    let result;

    x = -(b / a);
    if (x > 0 & 1 > x) {
        result = " -1" + '(' + x + ')';
    } else if (x >= 1) {
        result = " 1 " + '(' + x + ')';
    }
    else { result = x; }

    resultEl3.textContent = result;
};

/* Максимум из двух чисел 1 2 - 2 */
// Максимум из трех 13 15 9 - 15
// Минимум из трех 13 15 9 - 9
let inputEl4_1 = document.getElementById("input4-1");
let inputEl4_2 = document.getElementById("input4-2");
let inputEl4_3 = document.getElementById("input4-3");
let calculateBtn = document.getElementById("calculate");
let resultEl4_1 = document.getElementById("result4-1");
let resultEl4_2 = document.getElementById("result4-2");

calculateBtn.onclick = function () {
    let x = Number(inputEl4_1.value);
    let y = Number(inputEl4_2.value);
    let z = Number(inputEl4_3.value);

    resultEl4_1.textContent = Math.max(x, y, z);


};
min_btn.onclick = function () {
    let x = Number(inputEl4_1.value);
    let y = Number(inputEl4_2.value);
    let z = Number(inputEl4_3.value);
    resultEl4_2.textContent = Math.min(x, y, z);
}
// Високосный год - 2007 NO, 2000 - YES

let inputEl5_1 = document.getElementById("input5-1");


let checkYear = document.getElementById("year");
let resultEl5 = document.getElementById("result5");

checkYear.onclick = function () {
    let x = Number(inputEl5_1.value);

    let result;

    if (x % 4) {
        result = 'високосный год';
    } else result = 'не високосный '

    resultEl5.textContent = result;
};

/* Задание вывести правильное время
Ввод: 7:45 pm Вывод 19:45
Ввод: 7:45 am Вывод 07:45 */
let timeBtn = document.getElementById("time")
let result6 = document.getElementById("result6")

timeBtn.onclick = function () {

    var inputTime = document.getElementById("input6-1").value;
    var newInputTime = inputTime.replace(/ /g, '')
    console.log(newInputTime)
    var timeArray = inputTime.split(/[:\s]/);
    var hours = parseInt(timeArray[0], 10);
    var minutes = parseInt(timeArray[1], 10);
    var period = timeArray[2].toLowerCase();
    console.log(period)


    if (period === "pm" && hours < 12) {
        hours += 12;
    } else if (period === "am" && hours === 12) {
        hours = 0;
    }
    var result = hours + ":" + minutes;
    result6.textContent = result;
}


/* Товар стоит a руб. b коп. За него заплатили c руб. d коп. Сколько сдачи требуется получить?
ВВОД: 5 5 6 5 ВЫВОД 1 0
ВВОД: 2 17 2 18 ВЫВОД 0 1
*/
let calculateStore = document.getElementById('money')
let result7 = document.getElementById('result7')

calculateStore.onclick = function () {
    let storeChange = document.getElementById('input7-1').value;
    let changeStore = storeChange.split(' ');

    let resultR = changeStore[2] - changeStore[0]
    let resultK = changeStore[3] - changeStore[1]
    result7.textContent = resultR + " " + resultK
}
/* В кафе мороженое продают по три шарика и по пять шариков. Можно ли купить ровно k шариков мороженого? 
ВВОД: 3 ВЫВОД: YES
ВВОД: 1 ВЫВОД: NO
*/
let iceCream = document.getElementById('iceCream')
let result8 = document.getElementById('result8')

iceCream.onclick = function () {
    let ice = document.getElementById('input8-1').value
    let result
    if (ice % 3 == 0 || ice % 5 == 0) {

        result = 'Yes'

    }
    else (result = 'No')

    result8.textContent = result
}


/* На сковородку одновременно можно положить k котлет. 
Каждую котлету нужно с каждой стороны обжаривать m минут непрерывно. 
За какое наименьшее время удастся поджарить с обеих сторон n котлет? 
Вводятся 3 числа: k, m и n. Все числа не превосходят 32000.

ВВОД: 1 5 1  ВЫВОД 10
*/
let cutlet = document.getElementById('cutlet')
let result9 = document.getElementById('result9')

cutlet.onclick = function () {
    let calculateCutlet = document.getElementById('input9-1').value
    calculateCutlet = calculateCutlet.split(' ');
    let k = calculateCutlet[0]
    let m = calculateCutlet[1]
    let n = calculateCutlet[2]
    let result = ((n / k) + (n % k)) * (m * 2)
    result9.textContent = result
}


