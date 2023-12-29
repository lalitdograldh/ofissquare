import React from "react";
import Rectangle30 from "../images/Rectangle30.png";
import Rectangle31 from "../images/Rectangle31.png";
import Rectangle32 from "../images/Rectangle32.png";
import Union4 from "../images/Union (4).png";
import Group from "../images/Group.png";
const NearBySector62Noida = () => {
  const itemsData = [
    {
      img: Rectangle30,
      heading: "Noida, Sector 62",
      desc: "Candor Techspace, Sector 62, Noida, Uttar Pradesh - 201309",
    },
    {
      img: Rectangle31,
      heading: "Luxurious lounges",
      desc: "Insightfully built lounges designed to foster creativity and collaboration.",
    },
    {
      img: Rectangle32,
      heading: "Mail & Package",
      desc: "Community Desk support with receiving of your mails and packages.",
    },
  ];
  return (
    <>
      <section className="news Nearcentres">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center Nearby">
              <h2>Nearby centres</h2>
              <ul>
                <li>
                  <div className="box">
                    <figure>
                      <span>
                        <img src="images/Rectangle30.png" />
                      </span>
                    </figure>
                    <div className="text">
                      <h5>Noida, Sector 62</h5>
                      <p>
                      Ofis Spaces Private Limited, 1st & 2nd floor, Ofis Square
                      </p>
                      <ul>
                        <li>
                          <span>
                            <img
                              src="images/Union (4).png"
                              height="25px"
                              width="25px"
                            />
                          </span>
                          The Iconic Corenthum, Plot A41, Sector 62, Noida Gautam Budhha Nagar
                        </li>
                        <li>
                          <span>
                            <img
                              src="images/Group.png"
                              height="20px"
                              width="20px"
                            />
                          </span>
                          Uttar Pradesh – 201301. Contact Number: +91 8287991481
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="box">
                    <figure>
                      <span>
                        <img src="images/Rectangle31.png" />
                      </span>
                    </figure>
                    <div className="text">
                      <h5>Cybercity</h5>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do incididunt ut labore.
                      </p>
                      <ul>
                        <li>
                          <span>
                            <img
                              src="images/Union (4).png"
                              height="25px"
                              width="25px"
                            />
                          </span>
                          Premier office hub located in the heart of a thriving
                          neighbourhood....
                        </li>
                        <li>
                          <span>
                            <img
                              src="images/Group.png"
                              height="20px"
                              width="20px"
                            />
                          </span>
                          Located with close proximity to dining, retail,
                          entertainment and residential....
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="box">
                    <figure>
                      <span>
                        <img src="images/Rectangle32.png" />
                      </span>
                    </figure>
                    <div className="text">
                      <h5>Golf Course Road</h5>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do incididunt ut labore.
                      </p>
                      <ul>
                        <li>
                          <span>
                            <img
                              src="images/Union (4).png"
                              height="25px"
                              width="25px"
                            />
                          </span>
                          Premier office hub located in the heart of a thriving
                          neighbourhood....
                        </li>
                        <li>
                          <span>
                            <img
                              src="images/Group.png"
                              height="20px"
                              width="20px"
                            />
                          </span>
                          Located with close proximity to dining, retail,
                          entertainment and residential....
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NearBySector62Noida;
