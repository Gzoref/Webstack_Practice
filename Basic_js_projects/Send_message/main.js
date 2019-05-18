const sendBtn = document.querySelector('#sendBtn');
const messageIn = document.querySelector('#messageIn'); //input
const messageOut = document.querySelector('#messageOut');

//sendBtn.addEventListener('click', sendMsg);

/* function sendMsg() {
    let content = messageIn.value;
  
    if(content === ''){
        alert('Fill in form before clicking Send');
    }else{
    messageOut.innerHTML = content;
    messageIn.value = '';
    }
} */


let date = new Date();


sendBtn.addEventListener('click', sendMsg);

    function sendMsg(){
    let content = messageIn.value;
    messageOut.innerHTML = content;

    let list = document.querySelector('#list');
    let li = document.createElement('LI');
    li.appendChild(document.createTextNode(content));
    list.appendChild(li);
    messageIn.value = '';

    

}

