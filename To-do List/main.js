const enterBtn = document.getElementById("enter");
const input = document.getElementById("userInput");
const ul = document.querySelector("ul");
const item = document.getElementsByTagName("li");

function inputLength() {
  return input.value.length;
}

function listLength() {
  return item.length;
}

function createListElement() {
  const li = document.createElement("li");
  li.appendChild(document.createTextNode(input.value)); //makes text from input field the li text
  ul.appendChild(li); //adds li to ul
  input.value = ""; //Reset text input field

  //START STRIKETHROUGH
  // because it's in the function, it only adds it for new items

  function crossOut() {
    li.classList.toggle('done');
  }

  li.addEventListener('click', crossOut);

  // START ADD DELETE BUTTON
  const deleteBtn = document.createElement("button");
  deleteBtn.appendChild(document.createTextNode("X"));
  li.appendChild(deleteBtn);
  deleteBtn.addEventListener("click", deleteListItem);

  //ADD CLASS DELETE (DISPLAY: NONE)
  function deleteListItem() {
    li.classList.add("delete");
  }
}

function addListAfterClick() {
  //makes sure that an empty input field doesn't create a li
  if (inputLength() > 0) {
    createListElement();
  }
}

function addListAfterKeyPress(event) {
  //this now looks to see if you hit "Enter"/"Return"
  //the 13 is the enter key's keycode, this could also be display by event.keyCode === 13
  if (inputLength() > 0 && event.which === 13) {
    createListElement();
  }
}

enterBtn.addEventListener('click', addListAfterClick);
input.addEventListener('keypress', addListAfterKeyPress);
