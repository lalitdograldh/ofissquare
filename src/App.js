import React from 'react'
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
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
import NoidaSector16 from './components/NoidaSector16';
import CoworkingspacesGurugram from './components/CoworkingspacesGurugram';
import SonaRoadDemandbook from './components/SonaRoadDemandbook';
import Contact from './components/Contact';
import Explore from './components/Explore';
import Career from './components/Career';

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
        <Route path="/NoidaSector16" Component={NoidaSector16}/>
        <Route path="/CoworkingspacesGurugram" Component={CoworkingspacesGurugram}/>
        <Route path="/Explore/:id" Component={Explore}/>
        <Route path="/Career/" Component={Career}/>
        <Route path="/NearBySectorSonaRoadGurugram/" Component={NearBySectorSonaRoadGurugram}/>
        <Route path="/SonaRoadDemandbook/" Component={SonaRoadDemandbook}/>
        
      </Routes>
      <Footer/>
      </>
    </Router>
  )
}

export default App
 