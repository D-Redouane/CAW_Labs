import '../assets/css/contact.css';

function Contacts() {
  const ContactsData = {
    text:`If you have any questions or just want to say hello, don't hesitate to reach out to me. I'd love to hear from you!`,
    title:'Get in touch',
    contacts:[
      { 
        icon: "fas fa-phone-alt",
        text: "+213666318833",
        link: "tel:+213666318833"
      },
      { 
        icon: "fas fa-map-marker-alt",
        text: "FMRF+V24, Ave de ALN, Ghardaia",
        link: "https://maps.app.goo.gl/t7Lev1nS27Q2jgMw9"
      },
      { 
        icon: "fas fa-envelope",
        text: "redouane.daddiouamer@hotmail.com",
        link: "mailto:redouane.daddiouamer@hotmail.com"
      },
      { 
        icon: "fab fa-linkedin-in",
        text: "Linkedin",
        link: "https://www.linkedin.com/in/redouane-daddiouamer-7429b42a3/"
      },
      // { 
      //   icon: "fab fa-github",
      //   text: "Github",
      //   link: "https://github.com/D-Redouane"
      // },
      // {
      //   icon: "fa-brands fa-stack-overflow",
      //   text: "StackOverflow",
      //   link: "https://stackoverflow.com/users/19170540/redouane"
      // },
      {
        icon: "fa-brands fa-upwork",
        text: "UpWork",
        link: "https://stackoverflow.com/users/19170540/redouane"
      },
      // { 
      //   icon: "fab fa-gitlab",
      //   text: "Gitlab",
      //   link: "https://gitlab.com/D-Redouane"
      // },
      {
        icon: "fas fa-paper-plane",
        text: "Telegram",
        link: "https://t.me/DRedouane"
      },
      // {
      //   icon: "fab fa-facebook-f",
      //   text: "Facebook",
      //   link: "https://web.facebook.com/DRedouane0"
      // },
      // {
      //   icon: "fab fa-x-twitter",
      //   text: "Twitter",
      //   link: "https://twitter.com/d_redouane0"
      // },
      // {
      //   icon: "fab fa-instagram",
      //   text: "Instagram",
      //   link: "https://www.instagram.com/redouane__d"
      // },

    ]

  }

  return (
    <>
      <div className="contact" id="Contact">
        <div className="background">
          <div className="map-bg"></div>
          <div className="contact-bg"></div>
        </div>
        <div className="container">
          <div className="contact-box">
            <div className="contact-info">
              <h3 className="title">{ContactsData.title}</h3>
              <p className="text">
                {ContactsData.text}
              </p>
              <div className="information-wrap">
              {ContactsData.contacts.map((element, index) => (
                <div className="information" key={index} onClick={() => window.open(element.link, '_blank')} style={{cursor: 'pointer'}}>
                  <div className="contact-icon">
                    <i className={element.icon}></i>
                  </div>
                  <p className="info-text">{element.text}</p>
                </div>
              ))}
              </div>
            </div>

            <div className="contact-form">
              <h3 className="title">Contact me</h3>
              <div className="row">
                <input
                  type="text"
                  className="contact-input"
                  placeholder="First Name"
                />
                <input
                  type="text"
                  className="contact-input"
                  placeholder="Last Name"
                />
              </div>

              <div className="row">
                <input type="text" className="contact-input" placeholder="Phone" />
                <input type="email" className="contact-input" placeholder="Email" />
              </div>

              <div className="row">
                <textarea
                  name="message"
                  className="contact-input textarea"
                  placeholder="Message"
                ></textarea>
              </div>
              <a href="#" className="btn">Send</a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contacts
