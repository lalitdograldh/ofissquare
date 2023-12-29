import React from 'react'
import { Link } from 'react-router-dom';
import tweeter from "../images/tweeter.svg";
import facebook from "../images/facebook.svg";
import intagram from "../images/intagram.svg";
import social from "../images/social.svg";
const Footer = () => {
  return (
    <>
        <footer>
          <section className="ftop fbdr">
              <div className="container">
                  <div className="row justify-content-center">
                      <div className="col-md-6 text-center">
                          <h2 className="white mb-0">Subscribe To Our Newsletter</h2>
                          <p className="white">Subscribe to our newsletter list.</p>
                          <form>
                              <input type="text" name="" placeholder="Email Address"/>
                              <button className="link">Submit</button>
                          </form>
                      </div>
                  </div>
              </div>
          </section>
          <section className="fbottom fbdr">
              <div className="container">
                  <div className="row">
                      <div className="col-md-3">
                          <h5 className="white">Coworking Spaces</h5>
                          <Link to="/Sector62Noida">Coworking Space in Sector - 62 Noida</Link>
                          <Link to="/NoidaSector16">Coworking Space In Sector - 16 Noida</Link>
                          <Link to="/SonaRoadGurugram">Coworking Space in Sohna Road</Link>
                          <Link to="/MgRoadGurugram">Coworking Space in MG Road</Link>
                          {/* <Link to="/Aerocity">Coworking Space In Aerocity</Link>
                          <Link to="/Coworkingspaces">Coworking Space In Noida</Link>
                          <Link to="/CoworkingspacesGurugram">Coworking Space In Gurugram</Link> */}
                      </div>
                      <div className="col-md-3">
                          <h5 className="white">Locations</h5>
                          <a href="/Coworkingspaces">Noida</a>
                          <a href="/CoworkingspacesGurugram">Gurugram</a>
                          <a href="#">Delhi</a>
                          <a href="#">Mumbai</a>
                          <a href="#">Pune</a>
                          <a href="#">Bengaluru</a>
                          <a href="#">Ahmedabad</a>
                      </div>
                      <div className="col-md-3">
                          <h5 className="white">Useful Links</h5>
                          {/* <Link to="/About">About Us</Link>
                          <Link to="/Contact">Contact Us</Link>
                          <Link to="/Blogs">Blogs</Link> */}
                         <Link to="/News">The News</Link>
                          <Link to="/Career">Careers</Link>
                          <Link to="#">FAQs</Link>
                      </div>
                      <div className="col-md-3">
                          <h5 className="white">Follow us</h5>
                          <ul>
                              <li><Link to="#"><img src={tweeter}/></Link></li>
                              <li><Link to="#"><img src={facebook}/></Link></li>
                              <li><Link to="#"><img src={intagram}/></Link></li>
                              <li><Link to="#"><img src={social}/></Link></li>
                              <li><Link to="#"><img src={tweeter}/></Link></li>
                          </ul>
                      </div>
                  </div>
              </div>
          </section>
          <p className="white text-center copy">Copyright © 2023 ofissquare. All rights reserved.</p>
      </footer>
    </>
  )
}

export default Footer