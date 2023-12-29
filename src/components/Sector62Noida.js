import React from "react";
import AerocityUnion from "../images/Aerocity-union.png";
import AerocityGroup from "../images/Aerocity-Group.png";
import AerocityGroup1 from "../images/Aerocity-Group (1).png";
import star from "../images/star.png";
import sq from "../images/sq.png";
import desk from "../images/desk.png";
import Demandbook from './Demandbook'
import Testimonials from './Testimonials'
import LetsNoidaSector62 from './LetsNoidaSector62'
import NewEvents from './NewEvents'
import FaqSector62Noida from "./FaqSector62Noida";
import UpcommingNoidaSec62 from "./UpcommingNoidaSec62";
import NearBySector62Noida from "./NearBySector62Noida";
const Sector62Noida = () => {
console.log('meri photo');
  const itemsData = [
    {
      img: AerocityUnion,
      desc: "Ofis Spaces Private Limited, 1st and 2nd floors, Ofis Square, The Iconic Corenthum, Plot A41, Sector 62, Noida Gautam Budhha Nagar, Uttar Pradesh – 201301. Contact Number: +91 8287991481",
    }
  ];
  const itemsDataSecond = [
    {
      img: star,
      starrating: "5 Star",
      rating: "100+ Ratings",
    },
    {
      img: sq,
      starrating: "5 Star",
      rating: "100+ Ratings",
    },
    {
      img: desk,
      starrating: "5 Star",
      rating: "100+ Ratings",
    },
  ];
  return (
    <>
      <div className="banner">
        <div className="container">
          <div className="row">
            <h1>
              Coworking Spaces
              <br />
              <span>Noida Sector 62</span>
            </h1>
          </div>
        </div>
      </div>
      <section className="Aerocity">
        <div className="container">
           <div className="row">
              <div className="col-md-7">
                 <h2>Ofis Square in  Noida Sector 62</h2>
                 <ul>
                   {itemsData.map((item, index) => (
                     <li key={index}><span><img src={item.img} height="20px" width="20px"/></span>{item.desc}</li>
                   ))}
                </ul>             
              </div>
              <div className="col-md-5">
                <div className="rigth-box"> 
                  <ul>
                  {itemsDataSecond.map((item, index) => (
                    <li key={index}><img src={item.img} height="25" width="25"/><h5>{item.starrating}</h5><p>{item.rating}</p></li>
                  ))}
                  </ul>
                </div>
              </div>
           </div>
        </div>
     </section>
     <Demandbook/>
     <UpcommingNoidaSec62/>
     <NewEvents/>
     <FaqSector62Noida/>
     <Testimonials/>
     <NearBySector62Noida/>
     <LetsNoidaSector62/>
    </>
  );
};

export default Sector62Noida;
