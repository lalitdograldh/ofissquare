import React from "react";
import Ellipse1 from "../images/Ellipse1.png";
import Union from "../images/Union.png";
const itemsData = [
    {
      imgsrcEllipse1: Ellipse1,
      imgsrcStar: Union,
      desc: "Ofis Square transcends the typical premium office space experience. From their chic office design to the unbeatable coffee, everything here is top-notch. But what truly sets them apart is their wonderful staff and the vibrant community they've fostered. They've turned an office space into a close-knit professional haven. Thanks to the Ofis Square team for making every workday a delight.",
      name:'Ankit Majumdar',
      dept:'Director-Edvanta Technologies Pvt Ltd',
    },
    {
      imgsrcEllipse1: Ellipse1,
      imgsrcStar: Union,
      desc: "I’ve been a member of OFIS SQUARE coworking space for almost one year now, and I couldn’t be happier with my experience. The atmosphere here is fantastic, it’s both professional and welcoming. The staff is always friendly and helpful, making sure we have everything we need to be productive.The workspace itself is clean, well-designed, and equipped with all the essential amenities. High-speed internet, comfortable ergonomic chairs, nice cafeteria, pool table and plenty of natural light are just some of the highlights. They also offer complimentary Tea/Coffee and Friday snacks, which is a nice touch.What sets this coworking space apart, in my opinion, is the sense of community. I’ve had the opportunity to connect with fellow professionals and entrepreneurs, which has led to valuable networking opportunities.Overall, I highly recommend this coworking space to anyone looking for a productive and collaborative work environment. It has truly enhanced my work life, and I plan to continue my membership here.",
      name:'Naveen Chadha',
      dept:'Director- Ebizure',
    },
    // Add more data objects for additional items
  ];

  const Testimonials = () => {
    return (
      <>
        <div className="testimonials">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-12 text-center">
                <h2>Clients Testimonials</h2>
              </div>
              <div className="col-md-7">
                <div className="box">
                  <div
                    id="testimonials"
                    className="carousel slide"
                    data-bs-ride="carousel"
                  >
                    <div className="carousel-inner">
                      {itemsData.map((item, index) => (
                        <div
                          className={`carousel-item ${index === 0 ? 'active' : ''}`}
                          key={index}
                        >
                          <div className="tesbox text-center">
                            <img className="pic" src={item.imgsrcEllipse1} alt={`Ellipse${index}`} />
                            <img className="star" src={item.imgsrcStar} alt={`Union${index}`} />
                            <p>
                              {item.desc}
                            </p>
                            <h5>{item.name}</h5>
                            <span>{item.dept}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                    <button
                      className="carousel-control-prev"
                      type="button"
                      data-bs-target="#testimonials"
                      data-bs-slide="prev"
                    >
                      <img src="images/left.png" alt="Previous" />
                    </button>
                    <button
                      className="carousel-control-next"
                      type="button"
                      data-bs-target="#testimonials"
                      data-bs-slide="next"
                    >
                      <img src="images/right.png" alt="Next" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };
  
export default Testimonials;
