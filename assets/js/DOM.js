'use strict';
// // 1. Прописати у html-розмітці кнопку (<button>) з будь-яким селектором (класс, id). 
// За допомогою DOM отримати посилання на цей елемент та навісити на нього обробник події кліку. 
// За кліком кнопка має викликати модальне вікно (alert) з текстом “Привіт тобі, клацальщик!”

const button = document.querySelector('.greedingBtn')
button.addEventListener('click', e=> alert('Привіт тобі, клацальщик!'))


// 2. Створити посилання з текстом “клікни, аби з’явилась кнопка”. За натиснення на посилання 
// поряд з ним має з’явитись новий елемент - кнопка.

const addBtnLinkEl = document.querySelector('.addBtnLink')
function addBtn(){
    const newBtn = document.createElement('button')
    newBtn.textContent = 'Нова кнопка'
    document.body.append(newBtn)
}
addBtnLinkEl.addEventListener('click', addBtn)

// 3. “Лампочка”. У розмітці прописати елемент (article або div), з початковими стилями, які 
// роблять елемент круглим, сірого кольору тла, з темно-сірою рамкою. Також прописати в розмітці 
// кнопку, за натиснення на яку у елемента-лампочки мають змінитись стилі - тло має стати жовтим, рамка - білою.

const turnLampBtn = document.querySelector(".turnLamp")
const lampEl = document.querySelector('article.lamp')
function turnLamp(){
    lampEl.classList.toggle('lampOn') 
}  
turnLampBtn.addEventListener('click', turnLamp)