import { Link } from "react-router-dom";
import "./Post.css";

export const Post = ({ article, key }) => {
  const { title, file, recipeIntro } = article;
  console.log(article);
  return (
    <div className="post__home">
      <div className="recipeContent">
        {file && (
          <img
            className="featuredImage"
            src={file.url}
            alt={title}
            title={title}
          />
        )}
        <div id="recipeDescription">
          <Link to={`/recipes/${article._id}`}>
            <h2 className="title">{title}</h2>
          </Link>
          <p>{recipeIntro}</p>
        </div>
      </div>
    </div>
  );
};
