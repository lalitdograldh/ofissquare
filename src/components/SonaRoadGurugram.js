import React from "react";
import AerocityUnion from "../images/Aerocity-union.png";
import AerocityGroup from "../images/Aerocity-Group.png";
import AerocityGroup1 from "../images/Aerocity-Group (1).png";
import star from "../images/star.png";
import sq from "../images/sq.png";
import desk from "../images/desk.png";
import Testimonials from './Testimonials'
import LetsNoidaSector62 from './LetsNoidaSector62'
import NewEvents from './NewEvents'
import FaqSohnaRoad from "./FaqSohnaRoad";
import AmenitiesSohna from "./AmenitiesSohna";
import NearBySectorSonaRoadGurugram from "./NearBySectorSonaRoadGurugram";
import SonaRoadDemandbook from "./SonaRoadDemandbook";
const SonaRoadGurugram = () => {
  const itemsData = [
    {
      img: AerocityUnion,
      desc: "4th floor, Block-1, VATIKA BUSINESS PARK, Badshahpur Sohna Rd Hwy, Vatika City, Block W, Sector 49, Gurugram, Haryana 122018",
    },
    {
      img: AerocityGroup,
      desc: "Popular Restaurants, Global enterprises, public and private sector business establishments - within 1.0 km",
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
      <div className="banner" id="sonaRoadGurugramBanner">
        <div className="container">
          <div className="row">
            <h1>
              Coworking Spaces
              <br />
              <span>Sona Road Gurugram</span>
            </h1>
          </div>
        </div>
      </div>
      <section className="Aerocity">
        <div className="container">
           <div className="row">
              <div className="col-md-7">
                 <h2>Ofis Square in  Sona Road Gurugram</h2>
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

     <SonaRoadDemandbook/>
     <AmenitiesSohna/>
     <NewEvents/>
     <FaqSohnaRoad/>
     <Testimonials/>
     <NearBySectorSonaRoadGurugram/>
     <LetsNoidaSector62/>
    </>
  );
};

export default SonaRoadGurugram;
