import { Card } from "../components/Card";
export const Home = () => {
  const articles = [];
  return (
    <main>
      <div className="container">
        <div className="row">
          {articles.map((article) => (
            <div className="col-md-3 col-sm-6 col-12">
              <Card title={article.title} image={article.image} />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};
