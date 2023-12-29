import React from 'react'
import Rectangle46 from "../images/Rectangle46.png";
import Rectangle48 from "../images/Rectangle48.png";
import Rectangle50 from "../images/Rectangle50.png";
import Rectangle79 from "../images/Rectangle79.png";
import Group332 from "../images/Group 33 (2).png";
import Group11 from "../images/Group11.png";
import Group12 from "../images/Group12.png";
import Group13 from "../images/Group13.png";
import Group14 from "../images/Group14.png";
import Group15 from "../images/Group15.png";
const AmenitiesMgRoad = () => {
    const itemsData = [
        {
           img:Group332,
           heading:'Conference rooms',
           desc:'Unlock productivity in Ofis Squares premier conference rooms - where collaboration meets comfort effortlessly.'
        },
        {
            img:Group11,
            heading:'Cafetaria & entertainment zone',
            desc:'Relax in our vibrant cafetaria and unwind in the lively entertainment zone.'
         },
        {
            img:Group12,
            heading:'Oasis of refreshment',
            desc:'Where hand-picked teas, artisanal coffee, cookies, and fruit water create a well-stocked oasis of refreshment'
         },
        {
            img:Group13,
            heading:'Board rooms',
            desc:'Experience seamless presentations in our board rooms equipped with top-notch audio and video facilities.'
         },
        {
            img:Group14,
            heading:'Phone booths',
            desc:'Private calls made easy: step into our soundproof phone booths.'
         },
        {
            img:Group15,
            heading:'Visitor management',
            desc:'Welcome guests effortlessly with seamless assistance and complimentary WiFi access.'
         },
      ];
  return (
    <>
        <div className="upcoming findSpace">
          <div className="container">
           <div className="row align-items-center">
            <div className="col-md-6">
                <ul className="imgal">
                   <li>
                      <figure className="line-top">
                         <span>
                          <img src={Rectangle46}/>
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
                          <img src={Rectangle50}/>
                         </span>
                      </figure>
                      <figure className="line-bottom">
                         <span>
                          <img src={Rectangle79}/>
                         </span>
                      </figure>
                   </li>
                </ul>
             </div>
              <div className="col-md-6 amenities">
                 <h2>All-inclusive amenities asdf</h2>
                 <p>From gourmet coffee to spacious parking, COWRKS Aerocity offers amenities that help you and your teams operate without worries.</p>
                 <ul className="text">
                    {itemsData.map((item, index) => (
                        <li key={index}>
                         <div className="box1">
                           <h5><span><img src={item.img}/></span> {item.heading}</h5>
                            <p>{item.desc}</p>
                         </div>
                        </li>
                    ))}
                 </ul>
              </div>
            </div>
          </div>
     </div>
    </>
  )
}

export default AmenitiesMgRoad