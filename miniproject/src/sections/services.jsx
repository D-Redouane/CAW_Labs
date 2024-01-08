function Services() {
  const ServicesData = [
    {
      titleText: 'From front-end magic to back-end mastery, I bring your ideas to life through seamless and efficient full-stack development. Your vision, my code.',
      services: [
        // {
        //   id:'webdesign',
        //   title: 'Web Design',
        //   text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam est suscipit itaque?',
        //   link: '',
        //   shape: './img/shapes/points3.png',
        //   appicon:'./img/design-icon.png',
        //   datacardTopText: 'UI/UX'
        // },
        {
          id:'webdev',
          title: 'Web Development',
          text: 'Elevate your online presence with our web development expertise. From HTML, CSS, and Vanilla JS to advanced frameworks like VueJS and ReactJS. Database solutions with MySQL and Oracle. Backend proficiency in PHP and Laravel for robust applications.',
          link: '',
          appicon:'./img/code-icon.png',
          // shape: './img/shapes/points3.png',
          datacardTopText: 'Code'
        },
        {
          id:'appdev',
          title: 'App Development',
          text: 'Crafting seamless mobile experiences with Dart and Flutter. Elevate your business with intuitive and feature-rich applications.',
          link: '',
          appicon:'./img/app-icon.png',
          shape: './img/shapes/points3.png',
          datacardTopText: 'App'
        },
        // {
        //   id:'appdesign',
        //   title: 'App Design',
        //   text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam est suscipit itaque?',
        //   link: '',
        //   appicon:'./img/app-icon.png',
        //   shape: './img/shapes/points3.png',
        //   datacardTopText: 'App'
        // },
        // {
        //   id:'marketing',
        //   title: 'Web Design',
        //   text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam est suscipit itaque?',
        //   link: '',
        //   shape: './img/shapes/points3.png',
        //   appicon:'./img/design-icon.png',
        //   datacardTopText: 'UI/UX'
        // },
        // {
        //   id:'ui',
        //   title: 'Web Design',
        //   text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam est suscipit itaque?',
        //   link: '',
        //   shape: './img/shapes/points3.png',
        //   appicon:'./img/design-icon.png',
        //   datacardTopText: 'UI/UX'
        // },
      ]
    }
  ];

  return (
    <>
      <div className="services section" id="Services">
        <div className="container">
          {ServicesData.map((element, index) => (
            <div key={index}>
              <div className="section-header">
                <h3 className="title" data-title="What I Do">Services</h3>
                <p className="text">
                  {element.titleText}
                </p>
              </div>
              <div className="cards">
                {element.services.map((service, index) => (
                  <div className="card-wrap" key={index} id={service.id}>
                    <img
                      src={service.shape}
                      className="points points2 points-sq"
                      alt=""
                    />
                    <div className="card" data-card={service.datacardTopText}>
                      <div className="card-content z-index">
                        <img src={service.appicon} className="icon" alt="" />
                        <h3 className="title-sm">{service.title}</h3>
                        <p className="text">
                          {service.text}
                        </p>
                        {/* <a href="#" className="btn small">Read more</a> */}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Services;
