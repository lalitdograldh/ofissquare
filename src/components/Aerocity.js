import React from "react";
import AerocityUnion from "../images/Aerocity-union.png";
import AerocityGroup from "../images/Aerocity-Group.png";
import AerocityGroup1 from "../images/Aerocity-Group (1).png";
import star from "../images/star.png";
import sq from "../images/sq.png";
import desk from "../images/desk.png";
import Demandbook from './Demandbook'
import Testimonials from './Testimonials'
import Lets from './Lets'
import UpcomingfindSpace from "./UpcomingfindSpace";
import NewEvents from "./NewEvents";
import Frequently from "./Frequently";
import Nearcenter from "./Nearcenter";
const Aerocity = () => {
  const itemsData = [
    {
      img: AerocityUnion,
      desc: "Ground Floor and First Floor, Worldmark 1, Asset Area 11, Aerocity, Hospitality District, Indira Gandhi International Airport, NH-8, New Delhi, South Delhi, Delhi, 110037.",
    },
    {
      img: AerocityGroup,
      desc: "Popular restaurants, retail hubs and 5-star business hotels - within 1 km; Metro Station - 0.3 km; Indira Gandhi International Airport - 2.8 kms",
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
      <div className="banner">
        <div className="container">
          <div className="row">
            <h1>
              Coworking Spaces
              <br />
              <span>Aerocity</span>
            </h1>
          </div>
        </div>
      </div>
      <section className="Aerocity">
        <div className="container">
           <div className="row">
              <div className="col-md-7">
                 <h2>Ofis Square in Aerocity</h2>
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
     <UpcomingfindSpace/>
     <NewEvents/>
     <Frequently/>
     <Testimonials/>
     <Nearcenter/>
     <Lets/>
    </>
  );
};

export default Aerocity;
