import { FC } from "react";

const Service5: FC = () => {
  return (
    <section className="blog-section-3 pt-130 pb-130 fade-wrapper">
      <div className="container">
        <div className="section-heading text-center">
          <h4
            className="sub-heading"
            data-text-animation="fade-in"
            data-duration="1.5"
          >
            Blog & News
          </h4>
          <h2
            className="section-title"
            data-text-animation
            data-split="word"
            data-duration="1"
          >
            Read Our Latest News & Blog <br />
            Get Every Update
          </h2>
        </div>
        <div className="row gy-lg-0 gy-5 justify-content-center">
          <div className="col-lg-4 col-md-6">
            <div className="post-card-2 card-3 card-4 fade-top">
              <div className="post-thumb">
                <img src="assets/img/blog/post-6.png" alt="post" />
              </div>
              <div className="post-content-wrap">
                <div className="post-content">
                  <ul className="post-meta">
                    <li>Design Solution</li>
                    <li>by David Adam</li>
                  </ul>
                  <h3 className="title">
                    <a href="blog-details.html">
                      How Our Web Agency Shapes <br /> Digital Experience Focus
                      All Goal
                    </a>
                  </h3>
                  <a href="blog-details.html" className="rr-primary-btn">
                    Read More{" "}
                    <i className="fa-sharp fa-regular fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="post-card-2 card-3 card-4 fade-top">
              <div className="post-thumb">
                <img src="assets/img/blog/post-7.png" alt="post" />
              </div>
              <div className="post-content-wrap">
                <div className="post-content">
                  <ul className="post-meta">
                    <li>Design Solution</li>
                    <li>by David Adam</li>
                  </ul>
                  <h3 className="title">
                    <a href="blog-details.html">
                      Why Prioritizes User Experience In Every Web Design
                      Project
                    </a>
                  </h3>
                  <a href="blog-details.html" className="rr-primary-btn">
                    Read More{" "}
                    <i className="fa-sharp fa-regular fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="post-card-2 card-3 card-4 fade-top">
              <div className="post-thumb">
                <img src="assets/img/blog/post-8.png" alt="post" />
              </div>
              <div className="post-content-wrap">
                <div className="post-content">
                  <ul className="post-meta">
                    <li>Design Solution</li>
                    <li>by David Adam</li>
                  </ul>
                  <h3 className="title">
                    <a href="blog-details.html">
                      Demystifying The Wizardry Of Our Web Design Agency
                    </a>
                  </h3>
                  <a href="blog-details.html" className="rr-primary-btn">
                    Read More{" "}
                    <i className="fa-sharp fa-regular fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service5;
