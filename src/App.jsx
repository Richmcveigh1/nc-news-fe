import "./App.css";
import Title from "./Components/Title";
import ArticleContainer from "./Components/All-articles-container";
import Navbar from "./Components/Navbar-footer";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import HomeArticleContainer from "./Components/Home";
import IndividualArticle from "./Components/Individual-article"

function App() {
  const [topics, setTopics] = useState([]);
  const [articles, setArticles] = useState([]);

  return (
    <div>
      <Title />
      <Routes>
        <Route
          path="/"
          element={
            <HomeArticleContainer
              articles={articles}
              setArticles={setArticles}
            />
          }
        />
        <Route
          path="/all"
          element={
            <ArticleContainer articles={articles} setArticles={setArticles} />
          }
        />
        <Route
          path="/article/:article_id"
          element={<IndividualArticle />}
        />
      </Routes>
      <Navbar topics={topics} setTopics={setTopics} />
    </div>
  );
}

export default App;
