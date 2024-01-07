import React, { useEffect } from 'react';

function Records() {

  useEffect(() => {

    const records_wrap = document.querySelector(".records");
    const records_numbers = document.querySelectorAll(".number");

    const checkScroll = (el) => {
      let rect = el.getBoundingClientRect();
      if (window.innerHeight >= rect.top + el.offsetHeight) return true;
      return false;
    }

    const handleScroll = () => {
      // skillsEffect();
      countUp();
    };

    const countUp = () => {
      if (!checkScroll(records_wrap)) return;
      records_numbers.forEach((numb) => {
        const updateCount = () => {
          let currentNum = +numb.innerText;
          let maxNum = +numb.dataset.num;
          let speed = 100;
          const increment = Math.ceil(maxNum / speed);
    
          if (currentNum < maxNum) {
            numb.innerText = currentNum + increment;
            setTimeout(updateCount, 1);
          } else {
            numb.innerText = maxNum;
          }
        };
    
        setTimeout(updateCount, 400);
      });
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };

  }, []);
  


  return (
    <>
      <div className="records">
        <div className="overlay overlay-sm">
          <img src="./img/shapes/square.png" alt="" className="shape square1" />
          <img src="./img/shapes/square.png" alt="" className="shape square2" />
          <img src="./img/shapes/circle.png" alt="" className="shape circle" />
          <img
            src="./img/shapes/half-circle.png"
            alt=""
            className="shape half-circle"
          />
          <img src="./img/shapes/wave.png" alt="" className="shape wave wave1" />
          <img src="./img/shapes/wave.png" alt="" className="shape wave wave2" />
          <img src="./img/shapes/x.png" alt="" className="shape xshape" />
          <img src="./img/shapes/triangle.png" alt="" className="shape triangle" />
        </div>

        <div className="container">
          <div className="wrap">
            <div className="record-circle">
              <h2 className="number" data-num="235">0</h2>
              <h4 className="sub-title">Projects</h4>
            </div>
          </div>

          <div className="wrap">
            <div className="record-circle active">
              <h2 className="number" data-num="174">0</h2>
              <h4 className="sub-title">Happy Clients</h4>
            </div>
          </div>

          <div className="wrap">
            <div className="record-circle">
              <h2 className="number" data-num="892">0</h2>
              <h4 className="sub-title">Work Hour</h4>
            </div>
          </div>

          <div className="wrap">
            <div className="record-circle">
              <h2 className="number" data-num="368">0</h2>
              <h4 className="sub-title">Awards</h4>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Records
