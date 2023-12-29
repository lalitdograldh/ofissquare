import React, { useState } from "react";
import group27 from '../images/Group27.JPG';
import Rectangle24 from '../images/Rectangle24.jpg';
import Rectangle25 from '../images/Rectangle25.jpeg';
import { Link } from "react-router-dom";
const Slider = () => {
  const [selectedValue, setSelectedValue] = useState('option1');

  const handleChange = (e) => {
    setSelectedValue(e.target.value);
  };
  const handleButtonClick = () => {
    // Use a mapping or switch statement to determine the corresponding link for the selected value
    let link;
    switch (selectedValue) {
      case 'option1':
        link = '/Coworkingspaces';
        break;
      case 'option2':
        link = '/';
        break;
      case 'option3':
        link = '/CoworkingspacesGurugram';
        break;
      default:
        link = '/';
    }
    window.location.href = link;
  }
  return (
    <>
      <div className="slider">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-8">
              <h1>
                Future <span className="orange">Works Here.</span>
              </h1>
              <p>
                Explore Ofis Square Community: Where Innovation Meets Work.
              </p>
              <div className="box_search">
                <img src={group27} alt="group27" />
                <div className="box">
                  <div className="box_deta">
                    <ul>
                      <li>
                        <h2 className="white">4</h2>
                        <p className="white">Centres</p>
                      </li>
                      <li>
                        <h2 className="white">3</h2>
                        <p className="white">Locations</p>
                      </li>
                      <li>
                        <h2 className="white">1800+</h2>
                        <p className="white">Seats</p>
                      </li>
                      <li>
                        <h2 className="white">1 <span>Lac sq.ft</span></h2>
                        <p className="white">Area Under Management</p>
                      </li>
                    </ul>
                    <form>
                      <label>
                        <select value={selectedValue} onChange={handleChange} className="form-select form-select-lg border" aria-label="Large select example">
                          <option value="option1">Noida</option>
                          <option value="option2">Delhi</option>
                          <option value="option3">Gurugram</option>
                        </select>
                        <Link to={selectedValue === 'option1' ? '/Coworkingspaces' : (selectedValue === 'option3' ? '/CoworkingspacesGurugram' : '/')}>
                          <button onClick={handleButtonClick}>Find Your Workspace</button>
                        </Link>
                      </label>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <figure className="mb_bootom line-top">
                <span>
                  <img src={Rectangle24} alt="Rectangle24" />
                </span>
              </figure>
              <figure className="line-bottom">
                <span>
                  <img src={Rectangle25} alt="Rectangle25" />
                </span>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Slider
