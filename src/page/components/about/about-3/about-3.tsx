import { FC } from "react";

const About3: FC = () => {
  return (
    <section className="about-section-4 pb-130">
      <div className="shape">
        <img src="/assets/img/shapes/about-shape-3.png" alt="shape" />
      </div>
      <div className="container">
        <div className="row gy-lg-0 gy-4 align-items-center">
          <div className="col-lg-6 col-md-12">
            <div className="about-img-wrap-4">
              <div className="about-img img-1 reveal">
                <img src="/assets/img/images/about-img-6.png" alt="img" />
              </div>
              <div className="about-img img-2 reveal">
                <img src="/assets/img/images/about-img-7.png" alt="img" />
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12">
            <div className="about-content-4">
              <div className="section-heading heading-3 mb-0">
                <h4
                  className="sub-heading after-none"
                  data-text-animation="fade-in"
                  data-duration="1.5"
                >
                  About Our Company
                </h4>
                <h2
                  className="section-title t-up"
                  data-text-animation
                  data-split="word"
                  data-duration="1"
                >
                  We want to bring business and the digital world together
                </h2>
                <p>
                  This is the main factor that sets us apart from our
                  competition and allows us to deliver a specialist business
                  consultancy service. Through our years of experience, we’ve
                  also learned that while each channel has its own set of
                  advantages, they all work best when strategically paired with
                  other channels.
                </p>
              </div>
              <div className="about-counter-wrap">
                <div className="about-counter">
                  <div className="icon">
                    <img src="/assets/img/icon/about-3.png" alt="icon" />
                  </div>
                  <div className="content">
                    <h3 className="title">
                      <span className="odometer" data-count="25">
                        0
                      </span>
                      +
                    </h3>
                    <p>Years on the market</p>
                  </div>
                </div>
                <div className="about-counter">
                  <div className="icon">
                    <img src="/assets/img/icon/about-4.png" alt="icon" />
                  </div>
                  <div className="content">
                    <h3 className="title">
                      <span className="odometer" data-count="375">
                        0
                      </span>
                      +
                    </h3>
                    <p>Projects delivered so far</p>
                  </div>
                </div>
              </div>
              <a href="about.html" className="rr-primary-btn">
                Get Started Now
                <i className="fa-sharp fa-regular fa-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About3;
