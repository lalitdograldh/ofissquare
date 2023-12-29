import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
const Wosquare = () => {
  return (
    <>
      <section className="wosquare">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h2>Why Ofis Square?</h2>
            </div>
          </div>
          <div className="row rev">
            <div className="col-md-6">
              <div className="max-width">
                <Tabs>
                  <TabList className="nav">
                    <Tab className="nav-item"><a className="nav-link">Location</a></Tab>
                    <Tab className="nav-item"><a className="nav-link">Flexibility</a></Tab>
                    <Tab className="nav-item"><a className="nav-link">Design</a></Tab>
                    <Tab className="nav-item"><a className="nav-link">Experience</a></Tab>
                  </TabList>
                  <TabPanel className="tab-content tab-pane">
                    <h5>Expansive network</h5>
                    <p>
                      With four remarkable hubs spread across Delhi/NCR, 
                      we're strategically positioned to meet all your workplace requirements.
                    </p>
                    <h5>Easy access</h5>
                    <p>
                      Located in prime destinations, commuting to OFIS SQUARE is effortless, 
                      whether you prefer the metro or your own vehicle.
                    </p>
                    <h5>Lively neighbourhoods</h5>
                    <p>
                      Stroll to your preferred restaurants, cafes, or fitness centers. 
                      Everything you require is right at your doorstep.
                    </p>
                  </TabPanel>
                  <TabPanel className="tab-pane">
                    <h5>Anywhere workspace</h5>
                    <p>
                     As a member of any Ofis Square location, you gain exclusive access to all 
                     Ofis Square spaces across India. Simply use the Ofis Square app to book your spaces on-the-fly.
                    </p>
                    <h5>Scalable spaces</h5>
                    <p>
                     Adjust the number of desks you occupy seamlessly, scaling up or down to match your team size and evolving needs.
                    </p>
                    <h5>Simple contracts</h5>
                    <p>
                     We understand that your business is dynamic, which is why our contracts are designed to be flexible and straightforward.
                    </p>
                    
                  </TabPanel>
                  <TabPanel className="tab-pane">
                    <h5>Ergonomics</h5>
                    <p>
                      Your well-being is our top priority. That's why we've crafted meticulously designed workstations to ensure your comfort throughout the day.
                    </p>
                     <h5>Ambience</h5>
                    <p>
                      From expansive windows to vibrant artworks, our workspace interiors are curated to provide a soothing ambiance that sparks your creativity.
                    </p>
                    <h5>Nature's Embrace</h5>
                    <p>
                      Biophilia is at the heart of our workspace philosophy. You'll find lush greenery throughout our spaces, not only enhancing
                      air quality but also uplifting your spirits and fostering a healthier work environment.
                    </p>
                  </TabPanel>
                  <TabPanel className="tab-pane">
                    <h5>Exceptional 5-Star Hospitality</h5>
                    <p>
                     Our obsession with perfection shines through in every aspect of our spaces, offering meticulously maintained environments, 
                     a superb member experience, and 24/7 access to delectable food and beverages.
                    </p>
                     <h5>Smart IoT Enabled</h5>
                    <p>
                      We've simplified technology for you. Encounter seamless and swift IT support, wireless AV conferencing, 
                      secure access control, and a host of other tech features.
                    </p>
                    <h5>Events and partnerships</h5>
                    <p>
                      Connect with others, discover new things, or just have fun. At Ofis Square, 
                      you'll get special access to handpicked events, from learning opportunities to enjoyable entertainment.
                    </p>
                  </TabPanel>
                </Tabs>
              </div>
            </div>
            <div className="col-md-6">
              <figure className="line-bottom">
                <span>
                  {/* <img src="images/Maskgroup.png" /> */}
                  <img src="images/OfisSquareentrance.jpeg" />
                </span>
              </figure>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Wosquare;
