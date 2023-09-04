// import { useState } from "react";
import "./App.css";
import Title from "./Components/Title";
import ArticleContainer from "./Components/Article-container";
import Navbar from "./Components/Navbar-footer";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";


function App() {
const [topics, setTopics] = useState([])

  return (
    <div>
      <Title />
      <Routes>
        <Route path="/" element={<ArticleContainer />} />
      </Routes>
      <Navbar topics={topics} setTopics={setTopics} />
    </div>
  );
}

export default App;
