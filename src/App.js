import { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import axios from "axios";
import { Posts } from "./components/Posts";
import { Recipe } from "./components/Recipe";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import "./App.css";

const baseUrl = "https://evening-escarpment-65430.herokuapp.com/recipes";

function App() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getArticles = async () => {
      axios
        .get(baseUrl)
        .then((response) => {
          setArticles(response.data.data);
          setLoading(false);
        })
        .catch(console.error);
    };
    getArticles();
  }, []);

  return (
    <Router>
      <div className="App">
        <Header />

        <Main>
          <Switch>
            <Route exact path="/">
              <Posts posts={articles} />
            </Route>
            <Route path="/recipe/:_id">
              <Recipe />
            </Route>
          </Switch>
        </Main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
