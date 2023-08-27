const quotes = [
  { quote: "The only way to do great work is to love what you do.", person: "Steve Jobs" },
  { quote: "In the end, we will remember not the words of our enemies, but the silence of our friends.", person: "Martin Luther King Jr." },
  { quote: "Life is what happens when you're busy making other plans.", person: "John Lennon" },
  { quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.", person: "Winston Churchill" },
  { quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.", person: "Nelson Mandela" },
  { quote: "The future belongs to those who believe in the beauty of their dreams.", person: "Eleanor Roosevelt" },
  { quote: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.", person: "Albert Einstein" },
  { quote: "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.", person: "Ralph Waldo Emerson" },
  { quote: "The only limit to our realization of tomorrow will be our doubts of today.", person: "Franklin D. Roosevelt" },
  { quote: "It is during our darkest moments that we must focus to see the light.", person: "Aristotle" }

];


document.getElementById("quote").addEventListener("click",function(){

  const p = document.getElementById('quote-p');
  const name = document.getElementById('name');


  const randomQuote = Math.floor(Math.random() * quotes.length);
  p.innerText = (quotes[randomQuote].quote);
  name.innerText = (quotes[randomQuote].person);

  




});




