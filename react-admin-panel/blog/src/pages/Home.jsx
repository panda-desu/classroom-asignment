import { Card } from "../components/Card";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
export const Home = () => {
  const [articles, setArticle] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8000/article").then((res) => {
      setArticle(res.data);
    });
  }, []);

  return (
    <main>
      <div className="container">
        <div className="row">
          {articles.map((article) => (
            <div className="col-md-3 col-sm-6 col-12" key={article.id}>
              <Link to={`articles/${article.id}`}>
                <Card title={article.name} image={article.imageUrl} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};
