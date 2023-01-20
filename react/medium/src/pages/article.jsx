import { ArticleSide } from "../components/ArticleSide";
import { ArticleMain } from "../components/ArticleMain";
import { SlimNav } from "../components/SlimNav";
export const Article = () => {
  return (
    <>
      <SlimNav />
      <div className="container ">
        <div className="row ArticleMain">
          <div className="col-8">
            <ArticleMain />
          </div>
          <div className="col-1 p-0"></div>
          <div className="col-3">
            <ArticleSide />
          </div>
        </div>
      </div>
    </>
  );
};
