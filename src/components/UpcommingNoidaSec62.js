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
const UpcommingNoidaSec62 = () => {
    const itemsData = [
        {
           img:Group332,
           heading:'Fuel bar',
           desc:'where hand-picked teas, artisanal coffee, cookies, and fruit water create a well-stocked oasis of refreshment'
        },
        {
            img:Group11,
            heading:'Luxurious lounges',
            desc:'Indulge in opulent comfort at our lavish, sophisticated lounging spaces.'
         },
        {
            img:Group12,
            heading:'Mail & Package',
            desc:'Get mail and package support at our Community Desk—your convenience hub!'
         },
        {
            img:Group13,
            heading:'Phone booths',
            desc:'Private calls made easy: step into our soundproof phone booths.'
         },
        {
            img:Group14,
            heading:'Board rooms',
            desc:'Experience seamless presentations in our board rooms equipped with top-notch audio and video facilities.'
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
                 <h2>All inclusive amenities</h2>
                 <p>where gourmet coffee meets ample parking, ensuring worry-free operations for you and your team in style and comfort.</p>
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

export default UpcommingNoidaSec62