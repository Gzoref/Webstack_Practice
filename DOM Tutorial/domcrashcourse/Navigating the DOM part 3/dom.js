
//Events==================================
//var button = document.getElementById('button').addEventListener('click', buttonClick);


// function buttonClick(e) {
//     console.log('clicked');

//    document.getElementById('header-title').textContent = 'changed';
//    document.querySelector('#main').style.backgroundColor = '#f4f4f4';
//console.log(e);
// console.log(e.target);
// console.log(e.target.id);
// console.log(e.target.className);
// console.log(e.target.classList);
// var output = document.getElementById('output');
// output.innerHTML = '<h3>'+e.target.id+'</h3>';
//console.log(e.type);
//console.log(e.clientY);
//console.log(e.offsetY);
//console.log(e.altKey);
//}

//var button = document.getElementById('button');
//var box = document.getElementById('box');

//button.addEventListener('click', runEvent);
//button.addEventListener('dblclick', runEvent);
//box.addEventListener('mouseenter', runEvent);
//box.addEventListener('mousemove', runEvent);

 var itemInput = document.querySelector('input[type="text"]');
 var select = document.querySelector('select');
 var form = document.querySelector('form');
// itemInput.addEventListener('keydown', runEvent);
// itemInput.addEventListener('keyup', runEvent);

// itemInput.addEventListener('focus', runEvent);
// itemInput.addEventListener('blur', runEvent);

// itemInput.addEventListener('cut', runEvent);
// itemInput.addEventListener('paste', runEvent);
//select.addEventListener('change', runEvent);

form.addEventListener('submit', runEvent);
function runEvent(e) {
e.preventDefault();
    console.log('EVENT TYPE:' + e.type);


    //document.body.style.display = 'none';

     console.log(e.target.value);
    //document.getElementById('output').innerHTML = '<h3>'+e.target.value+'</h3>'; */
    
//output.innHTML = '<h3>MouseX: ' + e.offsetX + '</h3><h3>MouseY: ' + e.offsetY + '<h/3>';
  
//document.body.style.backgroundColor = "rgb("+e.offsetX+","+e.offsetY+", 40)";
}