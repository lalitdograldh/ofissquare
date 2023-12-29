import React from "react";

const Aplatform = () => {
  return (
    <>
      <section className="aplatform">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-md-6">
              <figure className="line-left">
                <span>
                  {/* <img src="images/Rectangle52.png" /> */}
                  <img src="images/belowtestimonial.jpeg" />
                </span>
              </figure>
            </div>
            <div className="col-md-6">
              <div className="box">
                <h2>
                  A platform designed to
                  <br /> elevate your coworking
                  <br /> experience.
                </h2>
                <p>
                  Get a <b className="orange">day pass at just 499</b> for a
                  taste
                  <br /> of tomorrow's workspace.
                </p>
                <a href="#" className="link">
                  Request a quote
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Aplatform;
