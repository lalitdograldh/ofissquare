import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header'
import About from './components/About'
import Blogs from './components/Blogs'
import Main from './components/Main'
import Footer from './components/Footer'
import Aerocity from './components/Aerocity';
import Coworkingspaces from './components/Coworkingspaces';
import Sector62Noida from './components/Sector62Noida';
import NearBySectorSonaRoadGurugram from './components/NearBySectorSonaRoadGurugram';
import SonaRoadGurugram from './components/SonaRoadGurugram';
import MgRoadGurugram from './components/MgRoadGurugram';
import CoworkingspacesGurugram from './components/CoworkingspacesGurugram';
import SonaRoadDemandbook from './components/SonaRoadDemandbook';
import Sector62NoidaDemandbook from './components/Sector62NoidaDemandbook';
import NearcenterMgRoadGurugram from './components/NearcenterMgRoadGurugram';
import NoidaSector3Demandbook from './components/NoidaSector3Demandbook';
import NearcenterNoidaSector3 from './components/NearcenterNoidaSector3';
import Contact from './components/Contact';
import Explore from './components/Explore';
import Career from './components/Career';
import NoidaSector3 from './components/NoidaSector3';

const App = () => {
  return (
    <Router>
     <>
      <Header/>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/About" Component={About}/>
        <Route path="/Blogs" Component={Blogs}/>
        <Route path="/Contact" Component={Contact}/>
        <Route path="/Aerocity" Component={Aerocity}/>
        <Route path="/Coworkingspaces" Component={Coworkingspaces}/>
        <Route path="/Sector62Noida" Component={Sector62Noida}/>
        <Route path="/SonaRoadGurugram" Component={SonaRoadGurugram}/>
        <Route path="/MgRoadGurugram" Component={MgRoadGurugram}/>
        <Route path="/NoidaSector3" Component={NoidaSector3}/>
        <Route path="/CoworkingspacesGurugram" Component={CoworkingspacesGurugram}/>
        <Route path="/Explore/:id" Component={Explore}/>
        <Route path="/Career/" Component={Career}/>
        <Route path="/NearBySectorSonaRoadGurugram/" Component={NearBySectorSonaRoadGurugram}/>
        <Route path="/SonaRoadDemandbook/" Component={SonaRoadDemandbook}/>
        <Route path="/Sector62NoidaDemandbook/" Component={Sector62NoidaDemandbook}/>
        <Route path="/NearcenterMgRoadGurugram/" Component={NearcenterMgRoadGurugram}/>
        <Route path="/NoidaSector3Demandbook/" Component={NoidaSector3Demandbook}/>
        <Route path="/NearcenterNoidaSector3/" Component={NearcenterNoidaSector3}/>
        
      </Routes>
      <Footer/>
      </>
    </Router>
  )
}

export default App
 