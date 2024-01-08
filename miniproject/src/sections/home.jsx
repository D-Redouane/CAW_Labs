import OverLay from '../components/overly'

function Home() {

  const HomeData = {
    Cv_URL:'./cv.pdf',
    Title:'DADDIOUAMER Redouane',
    subText:`First-year Master's student in Technology Sciences of Information and Communication (STIC), passionate by computer science. My goal is to deepen my skills in this field constantly and evolving`,
    // pictureURL:"./img/person.png"
    pictureURL:"./img/Main-image.png"
  };

  const handleDownload = () => {
    const fileUrl = HomeData.Cv_URL;
    const link = document.createElement('a');
    link.href = fileUrl;
    link.setAttribute('download', 'cv.pdf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };


  return (
    <>
      <OverLay />
      <div className="header-content" id='Home'>
        <div className="container grid-2">
          <div className="column-1">
            <h1 className="header-title">{HomeData.Title}</h1>
            <p className="text">
              {HomeData.subText}
            </p>
            <a href="#" onClick={handleDownload} className="btn">
              Download CV
            </a>
          </div>

          <div className="column-2 image">
            <img
              src="./img/shapes/points2.png"
              className="points points2"
              alt=""
            />
            <img src={HomeData.pictureURL} className="img-element z-index" alt="" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
