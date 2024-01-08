import React, { useRef } from 'react';

function Footer({ LandingPage,ServicesRoutePage }) {
  // const footerInputRef = useRef(null);

  // const handleFocus = () => {
  //   footerInputRef.current.classList.add("focus");
  // };

  // const handleBlur = () => {
  //   if (footerInputRef.current.value !== "") return;
  //   footerInputRef.current.classList.remove("focus");
  // };

  const aboutText = `First-year Master's student in Technology Sciences of Information and Communication (STIC), passionate by computer science. My goal is to deepen my skills in this field constantly and evolving`;

  const linksData = [
    {
      title: "Links",
      items: [
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
      ],
    },
  ];

  const MyAccounts = [
    { 
      icon: "fab fa-linkedin-in",
      text: "Linkedin",
      link: "https://www.linkedin.com/in/redouane-daddiouamer-7429b42a3/"
    },
    { 
      icon: "fab fa-github",
      text: "Github",
      link: "https://github.com/D-Redouane"
    },
    {
      icon: "fa-brands fa-stack-overflow",
      text: "StackOverflow",
      link: "https://stackoverflow.com/users/19170540/redouane"
    },
    {
      icon: "fa-brands fa-upwork",
      text: "UpWork",
      link: "https://stackoverflow.com/users/19170540/redouane"
    },
    { 
      icon: "fab fa-gitlab",
      text: "Gitlab",
      link: "https://gitlab.com/D-Redouane"
    },
    {
      icon: "fa-brands fa-telegram",
      text: "Telegram",
      link: "https://t.me/DRedouane"
    },
      
  ];

  const servicesData = [
    // { text: "Web Design", link: "#webdesign" },
    { text: "Web Dev", link: "#webdev" },
    { text: "App Dev", link: "#appdev" },
    // { text: "App Design", link: "#appdesign" },
    // { text: "Marketing", link: "#marketing"},
    // { text: "UI Design", link: "#ui" },
  ];

  const followMe = [
    {
      icon: "fab fa-facebook-f",
      link: "https://web.facebook.com/DRedouane0"
    },
    {
      icon: "fab fa-x-twitter",
      link: "https://twitter.com/d_redouane0"
    },
    {
      icon: "fab fa-instagram",
      link: "https://www.instagram.com/redouane__d"
    },
  ];

  return (
    <>
      <footer className="footer">
        <div className="container">
          <div style={{justifyContent:'space-evenly',display:'flex'}}>
            
            <div className="grid-4-col footer-about" style={{ marginLeft: 'auto', marginRight: 'auto',maxWidth:'25rem' }}>
              <h3 className="title-sm">About</h3>
              <p className="text">{aboutText}</p>
            </div>

            {linksData.map((element, index) => (
              <div className="grid-4-col footer-links" key={index} style={{ marginLeft: 'auto', marginRight: 'auto' }}>
                <h3 className="title-sm">{element.title}</h3>
                <ul>
                  {element.items.map((item, itemIndex) => (
                    <li key={itemIndex}>
                      <a href={LandingPage?"#"+item.link:"/"+item.link}>{item.text}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div className="grid-4-col footer-links" style={{ marginLeft: 'auto', marginRight: 'auto' }}>
              <h3 className="title-sm">My Accounts</h3>
              <ul>
                {MyAccounts.map((element, index) => (
                  <li key={index}>
                    <a href={element.link}>
                      <i className={element.icon} style={{ padding: '0.5rem' }}></i>
                      <span>{element.text}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {ServicesRoutePage || LandingPage ? (
            <div className="grid-4-col footer-links" style={{ marginLeft: 'auto', marginRight: 'auto' }}>
              <h3 className="title-sm">Services</h3>
              <ul>
                {servicesData.map((item, itemIndex) => (
                  <li key={itemIndex}>
                    <a href={item.link}>{item.text}</a>
                  </li>
                ))}
              </ul>
            </div>
            ):null}

            {/* {newsletterData.map((element, index) => (
              <div className="grid-4-col footer-newstletter" key={index}>
                <h3 className="title-sm">{element.title}</h3>
                <p className="text">{element.text}</p>
                <div className="footer-input-wrap">
                  <input
                    type="email"
                    className="footer-input"
                    placeholder="Email"
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    ref={footerInputRef}
                  />
                  <a href="#" className="input-arrow">
                    <i className="fas fa-angle-right"></i>
                  </a>
                </div>
              </div>
            ))} */}

          </div>

          <div className="bottom-footer">
            <div className="copyright">
                  <p className="text">
                  Copyright&copy;2024 All rights reserved | Made by 
                  <span onClick={() => window.open('https://www.instagram.com/codderiot', '_blank')}> Codder </span>
                  </p>
            </div>

            
                <div className="followme-wrap">
                    <div className="followme">
                        <h3>Follow me</h3>
                        <span className="footer-line"></span>
                        <div className="social-media">
                          {followMe.map((element, index) => (
                              <a href={element.link} key={index}>
                                  <i className={element.icon}></i>
                              </a>
                            ))}
                        </div>
                    </div>

                    <div className="back-btn-wrap">
                        <a href="#" className="back-btn">
                              <i className="fas fa-chevron-up"></i>
                        </a>
                    </div>
              </div>
            
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
