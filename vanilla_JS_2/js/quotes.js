const quotes = [
    {
        quote: `"준비 갈 완료."`,
        author: "-Hanni Pham",
    },
    {
        quote: `"꾀배기."`,
        author: "-Hanni Pham",
    },
    {
        quote: `"뜬겁새로."`,
        author: "-Hanni Pham",
    },
    {
        quote: `"엉망잔칭."`,
        author: "-Hanni Pham",
    },
    {
        quote: `"후두다닥."`,
        author: "-Hanni Pham",
    },
    {
        quote: `"사랑해 많이 주세요."`,
        author: "-Hanni Pham",
    },
    {
        quote: `"대퓨님."`,
        author: "-Hanni Pham",
    },
    {
        quote: `"쭈쭈가야."`,
        author: "-Hanni Pham",
    },
    {
        quote: `"애비가."`,
        author: "-Hanni Pham",
    },
    {
        quote: `"귀 터질 뿔랐네"`,
        author: "-Hanni Pham",
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const nowQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = nowQuote.quote;
author.innerText = nowQuote.author;

