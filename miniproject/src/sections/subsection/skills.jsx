import React, { useEffect } from 'react';

function Skills() {
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

  const data = {
    skills: [
      { title: 'HTML CSS Vanilla-JS', progress: '90%' },
      { title: 'ECMAScript 6', progress: '75%' },
      { title: 'VueJS', progress: '60%' },
      { title: 'ReactJS', progress: '65%' },
      { title: 'MySQL', progress: '85%' },
      { title: 'Oracle', progress: '80%' },
      { title: 'PHP', progress: '75%' },
      { title: 'Laravel', progress: '70%' },
      { title: 'Dart', progress: '60%' },
      { title: 'Flutter', progress: '55%' },
      { title: 'Java', progress: '70%' },
      { title: 'JavaFX', progress: '65%' },
      { title: 'XML', progress: '60%' },
      { title: 'AWS Services (EC2, RDS, S3)', progress: '75%' },
      { title: 'CloudFlare', progress: '65%' },
      { title: 'Docker', progress: '70%' },
      { title: 'Python', progress: '75%' },
      { title: 'C++', progress: '60%' },
    ],
    githubLink: "https://www.github.com/D-Redouane", // Replace with your actual GitHub link
    imagePaths: {
      points: "./img/shapes/points4.png",
      about: "./img/about.png",
    },
  };


  return (
    <>
      <div className="section" id="skills">
          <div className="section-header">
            <h3 className="title" data-title="What I Know">Skills</h3>
          </div>
        <div className="container testi-content grid-2">
          <div className="column-1">

            <div className="skills">
              {data.skills.map((skill, index) => (
                <div key={index} className={`skill ${skill.title.toLowerCase()}`}>
                  <h3 className="skill-title">{skill.title}</h3>
                  <div className="skill-bar">
                    <div className="skill-progress" style={{ width: skill.progress }}></div>
                  </div>
                </div>
              ))}
            </div>
            <a href={data.githubLink} className="btn">See more on <i className="fa-brands fa-github"></i></a>
          </div>

          
          <div className="column-2 image">
            <img src={data.imagePaths.about} className="z-index" alt="" />
          </div>
        </div>

        
      </div>
    </>
  )
}

export default Skills
