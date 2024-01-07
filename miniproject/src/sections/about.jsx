import React, { useEffect } from 'react';

function About() {
  // const records_wrap = document.querySelector(".records");
  // const records_numbers = document.querySelectorAll(".number");

  useEffect(() => {
    const checkScroll = (el) => {
      let rect = el.getBoundingClientRect();
      if (window.innerHeight >= rect.top + el.offsetHeight) return true;
      return false;
    }

    const skillsEffect = () => {
      const skillsWrap = document.querySelector(".skills");
      const skillsBars = document.querySelectorAll(".skill-progress");

      if (!skillsWrap || !skillsBars.length) return;

      const checkScroll = (element) => {
        const elementPosition = element.getBoundingClientRect().top;
        return elementPosition - window.innerHeight <= 0;
      };

      if (!checkScroll(skillsWrap)) return;

      skillsBars.forEach((skill) => (skill.style.width = skill.dataset.progress));
    };

    const handleScroll = () => {
      skillsEffect();
      // countUp();
    };

    // const countUp = () => {
    //   if (!checkScroll(records_wrap)) return;
    //   records_numbers.forEach((numb) => {
    //     const updateCount = () => {
    //       let currentNum = +numb.innerText;
    //       let maxNum = +numb.dataset.num;
    //       let speed = 100;
    //       const increment = Math.ceil(maxNum / speed);
    
    //       if (currentNum < maxNum) {
    //         numb.innerText = currentNum + increment;
    //         setTimeout(updateCount, 1);
    //       } else {
    //         numb.innerText = maxNum;
    //       }
    //     };
    
    //     setTimeout(updateCount, 400);
    //   });
    // }
    

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  return (
    <>
      <div className="about section" id="about">
        <div className="container">
          <div className="section-header">
            <h3 className="title" data-title="Who Am I">About me</h3>
          </div>

          <div className="section-body grid-2">
            <div className="column-1">
              <h3 className="title-sm">Hello, I'm</h3>
              <p className="text">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Praesentium distinctio doloribus quam? Ut, laudantium a dolore,
                minima repudiandae iure iste molestiae exercitationem earum
                neque tempora?
              </p>
              <div className="skills">
                <div className="skill html">
                  <h3 className="skill-title">HTML</h3>
                  <div className="skill-bar">
                    <div className="skill-progress" data-progress="90%"></div>
                  </div>
                </div>
                <div className="skill css">
                  <h3 className="skill-title">CSS</h3>
                  <div className="skill-bar">
                    <div className="skill-progress" data-progress="70%"></div>
                  </div>
                </div>
                <div className="skill js">
                  <h3 className="skill-title">JavaScript</h3>
                  <div className="skill-bar">
                    <div className="skill-progress" data-progress="80%"></div>
                  </div>
                </div>
              </div>
              <a href="#" className="btn">Read more</a>
            </div>

            <div className="column-2 image">
              <img src="./img/shapes/points4.png" className="points" alt="" />
              <img src="./img/about.png" className="z-index" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About
