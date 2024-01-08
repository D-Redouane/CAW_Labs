import React, { useEffect, useRef } from 'react';
import Isotope from 'isotope-layout';

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

  const ALL_FILTER = "*";
  // const UI_FILTER = ".ui";
  const WEBDEV_FILTER = ".webdev";
  const APPDEV_FILTER = ".appdev";
  // const LOGO_DESIGN_FILTER = ".logo-design";

  const filterButtons = [
    { label: "All", filter: ALL_FILTER },
    // { label: "UI/UX", filter: UI_FILTER },
    { label: "Web Dev", filter: WEBDEV_FILTER },
    { label: "Mobile App", filter: APPDEV_FILTER },
    // { label: "Logo Design", filter: LOGO_DESIGN_FILTER },
  ];

  const portfolioItems = [
    // { 
    //   category: 'logo-design', 
    //   imageSrc: './img/portfolio/port1.jpg', 
    //   title: 'Logo Design',
    //   builtwith: 'Adobe XD',
    //   class:"fab fa-github" ,
    //   link:"https://www.github.com" 
    // },
    { 
      category: 'webdev', 
      imageSrc: './img/portfolio/viva.jpg', 
      title: 'Viva API' , 
      builtwith: 'Laravel (Lumen)', 
      class:"fab fa-github" ,
      link:"https://github.com/D-Redouane/vivapp" 
    },
    { 
      category: 'appdev', 
      imageSrc: './img/portfolio/viva-app.jpg', 
      title: 'Viva Application' , 
      builtwith: 'Flutter', 
      class:"fab fa-github" ,
      link:"https://github.com/D-Redouane/flutter_vivapp" 
    },
    { 
      category: 'webdev', 
      imageSrc: './img/portfolio/portfolio.jpg', 
      title: 'Portfoilo' , 
      builtwith: 'React bootstrap jquery swiper', 
      class:"fab fa-github" ,
      link:"https://github.com/D-Redouane/CAW_Labs/tree/main/miniproject" 
    },
    { 
      category: 'webdev', 
      imageSrc: './img/portfolio/nticship.jpg', 
      title: 'NTICShip', 
      builtwith: 'Laravel vuejs vuex', 
      class:"fab fa-github" ,
      link:"https://github.com/nticship/nticship" 
    },
    { 
      category: 'webdev', 
      imageSrc: './img/portfolio/chatinit.jpg', 
      title: 'Chat Ui', 
      builtwith: 'Html Css Js', 
      class:"fab fa-github" ,
      link:"https://github.com/D-Redouane/ChatInit" 
    },
    // { 
    //   category: 'logo-design', 
    //   imageSrc: './img/portfolio/port7.jpg', 
    //   title: 'Logo Design', 
    //   builtwith: 'Adobe XD', 
    //   class:"fab fa-github" 
    // },
    // { 
    //   category: 'appdev ui', 
    //   imageSrc: './img/portfolio/port8.png', 
    //   title: 'App Development', 
    //   builtwith: 'Adobe XD', 
    //   class:"fab fa-github" 
    // },
    // { 
    //   category: 'ui webdev', 
    //   imageSrc: './img/portfolio/port9.png', 
    //   title: 'Web Design', 
    //   builtwith: 'Adobe XD', 
    //   class:"fab fa-github," 
    // },
  ];
  

  return (
    <>
      <div className="portfolio section" id="Portfolio">
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
              {portfolioItems.map((item, index) => (
                <div key={index} className={`grid-item ${item.category}`}>
                  <div className="gallery-image">
                    <img src={item.imageSrc} alt="" />
                    <div className="img-overlay">
                      {item.link?<i className={item.class+" preview-icon"} onClick={() => window.open(item.link, '_blank')} style={{cursor:'alias'}}></i>:null}
                      <div className="img-description">
                        <h3>{item.title}</h3>
                        <h5>{item.builtwith}</h5>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* <div className="more-folio">
              <a href="#" className="btn">More Folio</a>
            </div> */}
            
          </div>
        </div>
      </div>
    </>
  )
}

export default Portfolio
