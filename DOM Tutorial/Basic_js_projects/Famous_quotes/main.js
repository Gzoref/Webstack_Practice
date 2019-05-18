

var quotes = [
    {
        name: 'author number 1',
        quote: 'Inspirational quote number 1'
    },
    {
        name: 'author number 2',
        quote: 'Inspirational quote number 2'
    },
    {
        name: 'author number 3',
        quote: 'Inspirational quote number 1'
    },
    {
        name: 'author number 3',
        quote: 'Inspirational quote number 4'
    },
    {
        name: 'author number 5',
        quote: 'Inspirational quote number 5'
    }
];

var quoteBtn = document.querySelector('#quoteBtn');
var quote = document.querySelector('#quote');
var author = document.querySelector('#quoteAuthor');

quoteBtn.addEventListener('click', quoteGenerator);

function quoteGenerator() {

    var number = Math.floor(Math.random()*quotes.length);

    author.innerHTML = quotes[number].name;
    quote.innerHTML = quotes[number].quote;

    console.log(number);

}
