import React from 'react'
import Rectangle46 from "../images/sonaRectangle46.PNG";
import Rectangle48 from "../images/sonabannerbg.jpg";
import Rectangle50 from "../images/sonaRectangle50.jpg";
import Rectangle79 from "../images/sonaRectangle79.jpg";
import Group332 from "../images/Group 33 (2).png";
import Group11 from "../images/Group11.png";
import Group12 from "../images/Group12.png";
import Group13 from "../images/Group13.png";
//import Group14 from "../images/Group14.png";
import Group15 from "../images/Group15.png";
const AmenitiesSohna = () => {
    const itemsData = [
        {
           img:Group332,
           heading:'Culinary Comfort',
           desc:'Indulge in delightful moments with our exquisite selection of delicious coffee, tea, and snacks.'
        },
        {
            img:Group11,
            heading:'Meeting rooms',
            desc:'Spacious, Comfortable Meeting Spaces, Tailored for Productivity, Inspiring Collaboration, and Seamless Presentations.'
         },
        {
            img:Group12,
            heading:'Guests Management',
            desc:'Make your guests feel right at ease with smooth service and free WiFi.'
         },
        {
            img:Group13,
            heading:'Terrace garden',
            desc:'Cherish your work breaks at Ofis Square in MG Road with a serene terrace garden.'
         },
      //   {
      //       img:Group14,
      //       heading:'Phone booths',
      //       desc:'Private calls made easy: step into our soundproof phone booths.'
      //    },
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
                 <p>From delicious coffee and snacks to spacious meeting rooms and flexible office hours, we've got you covered.</p>
                 <ul className="text">
                    {itemsData.map((item, index) => (
                        <li key={index}>
                         <div className="box1">
                           <h5><span><img src={item.img} alt='img'/></span> {item.heading}</h5>
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

export default AmenitiesSohna