import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./assets/stylecss/Nav.css"
import './pages/Home.css'
import './assets/stylecss/about.css'
import './assets/stylecss/ModuleFeatures.css'
import './assets/stylecss/clients.css'
import'./assets/stylecss/Blog.css'
import './assets/stylecss/Demo.css'
import './assets/stylecss/ContactUs.css'





import Navbar from './component/Navber';
import Footer from './component/Footer';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import ModuleFeatures from './pages/ModuleFeatures';
import Clients from './pages/Clients';
import Blog from './pages/Blog';
import Demo from './pages/Demo';
import ContactUs from './pages/ContactUs';
import Clienticon from './pages/Clienticon';


function App() {
  return (
    <Router>

      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route  path="/AboutUs" element={<AboutUs  />} />
        <Route  path="/ModuleFeatures" element={<ModuleFeatures  />} />
        <Route  path="/Clients" element={<Clients  />} />
        <Route  path="/Blog" element={<Blog   />} />
        <Route  path="/Demo" element={<Demo   />} />
        <Route  path="/ContactUs" element={<ContactUs   />} />
        <Route  path="/Clienticon" element={<Clienticon   />} />

      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
