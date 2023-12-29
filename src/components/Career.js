import React from 'react'
import Ellipse1 from "../images/Contact.png";
import ContactLady from "../images/contactlady.png";
const Contact = () => {
   return (
      <>
         <section className="passion">
            <div className="container">
               <div className="row">
                  <div className="col-md-12">
                     <h1>Careers</h1>
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

      </>
   )
}

export default Contact