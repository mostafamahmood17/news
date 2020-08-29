import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import News from './Components/News/News';
import Header from './Components/Header/Header';

function App() {
  const [news, setNews] = useState([]);
  useEffect(() => {
  fetch('https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=fd2b28bc77a346a8905dbef0cc5ae522')
  .then(res => res.json())
  .then(data => setNews(data.articles))
  .catch(err => console.log(err))
  }, [])
  console.log(news)
  return (
    <div className="App">
      <Header></Header>
      <h2>Headlines : {news.length}</h2>
      {console.log("news", news.length)}
      {
      news.map(article => <News article = {article} ></News>)
      }
    </div>
  );
}

export default App;
