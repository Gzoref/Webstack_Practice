console.clear();

const texts = ['Website Design', 'Applications', 'Web Stack', 'Client-side scripting', 'Server side scripting'];
let index = 0;
let count = 0;
let currentText = '';
let letter = '';

(function type(){
  if(count === texts.length){
    count = 0;
  }
  currentText = texts[count];
  letter = currentText.slice(0,++index);
  
  document.querySelector('.typing').textContent = letter;
  if(letter.length === currentText.length){
    count++;
    index = 0;
  }
  setTimeout(type, 300);
}());

