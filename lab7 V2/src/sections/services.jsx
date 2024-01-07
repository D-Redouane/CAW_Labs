function Services() {

  const ServicesData = {
    titleText:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias,vero?',
    services:[
      {
        title:'Web Design',
        text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam est suscipit itaque?',
        link:'',
        image:'./img/shapes/points3.png',
        datacardTopText:'UI/UX'
      }
    ]
  }


  return (
    <>
      <div className="services section" id="services">
        <div className="container">
        {ServicesData.map((element,index)=>{
          <>
            <div className="section-header" key={index}>
              <h3 className="title" data-title="What I Do">Services</h3>
              <p className="text">
                {element.titleText}
              </p>
            </div>
            <div className="cards">
              {element.services.map((element,index)=>{
              <div className="card-wrap" key={index}>
                <img
                  src="./img/shapes/points3.png"
                  className="points points2 points-sq"
                  alt=""
                />
                <div className="card" data-card={element.datacardTopText}>
                  <div className="card-content z-index">
                    <img src="./img/app-icon.png" className="icon" alt="" />
                    <h3 className="title-sm">{element.title}</h3>
                    <p className="text">
                      {element.text}
                    </p>
                    <a href="#" className="btn small">Read more</a>
                  </div>
                </div>
              </div>
              })}


              <div className="card-wrap">
                <img
                  src="./img/shapes/points3.png"
                  className="points points1 points-sq"
                  alt=""
                />
                <div className="card" data-card="UI/UX">
                  <div className="card-content z-index">
                    <img src="./img/design-icon.png" className="icon" alt="" />
                    <h3 className="title-sm">Web Design</h3>
                    <p className="text">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
                      est suscipit itaque?
                    </p>
                    <a href="#" className="btn small">Read more</a>
                  </div>
                </div>
              </div>

              <div className="card-wrap">
                <div className="card" data-card="Code">
                  <div className="card-content z-index">
                    <img src="./img/code-icon.png" className="icon" alt="" />
                    <h3 className="title-sm">Web Development</h3>
                    <p className="text">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Dolores suscipit nobis dolore?
                    </p>
                    <a href="#" className="btn small">Read more</a>
                  </div>
                </div>
              </div>

              <div className="card-wrap">
                <img
                  src="./img/shapes/points3.png"
                  className="points points2 points-sq"
                  alt=""
                />
                <div className="card" data-card="App">
                  <div className="card-content z-index">
                    <img src="./img/app-icon.png" className="icon" alt="" />
                    <h3 className="title-sm">App Development</h3>
                    <p className="text">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Voluptatum hic veniam nihil.
                    </p>
                    <a href="#" className="btn small">Read more</a>
                  </div>
                </div>
              </div>
            </div>
          </>
            
        })}
          
        </div>
      </div>
    </>
  )
}

export default Services
