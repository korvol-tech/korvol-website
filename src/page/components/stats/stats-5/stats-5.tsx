import { FC } from "react";

const Stats5: FC = () => {
  return (
    <section className="process-section process-3 pb-130 fade-wrapper">
      <div
        className="bg-shape"
        data-background="/assets/img/shapes/process-bg-shape.png"
      ></div>
      <div className="process-counter">
        <div className="container">
          <div className="row process-counter-wrap">
            <div className="col-lg-3 col-md-6">
              <div className="counter-card">
                <div className="icon">
                  <img src="/assets/img/icon/counter-1.png" alt="counter" />
                </div>
                <div className="content">
                  <h3 className="title">
                    <span className="odometer" data-count="42">
                      0
                    </span>
                    +
                  </h3>
                  <p>Years of Experience</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="counter-card">
                <div className="icon">
                  <img src="/assets/img/icon/counter-2.png" alt="counter" />
                </div>
                <div className="content">
                  <h3 className="title">
                    <span className="odometer" data-count="200">
                      0
                    </span>
                    +
                  </h3>
                  <p>Project’s Complete</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="counter-card">
                <div className="icon">
                  <img src="/assets/img/icon/counter-3.png" alt="counter" />
                </div>
                <div className="content">
                  <h3 className="title">
                    <span className="odometer" data-count="68">
                      0
                    </span>
                    +
                  </h3>
                  <p>Team Members</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="counter-card card-4">
                <div className="icon">
                  <img src="/assets/img/icon/counter-4.png" alt="counter" />
                </div>
                <div className="content">
                  <h3 className="title">
                    <span className="odometer" data-count="99">
                      0
                    </span>
                    +
                  </h3>
                  <p>Total Award Wins</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats5;
