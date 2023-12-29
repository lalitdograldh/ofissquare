import React from 'react'
import Rectangle37 from '../images/Rectangle37.jpg';
import Rectangle38 from '../images/Rectangle38.jpg';
import Rectangle39 from '../images/Rectangle39.JPG';
import line from '../images/line.svg';

const itemsData = [
    {
      title: "Coworking Spaces",
      imgSrc: Rectangle37, // Use the imported variable
      lineImgSrc: line, // Use the imported variable
    },
    {
      title: "Managed Offices",
      imgSrc: Rectangle38, // Use the imported variable
      lineImgSrc: line, // Use the imported variable
    },
    {
      title: "Virtual Offices",
      imgSrc: Rectangle39, // Use the imported variable
      lineImgSrc: line, // Use the imported variable
    },
    
    // Add more data objects for additional items
  ];
const Workspaces = () => {
  return (
    <>
        <section className="workspaces">
         <div className="container">
            <div className="row">
               <div className="col-md-12 text-center">
                  <h2 className="white capitalize">Workspaces for <span className="orange">startups and corporates</span> at prime spot Flexible Workspaces for All</h2>
                  <ul>
                     {itemsData.map((item, index) => (
                     <li key={index}>
                        <div className="box">
                           <figure>
                              <span>
                                <img src={item.imgSrc} alt={item.title}/>
                              </span>
                           </figure>
                           <a href="#">
                            <h5>{item.title}</h5>
                            <span><img src={item.lineImgSrc} alt="Line" /></span>
                           </a>
                        </div>
                     </li>
                     ))}
                  </ul>
               </div>
            </div>
         </div>
      </section>
    </>
  )
}

export default Workspaces