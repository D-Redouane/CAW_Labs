function OverLay(){
     const OverlayData = {
          // letters:'./img/shapes/letters.png',
          letters:'./img/shapes/letters-2.png',
     }
     return(
          <>
               <div className="overlay overlay-lg">
                    <img src="./img/shapes/circle.png" className="shape circle" alt="" />
                    <img src="./img/shapes/half-circle.png" className="shape half-circle1" alt="" />
                    <img src="./img/shapes/half-circle.png" className="shape half-circle2" alt=""/>
                    <img src="./img/shapes/x.png" className="shape xshape" alt="" />
                    <img src="./img/shapes/wave.png" className="shape wave wave1" alt="" />
                    <img src="./img/shapes/wave.png" className="shape wave wave2" alt="" />
                    <img src="./img/shapes/triangle.png" className="shape triangle" alt="" />
                    <img src={OverlayData.letters} className="letters" alt="" />
                    <img src="./img/shapes/points1.png" className="points points1" alt="" />
               </div>
          </>
     );

}

export default OverLay