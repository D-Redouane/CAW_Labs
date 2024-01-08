import NavBar from './components/nav-bar';
import Footer from './components/footer';

import Home from './sections/home';
import About from './sections/about';
import Contacts from './sections/contacts';
import HireMe from './sections/hire_me';
import Portfolio from './sections/portfolio';
import Services from './sections/services';
import Records from './sections/records';
import Blog from './sections/blogs';
import Testimonials from './sections/testimonials';

import Skills from './sections/subsection/skills';
import Experience from './sections/subsection/experience';

import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';

function App() {

  const [isServicesRoute, setIsServicesRoute] = useState(false);

  useEffect(() => {
    const currentPath = window.location.pathname;
    setIsServicesRoute(currentPath === '/Services');
  }, []);

  const isSinglePage = false

  return (
    <>
      <NavBar LandingPage={isSinglePage} />

      {isSinglePage ? (
        <>
          <Home />
          <About />
          <Skills />
          <Experience />
          <Records />
          <Portfolio />
          <Blog />
          <Services />
          <Testimonials />
          <HireMe />
          <Contacts />

          <Footer ServicesRoutePage={isServicesRoute} LandingPage={isSinglePage} />
        </>
      ) : (
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Skills" element={<><Skills /><Records /></>} />
            <Route path="/Experience" element={<Experience />} />
            <Route path="/Blogs" element={<Blog />} />
            <Route path="/Contact" element={<Contacts />} />
            <Route path="/Testimonials" element={<Testimonials />} />
            <Route path="/Services" element={<Services />} />
            <Route path="/Portfolio" element={<><Portfolio /><Records /><Blog /></>} />
            <Route path="/HireMe" element={<HireMe />} />
          </Routes>

          <Footer ServicesRoutePage={isServicesRoute} LandingPage={isSinglePage} />
        </Router>
      )}
    </>
  );
}

export default App;
