var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

//form submit event========================================

form.addEventListener('submit', addItem);

//Delate event
itemList.addEventListener('click', removeItem);

//filter event
filter.addEventListener('keyup',filterItems);

function addItem(e) {
    e.preventDefault();
    
    //Get input value
    var newItem = document.getElementById('item').value;

    //create new <li>
    var li = document.createElement('li');
    
    //add class
    li.className = 'list-group-item';

    //add text node with input value
    li.appendChild(document.createTextNode(newItem));

//create delet button element

var deletBtn = document.createElement('delete');

//add classes to del button

deletBtn.className = 'btn btn-danger btn-sm float-right delete';

deletBtn.appendChild(document.createTextNode('X'));


//apend button to li
li.appendChild(deletBtn);


//li to list
itemList.appendChild(li);
}

function removeItem(e) {
    if(e.target.classList.contains('delete')){
        if(confirm('Are you sure?')){
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }
        
    }
}

//finds matches in itemlist=====================================
function filterItems(e) {
    //convert text to lowercase
    var text = e.target.value.toLowerCase();
    
    //get <li>
    var items = itemList.getElementsByTagName('li');

    //convert top array
    Array.from(items).forEach(function(item){
            var itemName = item.firstChild.textContent;
            console.log(itemName);
            if(itemName.toLowerCase().indexOf(text) != -1){
                item.style.display = 'block';
            }else{
                item.style.display = 'none';
            }
    });
}