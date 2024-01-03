import React from "react";
import { Link } from "react-router-dom";
import belowtestimonial from "../images/belowtestimonial.jpeg";
const Aplatform = () => {
  //const navigate = useNavigate();
  const scrollToLetsSection = (e) => {
    const letsSection = document.getElementById('lets');
    if (letsSection) {
      letsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <>
      <section className="aplatform">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-md-6">
              <figure className="line-left">
                <span>
                  <img src={belowtestimonial} alt="belowtestimonial"/>
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
                <Link to="/#lets" className="link" onClick={scrollToLetsSection}>
                  Request a quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Aplatform;
