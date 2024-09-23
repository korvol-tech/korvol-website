import { FC } from "react";

const WhyUs6: FC = () => {
  return (
    <section className="choose-us pt-130 pb-130 overflow-hidden">
      <div className="shape">
        <img src="assets/img/shapes/choose-bg-shape.png" alt="bg-shape" />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="choose-us-img reveal">
              <img src="assets/img/images/choose-us-img.png" alt="img" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="choose-us-content fade-wrapper">
              <div className="section-heading mb-40">
                <h4
                  className="sub-heading after-none"
                  data-text-animation="fade-in"
                  data-duration="1.5"
                >
                  why choose us?
                </h4>
                <h2
                  className="section-title"
                  data-text-animation
                  data-split="word"
                  data-duration="1"
                >
                  Crafting Timeless Brands with Creativity, Precision, and
                  Purpose....
                </h2>
              </div>
              <ul className="choose-list">
                <li className="fade-top">
                  <div className="icon">
                    <i className="fa-light fa-check"></i>
                  </div>
                  We seamlessly merge two key components – economics and
                  <br />
                  information technology.
                </li>
                <li className="fade-top">
                  <div className="icon">
                    <i className="fa-light fa-check"></i>
                  </div>
                  We seamlessly merge two key components – economics and
                  <br />
                  information technology.
                </li>
                <li className="fade-top">
                  <div className="icon">
                    <i className="fa-light fa-check"></i>
                  </div>
                  We seamlessly merge two key components – economics and
                  <br />
                  information technology.
                </li>
              </ul>
              <div className="choose-us-btn mt-40 fade-top">
                <a href="contact.html" className="rr-primary-btn">
                  Book a Meeting
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs6;
