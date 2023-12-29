import React from 'react'
import aboutbanner from "../images/aboutbanner.png";
import AboutOperations from './AboutOperations';
import AboutWorkspaces from './AboutWorkspaces';
import AboutWorkEnvironments from './AboutWorkEnvironments';
import AboutTrustedCompanies from './AboutTrustedCompanies';
import Lets from './Lets';
const About = () => {
    
  return (
    <>
    <section className="passion">
         <div className="container">
            <div className="row">
               <div className="col-md-12">
                  <h1>Passion to Create Inspirational<br/> Workspace Solutions</h1>
                  <img src={aboutbanner} alt='aboutbanner'/>
               </div>
            </div>
         </div>
      </section>
      <div className="redefinesuccess">
         <div className="container">
            <div className="row align-items-center">
               <div className="col-md-5">
                  <h2 className="mb-0">Redefine success in terms of what makes you happy</h2>
               </div>
               <div className="col-md-7">
                  <p className="mb-0 fw5">Begin each day with the best work ambience, great brews and an environment that breeds productivity. With flexible contract terms, whether in a shared space, a private cabin or a fully-customised floor, you will find the room to scale, and to be inspired.</p>
               </div>
            </div>
         </div>
      </div>
      <AboutOperations/>
      <div class="aboutvideo">
         <div class="container">
            <div class="row">
               <div class="col-md-12">
                  <iframe src="https://www.youtube-nocookie.com/embed/UeXvCgLN6nM?si=nr4ryMJZTorZy2sB&amp;start=3" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
               </div>
            </div>
         </div>
      </div>
      <AboutWorkspaces/>
      <AboutWorkEnvironments/>
      <AboutTrustedCompanies/>
      <Lets/>
    </>
  )
}

export default About