function HireMe() {

  const HireMeData = { 
    icon: "fab fa-linkedin-in",
    text: "Linkedin",
    link: "https://www.linkedin.com/in/redouane-daddiouamer-7429b42a3/"
  };


  return (
    <>
      <div className="hireme" id="HireMe">
        <div className="container">
          <h3 className="title">Let's talk about a project</h3>
          <p className="text">
            I'm eager to learn more about your ideas and requirements. 
            Together, we can create something exceptional. Feel free to get in touch, 
            and let's bring your vision to life!
          </p>
          <a href={HireMeData.link} className="btn">Hire me</a>
        </div>
      </div>
    </>
  )
}

export default HireMe
