import React from "react";
import Rectangle46 from "../images/Rectangle46.jpeg";
import Rectangle48 from "../images/Rectangle48.jpeg";
import Rectangle50 from "../images/Rectangle50.JPG";
import Rectangle79 from "../images/Rectangle79.jpeg";
const Upcomingpg = () => {
  const itemsData = [
    {
      city: "Mumbai",
      state: "Maharashtra",
      desc: "Experience coworking redefined at Ofis Square's Mumbai center, perfectly situated in the heart of this dynamic metropolis.",
    },
    {
      city: "Ahmedabad",
      state: "Gujarat",
      desc: "Discover the perfect blend of tradition and modernity in your work environment at Ofis Square Ahmedabad, where innovation knows no bounds.",
    },
    {
      city: "Bengaluru",
      state: "Karnataka",
      desc: "Ofis Square Bengaluru: Where innovation takes root, and success stories are written in code.",
    },
    {
      city: "Pune",
      state: "Maharashtra",
      desc: "Experience the perfect blend of work and leisure in Pune's vibrant atmosphere, exclusively at Ofis Square.",
    },
    // Add more data objects for additional items
  ];
  return (
    <>
      <div className="upcoming mainpg">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h2>Upcoming Locations</h2>
              <ul className="text">
                {itemsData.map((item, index) => (
                  <li key={index}>
                    <div className="box">
                      <span></span>
                      <h5>{item.city}</h5>
                      <i>{item.state}</i>
                      <p>{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-md-6">
              <ul className="imgal">
                <li>
                  <figure className="line-top">
                    <span>
                      <img src={Rectangle46} />
                    </span>
                  </figure>
                  <figure>
                    <span>
                      <img src={Rectangle48}/>
                    </span>
                  </figure>
                </li>
                <li>
                  <figure>
                    <span>
                      <img src={Rectangle50} />
                    </span>
                  </figure>
                  <figure className="line-bottom">
                    <span>
                      <img src={Rectangle79} />
                    </span>
                  </figure>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Upcomingpg;
