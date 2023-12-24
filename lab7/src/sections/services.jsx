function Services() {

  const handleDownload = () => {
    const fileUrl = './cv.pdf';
    const link = document.createElement('a');
    link.href = fileUrl;
    link.setAttribute('download', 'cv.pdf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };


  return (
    <>
    <section className="services section">
            <div className="container">
                <div className="section-header">
                    <h3 className="title" data-title="What I Do">Services</h3>
                    <p className="text">Lorem ipsum dolor sit,
                         amet consectetur adipisicing elit.
                          Ipsum, voluptates.
                    </p>
                </div>

                <div className="cards">
                    <div className="card-wrap">
                        <div className="card-content">
                            <img src="../img/design-icon.png" className="icon" alt=""/>
                            <h3 className="title-sm">Web Design</h3>
                            <p className="text">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, porro?
                            </p>
                        </div>
                    </div>
                    <div className="card-wrap"></div>
                    <div className="card-wrap"></div>
                </div>
            </div>
        </section>
      <div className="header_content">
        <div className="container grid-2">
            <div className="column-2 image">
                <img
                src="./img/shapes/points2.png"
                className="points points2"
                alt=""
              />
                <img src="./img/Main-image.png" alt="" className="img-element"/>
            </div>

            <div className="column-1">
                <h1 className="header_title">Redouane DADDIOUAMER</h1>
                <p className="text">
                    Front and back web developer,I'm a software engineer
                    certificated by University Constantine 2,
                    experianced in many fields such as security,app development
                </p>
                <a href="" onClick={handleDownload} className="btn">Download CV <div><img src="./img/download.png" /></div></a>
            </div>
        </div>

      </div>
    </>
  )
}

export default Services
