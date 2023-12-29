import React from 'react'
import Rectangle30 from "../images/Rectangle30.png";
import Rectangle31 from "../images/Rectangle31.png";
import Rectangle32 from "../images/Rectangle32.png";
const NewEvents = () => {
  return (
    <>
     <section className="news Events ">
          <div className="container">
            <div className="row">
                <div className="col-md-12 text-center">
                    <h2>Events at Aerocity</h2>
                    <p>Events that help you and your people refresh your mind, body and spirit while allowing you to network and grow.</p>
                    <ul>
                        <li>
                            <div className="box">
                                <figure>
                                    <span>
                                        <img src={Rectangle30}/>
                                    </span>
                                </figure>
                                <div className="text">
                                    <p className="info"><i className="fa fa-calendar" aria-hidden="true"></i>Fri jul 12 2019</p>
                                    <p className="info"><i className="fa fa-clock-o" aria-hidden="true"></i>16:30-17:30</p>
                                    <h5>French Fries Day</h5>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do incididunt ut labore.</p>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="box">
                                <figure>
                                    <span>
                                        <img src={Rectangle31}/>
                                    </span>
                                </figure>
                                <div className="text">
                                    <p className="info"><i className="fa fa-calendar" aria-hidden="true"></i>Fri jul 12 2019</p>
                                    <p className="info"><i className="fa fa-clock-o" aria-hidden="true"></i>16:30-17:30</p>
                                    <h5>French Fries Day</h5>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do incididunt ut labore.</p>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="box">
                                <figure>
                                    <span>
                                        <img src={Rectangle32}/>
                                    </span>
                                </figure>
                                <div className="text">
                                    <p className="info"><i className="fa fa-calendar" aria-hidden="true"></i>Fri jul 12 2019</p>
                                    <p className="info"><i className="fa fa-clock-o" aria-hidden="true"></i>16:30-17:30</p>
                                    <h5>French Fries Day</h5>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do incididunt ut labore.</p>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
          </div>
     </section>
    </>
  )
}

export default NewEvents