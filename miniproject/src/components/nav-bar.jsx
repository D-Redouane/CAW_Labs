import React from 'react';

const NavBar = ({LandingPage}) => {
  const navbar = React.useRef();
  const links = document.querySelectorAll(".links a");

  if (links) {
     links.forEach((link) =>
       link.addEventListener("click", () => {
         if (navbar) toggleMenu();
       })
     );
   }

  const toggleMenu = () => {
    navbar.current.classList.toggle("open");
    document.body.classList.toggle("stop-scrolling");
  }

  const NavData={
    // logo:"./img/logo.png",
    logo:"./img/logo2.png",

    navButtons:[
      {
        link:"",
        text:"Home"
      },
      {
        link:"Services",
        text:"Services"
      },
      // {
      //   link:"Blogs",
      //   text:"Blogs"
      // },
      {
        link:"Experience",
        text:"Experiences"
      },
      {
        link:"Skills",
        text:"Skills"
      },
      {
        link:"Portfolio",
        text:"Portfolio"
      },
      {
        link:"About",
        text:"About"
      },
      {
        link:"Testimonials",
        text:"Testimonials"
      },
      {
        link:"Contact",
        text:"Contact"
      },
      {
        link:"HireMe",
        text:"HireMe",
        class:"active"
      },
    ]
  }

  return (
    <>
      <nav ref={navbar}>
        <div className="container">
          <div className="logo">
            <img src={NavData.logo} alt=""/>
          </div>

          <div className="links">
            <ul>
            {NavData.navButtons.map((element) => {
              return <li key={element.text}><a href={LandingPage?"#"+element.link:"/"+element.link} className={element.class}>{element.text}</a></li>;
            })}
            </ul>
          </div>

          <div className="hamburger-menu" onClick={toggleMenu}>
            <div className="bar"></div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
