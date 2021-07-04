"use strict";
const display = document.querySelector('.display__main--content');
const button = document.querySelectorAll('#button');
const btnClear = document.querySelector('#clear');
const btnEqual = document.querySelector('#equal');
const btnDel = document.querySelector('#del');

button.forEach(x => x.addEventListener('click', inputCharacter));

btnClear.addEventListener('click', () => display.textContent = '0');
btnEqual.addEventListener('click', function() {
   try {
      display.textContent = eval(display.textContent);
   } catch (error) {
      display.textContent = 'Error';
      setTimeout(() => display.textContent = '0',1000)
   }
});

btnDel.addEventListener('click', function() {
   if (display.textContent.length == 1 ) {
      display.textContent = 0;
   } else {
      display.textContent = display.textContent.slice(0, -1)
   }
});

function inputCharacter(event) {
   const character = event.target.value;
   if (display.textContent == '0' && character == '0') {
      return;
   } else {
      if (display.textContent == '0') {
         display.textContent = '';
         display.textContent += character;
      } else {
         display.textContent += character;
      }
   }
}
