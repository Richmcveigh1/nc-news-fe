import "./App.css";
import Title from "./Components/Title";
import ArticleContainer from "./Components/All-articles-container";
import Navbar from "./Components/Navbar-footer";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import HomeArticleContainer from "./Components/Home";
import IndividualArticle from "./Components/Individual-article";
import TopicPage from "./Components/Topic-Page";
import UserPage from "./Components/User-Page";


function App() {
  const [topics, setTopics] = useState([]);
  const [articles, setArticles] = useState([]);

  return (
    <div>
      <Title topics={topics} setTopics={setTopics}/>
      <Routes>
        <Route path="/article/:article_id" element={<IndividualArticle />} />
        <Route
          path="/all"
          element={
            <ArticleContainer articles={articles} setArticles={setArticles} />
          }
        />
        <Route path="/:topic" element={<TopicPage />} />
        <Route
          path="/"
          element={
            <HomeArticleContainer
              articles={articles}
              setArticles={setArticles}
            />
          }
        />
        <Route path = "/users" element={<UserPage />} />
      </Routes>
      <Navbar topics={topics} setTopics={setTopics} />
    </div>
  );
}

export default App;
