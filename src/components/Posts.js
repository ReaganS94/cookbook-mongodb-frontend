import { Post } from "./Post";
import "./Posts.css";

export const Posts = ({ posts }) => {
  return (
    <div className="posts">
      {posts.map((article, index) => (
        <Post article={article} key={index} />
      ))}
    </div>
  );
};
