import { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import axios from "axios";
import { Posts } from "./components/Posts";
import { Recipe } from "./components/Recipe";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
// import Editor from "./components/Editor";
import Loader from "react-loader-spinner";

import "./App.css";

const baseUrl = "https://evening-escarpment-65430.herokuapp.com/recipes";

function App() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getArticles = async () => {
      await axios
        .get(baseUrl)
        .then((response) => {
          setArticles(response.data.data);
          setLoading(false);
        })
        .catch(console.error);
    };
    getArticles();
  }, []);

  if (loading)
    return <Loader type="Oval" color="#00BFFF" height={80} width={80} />;
  return (
    <Router>
      <div className="App">
        <Header />

        <Main>
          <Switch>
            <Route exact path="/">
              <Posts posts={articles} />
            </Route>
            <Route path="/recipes/:_id">
              <Recipe />
            </Route>
          </Switch>
        </Main>
        {/* <Editor /> */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
