import React from 'react'
import Rectangle46 from "../images/amenitiesRectangle46.jpeg";
import Rectangle50 from "../images/amenitiesRectangle50.JPG";
import Rectangle48 from "../images/amenitiesRectangle48.jpeg";
import Rectangle79 from "../images/amenitiesRectangle79.JPG";
import Group332 from "../images/Group 33 (2).png";
import Group11 from "../images/Group11.png";
import Group12 from "../images/Group12.png";
import Group13 from "../images/Group13.png";
import Group14 from "../images/Group14.png";
import Group15 from "../images/Group15.png";
const UpcommingNoidaSec62 = () => {
    const itemsData = [
        {
           img:Group332,
           heading:'Fuel bar',
           desc:'Well-stocked Fuel Bars with hand-picked selections of hot & cold beverages, cookies, healthy bars and munchies'
        },
        {
            img:Group11,
            heading:'Luxurious lounges',
            desc:'Insightfully built lounges designed to foster creativity and collaboration.'
         },
        {
            img:Group12,
            heading:'Mail & Package',
            desc:'Community Desk support with receiving of your mails and packages.'
         },
        {
            img:Group13,
            heading:'Phone booths',
            desc:'Soundproof phone booths for you to take calls in privacy.'
         },
        {
            img:Group14,
            heading:'Secure printing',
            desc:'Community Desk support with receiving of your mails and packages.'
         },
        {
            img:Group15,
            heading:'Visitor management',
            desc:'Seamless assistance for your visitors, with guest WiFi access.'
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
                          <img src={Rectangle46} alt='Rectangle46'/>
                         </span>
                      </figure>
                      <figure>
                         <span>
                          <img src={Rectangle48} alt='Rectangle48'/>
                         </span>
                      </figure>
                   </li>
                   <li>
                      <figure>
                         <span>
                          <img src={Rectangle50} alt='Rectangle50'/>
                         </span>
                      </figure>
                      <figure className="line-bottom">
                         <span>
                          <img src={Rectangle79} alt='Rectangle79'/>
                         </span>
                      </figure>
                   </li>
                </ul>
             </div>
              <div className="col-md-6 amenities">
                 <h2>All inclusive amenities</h2>
                 <p>From gourmet coffee to spacious parking, OFIS SQUARE, Noida Sector 62,  offers amenities that help you and your teams operate without worries.</p>
                 <ul className="text">
                    {itemsData.map((item, index) => (
                        <li key={index}>
                         <div className="box1">
                           <h5><span><img src={item.img} alt={`Icon ${index + 1}`}/></span> {item.heading}</h5>
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

export default UpcommingNoidaSec62