import React from 'react'
import Rectangle46 from "../images/NS3Rectangle32.jpg";
import Rectangle48 from "../images/sector3Rectangle48.jpg";
import Rectangle50 from "../images/sector3Rectangle50.jpg";
import Rectangle79 from "../images/sector3Rectangle79.jpg";
import Group332 from "../images/Group 33 (2).png";
import Group11 from "../images/Group11.png";
import Group12 from "../images/Group12.png";
import Group13 from "../images/Group13.png";
import Group14 from "../images/Group14.png";
import Group15 from "../images/Group15.png";
const AmenitiesSector16Noida = () => {
    const itemsData = [
        {
           img:Group332,
           heading:'Board rooms',
           desc:'Experience seamless presentations in our board rooms equipped with top-notch audio and video facilities.'
        },
        {
            img:Group11,
            heading:'Video & Phone booths',
            desc:'Private calls made easy: step into our soundproof phone booths.'
         },
        {
            img:Group12,
            heading:'Visitor management',
            desc:'Welcome guests effortlessly with seamless assistance and complimentary WiFi access.'
         },
        {
            img:Group13,
            heading:'Mail & Package',
            desc:'Get mail and package support at our Community Desk—your convenience hub!'
         },
        {
            img:Group14,
            heading:'Gourmet Delights',
            desc:'a well-stocked haven of refreshment featuring selected teas, artisanal coffee, cookies, and fruit water.'
         },
        {
            img:Group15,
            heading:'Secure Printing',
            desc:'Our Secure Printing Solutions Safeguard Your Documents, Offering Peace of Mind and Compliance.'
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
                 <h2>All-inclusive amenities</h2>
                 <p>From gourmet coffee to spacious parking, OFIS SQUARE, Noida Sector 3,  offers amenities that help you and your teams operate without worries.</p>
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

export default AmenitiesSector16Noida