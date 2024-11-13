var quotes = [
  {
    quote: `“Be the change that you wish to see in the world.”`,
    author: `― Mahatma Gandhi`,
  },
  {
    quote: `“You only live once, but if you do it right, once is enough.”`,
    author: `― Mae West`,
  },
  {
    quote: `“Be yourself; everyone else is already taken.”`,
    author: `― Oscar Wilde`,
  },
  {
    quote: `“So many books, so little time.”`,
    author: `― Frank Zappa`,
  },
  {
    quote: `“A room without books is like a body without a soul.”`,
    author: `― Marcus Tullius Cicero`,
  },
];

var lastIndex = -1;

function generateQuote() {
  var randomIndex;

  do {
    randomIndex = Math.floor(Math.random() * quotes.length);
  } while (randomIndex === lastIndex);

  var randomQuote = quotes[randomIndex].quote;
  var author = quotes[randomIndex].author;

  document.getElementById(`quoteDisplay`).innerText = randomQuote;
  document.getElementById(`authorDisplay`).innerText = author;

  lastIndex = randomIndex;
}
