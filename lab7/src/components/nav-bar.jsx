import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';

import Home from '../sections/home';
import About from '../sections/about';
import Contacts from '../sections/contacts';
import HireMe from '../sections/hire_me';
import Portfolio from '../sections/portfolio';
import Services from '../sections/services';
import Testimonials from '../sections/testimonials';


function NavBar() {

  return (
    <>
     <nav>
          <div className="container">
               <div className="logo">
                    <img src="./img/logo.png" alt=""/>
               </div>

               

               <div className="links">
                    <ul>
                         <li><a href="/">Home</a></li>
                         <li><a href="/Services">Services</a></li>
                         <li><a href="/Portfolio">Portfolio</a></li>
                         <li><a href="/About">About</a></li>
                         <li><a href="/Testimonials">Testimonials</a></li>
                         <li><a href="/Contacts">Contacts</a></li>
                         <li><a href="/HireMe" className="active">Hire me<div><img src="../img/hire_me.png" alt=""/></div></a></li>
                    </ul>
               </div>
          </div>
     </nav>

     <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/Testimonials" element={<Testimonials />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/Portfolio" element={<Portfolio />} />
          <Route path="/HireMe" element={<HireMe />} />
        </Routes>
      </Router>
    </>
  )
}

export default NavBar
