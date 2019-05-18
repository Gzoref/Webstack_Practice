let val1 = parseInt(document.querySelector('#value1').value, 10);
let val2 = parseInt(document.querySelector('#value2').value, 10);
let operator = document.querySelector('#operator').value;

const calcBtn = document.querySelector('button');
calcBtn.addEventListener('click', calcAnwser);

function calcAnwser() {
  let result;
  if (operator == 'add') {
    result = val1 + val2;
  }
  if (operator == 'min') {
    result = val1 - val2;
  }
  if (operator == 'div') {
    result = val1 / val2;
  }
  if (operator == 'mul') {
    result = val1 * val2;
  }

  document.querySelector('#result').innerHTML = result;


}
