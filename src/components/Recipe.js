import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import marked from "marked";
import axios from "axios";
import Loader from "react-loader-spinner";

import "./Recipe.css";

const baseUrl = "https://evening-escarpment-65430.herokuapp.com/recipes";

export const Recipe = () => {
  const [article, setArticle] = useState([]);
  const [loading, setLoading] = useState(true);
  const { _id } = useParams();

  useEffect(() => {
    const getArticle = async () => {
      await axios
        .get(`${baseUrl}/${_id}`)
        .then((response) => {
          setArticle(response.data.data);
          setLoading(false);
        })
        .catch(console.error);
    };
    getArticle();
  }, [_id]);

  if (loading)
    return <Loader type="Oval" color="#00BFFF" height={80} width={80} />;
  const postDescription = marked(article.description);
  console.log(article);
  return (
    <div className="posts" id="singlePost">
      <h2 className="title" id="recipeTitle">
        {article.title}
      </h2>
      {article.file.url && (
        <img
          className="featuredImage"
          id="recipeImage"
          src={article.file.url}
          alt={article.title}
          title={article.title}
        />
      )}

      <section
        id="recipe"
        dangerouslySetInnerHTML={{ __html: postDescription }}
      />
    </div>
  );
};
