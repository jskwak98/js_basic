const quotes = [
    {
        quote: "Once my wife gave me a wonderful birthday present. She let me win an argument.",
        author: "Anonymous",
    },
    {
        quote: "After all is said and done, more is said than done.",
        author: "Anonymous",
    },
    {
        quote: "All glory comes from daring to begin.",
        author: "Anonymous",
    },{
        quote: "Age and treachery will triumph over youth and skill.",
        author: "Anonymous",
    },{
        quote: "Anger makes dull men witty, but it keeps them poor.",
        author: "Anonymous",
    },{
        quote: "Book lovers never go to bed alone.",
        author: "Anonymous",
    },{
        quote: "Live together like brothers and do business like strangers.",
        author: "Anonymous",
    },{
        quote: "Who buys has need of two eyes But one's enough to sell the stuff.",
        author: "Anonymous",
    },{
        quote: "Soon learnt, soon forgotten.",
        author: "Anonymous",
    },
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const randex = Math.floor(Math.random() * quotes.length);

quote.innerText = quotes[randex].quote;
author.innerText = quotes[randex].author;