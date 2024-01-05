import React from "react";
import Rectangle31 from "../images/MgRectangle31.jpg";
import Rectangle30 from "../images/SohnaNoidaRectangle30.jpg";
import Rectangle32 from "../images/NS3Rectangle32.jpg";
import Union4 from "../images/Union (4).png";
import Group from "../images/Group.png";
const NearBySector62Noida = () => {
  const itemsData = [
    {
      img: Rectangle32,
      heading: "Noida Sector 3",
      desc: "Insightfully built lounges designed to foster creativity and collaboration.",
      imgIcon: Union4,
      descInner: "The Iconic Corenthum, Plot A41, Sector 62, Noida Gautam Budhha Nagar",
      imgGroup: Group,
      descAdd: "Uttar Pradesh – 201301. Contact Number: +91 8287991481"
    },
    {
      img: Rectangle31,
      heading: "MG Road, Gurugram",
      desc: "Insightfully built lounges designed to foster creativity and collaboration.",
      imgIcon: Union4,
      descInner:"Premier office hub located in the heart of a thriving neighbourhood....",
      imgGroup: Group,
      descAdd: "Located with close proximity to dining, retail, entertainment and residential...."
    },
    {
      img: Rectangle30,
      heading: "Sohna Road",
      imgIcon: Union4,
      desc: "Candor Techspace",
      descInner:"Premier office hub located in the heart of a thriving neighbourhood....",
      imgGroup: Group,
      descAdd: " Located with close proximity to dining, retail, entertainment and residential...."
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
                {itemsData.map((item, index) => (
                  <li key={index}>
                    <div className="box">
                      <figure>
                        <span>
                          <img src={item.img} alt={`Rectangle${index + 30}`} />
                        </span>
                      </figure>
                      <div className="text">
                        <h5>{item.heading}</h5>
                        <p>{item.desc}</p>
                        <ul>
                          <li>
                            <span>
                              <img src={item.imgIcon} height="25px" width="25px" alt="Union4" />
                            </span>
                            {item.descInner}
                          </li>
                          <li>
                            <span>
                              <img
                                src={item.imgGroup}
                                height="20px"
                                width="20px"
                                alt='imggroup'
                              />
                            </span>
                            {item.descAdd}
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                ))}
                {/* <li>
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
                </li> */}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NearBySector62Noida;
