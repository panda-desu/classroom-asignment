import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
export const Article = () => {
  const { id } = useParams();
  const [article, setArticle] = useState({});

  useEffect(() => {
    axios.get(`http://localhost:8000/article/${id}`).then((res) => {
      setArticle(res.data);
    });
  }, []);
  //   if (article === null) return <></>;
  return (
    <div className="container">
      <h1>{article.name}</h1>
      <img src={article.imageUrl} alt="" />
      <div>{article.text}</div>
    </div>
  );
};
