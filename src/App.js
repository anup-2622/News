import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import Show from "./Show";

function App() {
  let [news, setNews] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=in&apiKey=6004b8fcb1604003b4ead57854e8d2c2"
      )
      .then((res) => {
        setNews(res.data.articles);
      });
  }, []);

  return (
    <div className="App">
      {/* app */}
      <Show news={news} />
    </div>
  );
}

export default App;
