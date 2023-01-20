import { BsTwitter } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import user from "../image/user.svg";
import astranout from "../image/astranoat.svg";
import { BsLinkedin } from "react-icons/bs";
import { BsLink45Deg } from "react-icons/bs";
export const ArticleMain = () => {
  return (
    <main className="Article-Main-sd">
      <div>
        <div className=" d-flex justify-content-between align-items-center mt-1">
          <div className="d-flex align-items-center">
            <img src={user} alt="" />
            <div className="ms-3">
              Cassie Kozyrkov
              <div className="text-secondary article-main-top-date">
                Dec 27, 2022 · 9 min read
              </div>
            </div>
          </div>
          <div>
            <a href="" className="article-top-link">
              <BsTwitter color="#868588" />
            </a>
            <a href="" className="article-top-link">
              <BsFacebook color="#868588" />
            </a>
            <a href="" className="article-top-link">
              <BsLinkedin color="#868588" />
            </a>
            <a href="" className="article-top-link">
              <BsLink45Deg color="#868588" />
            </a>
          </div>
        </div>
        <div className="mt-5">
          <h1>The best New Year’s resolutions you can make</h1>
          <p className="text-secondary fs-3">
            Resolutions that actually work, according to a decision scientist
          </p>
          <p className="article-main-text">
            Happy almost-2023! Chances are that you’re contemplating making some
            New Year’s resolutions, so let’s get you set up for success with a
            few resolutions that will unlock the best version of you.
          </p>
          <img src={astranout} alt="" className="mt-5 article-main-img" />
          <p className="text-center  mt-2 text-secondary">
            All copyright belongs to the author.
          </p>
        </div>
        <div className="mt-5">
          <h5>#1 — Resolve to stop borrowing resolutions</h5>
          <p className="article-main-center-text1">
            Different people are different, so what works for you might not be
            what works for anyone else.
          </p>
          <p className="article-main-center-text mt-5">
            Understanding this is the single biggest step you can take in the
            direction of success. That’s precisely why I’m not going to do the
            standard guru thing of suggesting you copy my exact wellness plan
            after proving to you that I have a stack of credentials (
            <span className="text-decoration-underline">I do</span>) and I’m in
            shape (<span className="text-decoration-underline">I am</span>).
            <span className="text-dark">
              My plan fits me, but you need a plan that fits you.
            </span>
          </p>
          <h5 className="mt-5">Quit borrowing other people’s resolutions</h5>
          <p className="article-main-center-text">
            Whenever you’re tempted to copy your favorite celeb’s latest health
            plan, take a moment to think about some potential reasons that
            person is able to stick with it (assuming they are) which you might
            not know about. Do they have a private chef who prevents them from
            making food decisions? Do they secretly loooove cabbage? Is their
            job less stressful than yours? And so on.
          </p>
        </div>
      </div>
    </main>
  );
};
