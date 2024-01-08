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


  const recordData = [
    { num: 15, title: "Projects", class:"record-circle" },
    { num: 5, title: "Happy Clients", class:"record-circle" },
    { num: 250, title: "Work Hour", class:"record-circle active" },
    { num: 3, title: "Awards", class:"record-circle" },
  ];

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

        <div className="container" style={{justifyContent:'space-evenly',display:'flex'}}>
          {recordData.map((record, index) => (
            <div key={index} className="wrap">
              <div className={record.class}>
                <h2 className="number" data-num={record.num}>0</h2>
                <h4 className="sub-title">{record.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Records
