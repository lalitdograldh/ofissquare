import React from "react";
import AerocityUnion from "../images/Aerocity-union.png";
import AerocityGroup from "../images/Aerocity-Group.png";
import AerocityGroup1 from "../images/Aerocity-Group (1).png";
import star from "../images/star.png";
import sq from "../images/sq.png";
import desk from "../images/desk.png";
import Testimonials from './Testimonials'
import Lets from './Lets'
import AmenitiesSector16Noida from "./AmenitiesSector16Noida";
import NewEvents from "./NewEvents";
import FaqNoidaSector16 from "./FaqNoidaSector16";
import Nearcenter from "./Nearcenter";
import NoidaSector3Demandbook from "./NoidaSector3Demandbook";
import NearcenterNoidaSector3 from "./NearcenterNoidaSector3";
const NoidaSector3 = () => {
  const itemsData = [
    {
      img: AerocityUnion,
      desc: "A1, Sector 3, Noida,",
    },
    {
      img: AerocityGroup,
      desc: "Popular restaurants, retail hubs and 5-star business hotels - within 1 km; Metro Station - 0.3 km.",
    },
    {
      img: AerocityGroup1,
      desc: "Global enterprises, public and private sector business establishments - within 0.5 km",
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
      <div className="banner" id="noidaSector3Banner">
        <div className="container">
          <div className="row">
            <h1>
              Coworking Spaces
              <br />
              <span>Sector 3 Noida</span>
            </h1>
          </div>
        </div>
      </div>
      <section className="Aerocity">
        <div className="container">
           <div className="row">
              <div className="col-md-7">
                 <h2>Ofis Square in Sector 3 Noida</h2>
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
     <NoidaSector3Demandbook/>
     <AmenitiesSector16Noida/>
     <NewEvents/>
     <FaqNoidaSector16/>
     <Testimonials/>
     <NearcenterNoidaSector3/>
     <Lets/>
    </>
  );
};

export default NoidaSector3
