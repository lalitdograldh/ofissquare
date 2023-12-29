import React from 'react'
import Ellipse1 from "../images/Contact.png";
import ContactLady from "../images/contactlady.png";
import Com from "../images/com.png";
import Call from "../images/call.png";
import Email from "../images/email.png";
import Home from "../images/home.png";
import Map from "../images/map.png";
import Time from "../images/time.png";
const Contact = () => {
   return (
      <>
         <section className="passion">
            <div className="container">
               <div className="row">
                  <div className="col-md-12">
                     <h1>Contact Us</h1>
                     <img src={Ellipse1} alt={Ellipse1} />
                  </div>
               </div>
            </div>
         </section>
         <section className="conformmain">
            <div className="container">
               <div className="row">
                  <div className="col-md-7">
                     <h2>Drop us a note and we’ll<br /> bein touch shortly!</h2>
                     <p className="black">Please take a minute to outline your requirement.<br /> Our solutions expert will be in touch shortly.</p>
                     {/* <form>
                     <p className="half">
                        First Name
                        <input type="text" name=""/>
                     </p>
                     <p className="half">
                        Last Name
                        <input type="text" name=""/>
                     </p>
                     <p className="half">
                        Company
                        <input type="text" name=""/>
                     </p>
                     <p className="half">
                        Phone Number
                        <input type="text" name=""/>
                     </p>
                     <p className="full">
                        How can we help?
                        <textarea></textarea>
                     </p>
                     <p className="full">
                        <button className="link w-100 text-center">Submit</button>
                     </p>
                  </form> */}
                     <script type="text/javascript" src="https://campaigns.zoho.in/js/zc.iframe.js"></script>
                     <iframe frameborder="0" id="iframewin" width="100%" height="100%" src="https://ofis-zc1.maillist-manage.in/ua/Optin?od=1a1e3db317372&zx=1df9653ea4&lD=11a3db2ca2ef5a21&n=11699f74da04217&sD=11a3db2ca2ef5a33"></iframe>
                  </div>
                  <div className="col-md-5">
                     <img src={ContactLady} />
                  </div>
               </div>
            </div>
         </section>
         <div className="container line">
            <div className="row">
               <div className="col-md-12">
                  <span></span>
               </div>
            </div>
         </div>
         <section className="osuc">
            <div className="container">
               <div className="row align-items-center">
                  <div className="col-md-4">
                     <h2 className="mb-0">OFIS SQUARE<br /> in Your City</h2>
                  </div>
                  <div className="col-md-4">
                     <ul>
                        <li>
                           <h5>Support</h5>
                           <span>From our expert team</span>
                        </li>
                        <li><img src={Com} /></li>
                     </ul>
                     <div className="box">
                        <div className="data">
                           <span><img src={Call} /></span>
                           <p>Phone</p>
                           <a href="tel:80098765432">Finance: 800.98.76.5432</a>
                           <a href="tel:(+41)-888.22.333">Operation: (+41)-888.22.333</a>
                        </div>
                        <div className="data">
                           <span><img src={Email} /></span>
                           <p>Email</p>
                           <a href="mailto:info@example.com">info@example.com</a>
                        </div>
                     </div>
                  </div>
                  <div className="col-md-4">
                     <ul>
                        <li>
                           <h5>Address</h5>
                           <span>To visiting our company</span>
                        </li>
                        <li><img src={Home} /></li>
                     </ul>
                     <div className="box">
                        <div className="data">
                           <span><img src={Map} /></span>
                           <p>Address</p>
                           <a href="tel:80098765432">280 Granite Run Drive Suite Hobert, LA 90010, USA.</a>
                        </div>
                        <div className="data">
                           <span><img src={Time} /></span>
                           <p>Off. Hours</p>
                           <a href="mailto:info@example.com">Mon - Sat: 9am to 6pm</a>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>

         <iframe className="conmap" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.0752173919436!2d77.37089337560887!3d28.62750768430859!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce53972341851%3A0x25e800a3d3331592!2sOfis%20Square%20%7C%20Coworking%20in%20Sector-62%20Noida!5e0!3m2!1sen!2sin!4v1702531167186!5m2!1sen!2sin" width="600" height="450" allowfullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

      </>
   )
}

export default Contact