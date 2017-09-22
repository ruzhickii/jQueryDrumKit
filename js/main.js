// $('h2, p').css('border', '1px solid #000');   первый, второй, третий и так далее
// $('h2 > span');   							 outer и inner
// $('h2 > span');  							 parent > child
// $('h2 + p' );   								 prev + next
// $('h2 ~ p').css('border', '2px solid #000');  prev ~ next



/* Взаимодействия с элементами по атрибутам */

 // $('a[download]').css('border', '1px solid red');  Простой атрибут
 // $('a[href="http://ya.ru"]').css('border', '1px solid red');  Полное соответсвие
 // $('a[href!="http://ya.ru"]').css('border', '1px solid red');   Полное несоответствие
 // $('a[href^="http"]').css('border', '1px solid red');  Начинается с ...
 // $('a[href$=".com"]').css('border', '1px solid red');  Заканчивается на ... 
 // $('a[href*="ya"]').css('border', '1px solid red');    Содержит ... 
 // $('a[data-target|="main"]').css('border', '1px solid red');  Имеет префикс - ... 
 // $('a[href][download]').css('border', '1px solid red');  Имеет одновременно несколько атрибутов 



 /* Простые фильтры в jQuery */		

// $('p:first').css('border', '1px solid red'); Первый элемент
// $('p:last').css('border', '1px solid red');  Последний элемент
// $('a:eq(0)').css('border', '1px solid red'); Элемент под номером ... (нумерация с 0)
// $('*:not(h2, p, li, a)').css('border', '1px solid red'); Исключает из найденных элементов selector
// $('li:even').css('border', '1px solid red'); Четные найденные элементы
// $('li:odd').css('border', '1px solid red'); Нечетные найденные элементы
// $('li:gt(1)').css('border', '1px solid red'); Элементы чей порядковый номер больше n
// $('li:lt(2)').css('border', '1px solid red'); Элементы чей порядковый номер меньше n
// $('*:header').css('border', '1px solid red'); Только те элементы, которые являются заголовками
// $('li:animated').css('border', '1px solid red'); Только те элементы, которые задействованы в анимации
// $('li:hidden').css('border', '1px solid red'); Скрытые элементы
// $('li:visible').css('border', '1px solid red'); Видимые элементы
// $('li:lang(en)').css('border', '1px solid red'); Фильтрация по языку

/* Фильтры по содержимому в jQuery */		

 // $('p:contains(Lorem)').css('border', '1px solid red'); содержит текст
 // $('p:empty').text('some added text').css('border', '1px solid red'); пустой
 // $('h2:has(span)').css('border', '1px solid red'); имеет внутри селектор
 // $('span:parent').css('border', '1px solid red'); обращение к родителю



 /* Фильтры форм в jQuery */		

// $('input').css('border', '1px solid red'); Все поля input 
// $('input:button').css('border', '1px solid red'); Поле button - простая кнопка
// $('input:radio').css('display', 'block'); Радио-кнопки 
// $('input:checkbox').css('display', 'block'); Чекбоксы
// $('input:text').css('border', '1px solid red'); Текстовые поля для ввода
// $('input:password').css('border', '1px solid red'); Поле для ввода пароля
// $('input:file').css('border', '1px solid red'); Поле для загрузки файла
// $('input:submit').css('border', '1px solid red'); Кнопка "Отправить"
// $('input:reset').css('border', '1px solid red'); Кнопка "Сбросить"
// $('input:image').css('border', '1px solid red'); Кнопка-картинка 
// $('input:focus').css('display', 'block'); Выбранное поле (состояние фокус)
// $('input:chacked').css('display', 'block'); Выбранный чекбокс или радио-кнопка
// $('input:enabled').css('border', '1px solid red'); Доступное поле
// $('input:disabled').css('border', '1px solid red'); Недоступное поле



/* ====== События, связанные с мышью ===== */

 // $('button').click(function(event) {
 // 	console.log('событие click на кнопке !');
 // });  Клик мышью

 // $('button').dblclick(function (event) {
 // 		console.log('событие dbclick на кнопке !');
 // }); Двойной клик мышью

 // $('ul li').mouseenter(function(event) {
 // 	$(this).css('color', 'red');
 // }); Наведение мыши на элемент

 // $('ul li').mousedown(function(event) {
 // 	$(this).css('color', 'red');
 // }); Момент нажатия кнопки мыши

 // $('ul li').mouseup(function(event) {
 // 	$(this).css('color', 'blue');
 // }); Момент "отжатия" кнопки мыши :)

 // $('ul li').mouseover(function(event) {
 // 	$(this).css('color', 'green');
 // }); Мышь наезжает на площадь элемента

 // $('ul li').mouseout(function(event) {
 // 	$(this).css('color', 'black');
 // }); Мышь покидает площадь элемента

 // $('ul li').mousemove(function(event) {
 // 	$(this).css('color', '#ccc');
 // }); Движение мыши над элементом



/* ====== События клавиатуры ===== */

 // $('input').keydown(function(event) {
 // 	console.log($(this).val());
 // }); Клавиша в нажатом состоянии

// $('input').keyup(function(event) {
// 	$('p').text($(this).val())
// }); Клавиша больше не в нажатом состоянии

// $('input').keypress(function(eventObject) {
// 	console.log(eventObject.which);
// }); Ввод символа с клавиатуры 



/* ====== События браузера и страницы ===== */

 // $(function() {
 // 	$('p').text('Dom elements is ready !');
 // }); Готовность DOM элементов 

//  $(window).load(function() {

// }); Полная загрузка страницы

 // $(window).unload(function() {
 // 	alert('User Buy !!!');
 // }); Выход со страницы 

 // $(window).resize(function(event) {
 // 	console.log('window size is different !!!');
 // }); Изменение размера (например, окна)

 // $(window).scroll(function() {
 // 	console.log('page is scrolling !!!');
 // }); Прокрутка элемента



 /* ====== Базовые события ===== */

// $('ul li').click(function(event) {
// 	console.log('click on element !');
// 	$('ul').append('<li>Дополнительный елемент</li>')
// });  будет работать только на уже существующих li

// $('ul').on('click', 'li', function() {
// 	$('ul').append('<li>New element</li>');
// });  работает на всех елементах


/* ====== Удаление обработчика событий ===== */

// function addAndStop(e) {
// 	$('ul').append('<li>New element</li>');
// 	$('ul').off('click');
// };

// $('ul').on('click', 'li', addAndStop);



/* ====== Переменные и их свойства ===== */

//  var number = 2311;  Числа
//  var str = 'sting'; Строки
//  var bool = true; Булевые значения
//  var myVar = null; Ничего :)
//  var undefind = undefind; Значение не присвоено 

//  var object = {
//  	name: 'Artem',
//  	age: 25,
//  	message: 'Hello'
//  }; обьект

// typeof проверка на тип данных

// console.log(typeof object.age);



$('input[name="firstname"]')
$('input[name="lastname"]')
console.log($('#add'));
var man = { };




