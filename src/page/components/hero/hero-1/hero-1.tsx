import Image from "next/image";
import { FC } from "react";

const Hero1: FC = () => {
  return (
    <section className="hero-section">
      <div className="hero-bg-shape">
        <img src="/assets/img/bg-img/hero-bg-shape.png" alt="shape" />
      </div>
      <div className="hero-shape">
        <img src="/assets/img/shapes/hero-shape-1.png" alt="shape" />
      </div>
      <div className="hero-images">
        <img src="/assets/img/images/hero-img-1.jpg" alt="hero" />
        <img src="/assets/img/images/hero-img-2.jpg" alt="hero" />
        <img src="/assets/img/images/hero-img-3.jpg" alt="hero" />
      </div>
      <div className="hero-img">
        <Image
          src="/assets/img/images/hero-img.jpg"
          alt="hero"
          width={777}
          height={613}
        />
      </div>
      <div className="container">
        <div className="hero-content">
          <h4 className="sub-title anim-text">Enabling</h4>
          <h2 className="title anim-text">Business</h2>
          <h3 className="bottom-title anim-text">Online</h3>
          <a href="about.html" className="hero-btn">
            <i className="fa-thin fa-arrow-right"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero1;
