import React, { useEffect, useRef } from 'react';
import Isotope from 'isotope-layout';

const ALL_FILTER = "*";
const UI_FILTER = ".ui";
const WEBDEV_FILTER = ".webdev";
const APPDEV_FILTER = ".appdev";
const LOGO_DESIGN_FILTER = ".logo-design";

const filterButtons = [
  { label: "All", filter: ALL_FILTER },
  { label: "UI/UX", filter: UI_FILTER },
  { label: "Web Dev", filter: WEBDEV_FILTER },
  { label: "Mobile App", filter: APPDEV_FILTER },
  { label: "Logo Design", filter: LOGO_DESIGN_FILTER },
];

function Portfolio() {
  const gridRef = useRef(null);
  const isoRef = useRef(null);
  const [activeFilterIndex, setActiveFilterIndex] = React.useState(0);

  const handleFilterClick = (filterValue, index) => {
    const filterButtons = document.querySelectorAll(".filter-btn");
    Array.from(filterButtons).forEach((button) => button.classList.remove("active"));
  
    const btn = Array.from(filterButtons).find((button) => button.dataset.filter === filterValue);
    if (btn) {
      btn.classList.add("active");
      isoRef.current.arrange({ filter: filterValue });
      setActiveFilterIndex(index);
    }
  };

  useEffect(() => {
    isoRef.current = new Isotope(gridRef.current, { itemSelector: '.grid-item', layoutMode: 'fitRows' });
    isoRef.current.arrange({ filter: ALL_FILTER });
  }, []);

  const filterButtons = [
    { label: "All", filter: ALL_FILTER },
    { label: "UI/UX", filter: UI_FILTER },
    { label: "Web Dev", filter: WEBDEV_FILTER },
    { label: "Mobile App", filter: APPDEV_FILTER },
    { label: "Logo Design", filter: LOGO_DESIGN_FILTER },
  ];


  return (
    <>
      <div className="portfolio section" id="portfolio">
        <div className="background-bg">
          <div className="overlay overlay-sm">
            <img
              src="./img/shapes/half-circle.png"
              className="shape half-circle1"
              alt=""
            />
            <img
              src="./img/shapes/half-circle.png"
              className="shape half-circle2"
              alt=""
            />
            <img src="./img/shapes/square.png" className="shape square" alt="" />
            <img src="./img/shapes/wave.png" className="shape wave" alt="" />
            <img src="./img/shapes/circle.png" className="shape circle" alt="" />
            <img
              src="./img/shapes/triangle.png"
              className="shape triangle"
              alt=""
            />
            <img src="./img/shapes/x.png" className="shape xshape" alt="" />
          </div>
        </div>

        <div className="container">
          <div className="section-header">
            <h3 className="title" data-title="My works">Portfolio</h3>
          </div>

          <div className="section-body">
            <div className="filter">
              {filterButtons.map((btn, index) => (
                <button
                  key={index}
                  className={`filter-btn ${index === activeFilterIndex ? "active" : ""}`}
                  onClick={() => handleFilterClick(btn.filter, index)}
                  data-filter={btn.filter}
                >
                  {btn.label}
                </button>
              ))}
            </div>

            <div className="grid" ref={gridRef}>
              <div className="grid-item logo-design">
                <div className="gallery-image">
                  <img src="./img/portfolio/port1.jpg" alt="" />
                  <div className="img-overlay">
                    <div className="plus"></div>
                    <div className="img-description">
                      <h3>Logo Design</h3>
                      <h5>View Demo</h5>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid-item webdev">
                <div className="gallery-image">
                  <img src="./img/portfolio/port2.png" alt="" />
                  <div className="img-overlay">
                    <div className="plus"></div>
                    <div className="img-description">
                      <h3>Web Development</h3>
                      <h5>View Demo</h5>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid-item ui webdev">
                <div className="gallery-image">
                  <img src="./img/portfolio/port3.png" alt="" />
                  <div className="img-overlay">
                    <div className="plus"></div>
                    <div className="img-description">
                      <h3>Web Design</h3>
                      <h5>View Demo</h5>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid-item ui">
                <div className="gallery-image">
                  <img src="./img/portfolio/port4.png" alt="" />
                  <div className="img-overlay">
                    <div className="plus"></div>
                    <div className="img-description">
                      <h3>UI / UX Design</h3>
                      <h5>View Demo</h5>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid-item logo-design">
                <div className="gallery-image">
                  <img src="./img/portfolio/port5.jpg" alt="" />
                  <div className="img-overlay">
                    <div className="plus"></div>
                    <div className="img-description">
                      <h3>Logo Design</h3>
                      <h5>View Demo</h5>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid-item appdev">
                <div className="gallery-image">
                  <img src="./img/portfolio/port6.jpg" alt="" />
                  <div className="img-overlay">
                    <div className="plus"></div>
                    <div className="img-description">
                      <h3>App Development</h3>
                      <h5>View Demo</h5>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid-item logo-design">
                <div className="gallery-image">
                  <img src="./img/portfolio/port7.jpg" alt="" />
                  <div className="img-overlay">
                    <div className="plus"></div>
                    <div className="img-description">
                      <h3>Logo Design</h3>
                      <h5>View Demo</h5>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid-item appdev ui">
                <div className="gallery-image">
                  <img src="./img/portfolio/port8.png" alt="" />
                  <div className="img-overlay">
                    <div className="plus"></div>
                    <div className="img-description">
                      <h3>App Development</h3>
                      <h5>View Demo</h5>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid-item ui webdev">
                <div className="gallery-image">
                  <img src="./img/portfolio/port9.png" alt="" />
                  <div className="img-overlay">
                    <div className="plus"></div>
                    <div className="img-description">
                      <h3>Web Design</h3>
                      <h5>View Demo</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="more-folio">
              <a href="#" className="btn">More Folio</a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Portfolio
