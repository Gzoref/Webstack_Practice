let counter = document.querySelector('.counter');
const lowerBtn = document.getElementById('lower-count');
const upperBtn = document.getElementById('upper-count');


upperBtn.addEventListener('click', incrementCounter);
lowerBtn.addEventListener('click', decrementCounter);

let count = 0;

function incrementCounter() {
    count++;
    counter.innerHTML = count;
    if (counter.innerHTML > '0') {
        counter.style.color = '#4caf50';
    }
}

function decrementCounter() {
    count--;
    counter.innerHTML = count;
    if (counter.innerHTML < '0') {
        counter.style.color = '#2464af';
    }

}