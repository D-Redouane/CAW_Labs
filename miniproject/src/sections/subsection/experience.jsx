import React, { useEffect, useRef, useState } from 'react';
import 'swiper/css/bundle';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Swiper from 'swiper';

function Experience() {

  const experiences = [
    {
      title: 'Freelance Full Stack Developer',
      company: 'Mahdara',
      date: 'August - October 2023',
      description: 'Worked on a school management application. Developed frontend using Vue.js 3, Scss, Bootstrap, Vite, etc. Implemented backend API using Laravel, handling Excel data import/export and QR code functionalities. Deployed on AWS EC2 instance with Cloudflare for other services.',
      class:"fa-brands fa-github", // Add your custom class for this experience
      rating: 4.5, // Add your rating if applicable
      companylink: null, // Add your company link if applicable
      // link:''
    },
    {
      title: 'DevOps Intern',
      company: 'ValleyCom (SaasCom)',
      date: 'July - August 2023',
      description: 'Provided CDN service for initial cashing using Cloudflare. Deployed the company\'s saas service on AWS EC2 instance and RDS for the database, and S3 buckets for storage. Enabled and maintained security protections (e.g., against DDoS and robots blocking, SSL certificates).',
      class:"fa-brands fa-github", // Add your custom class for this experience
      rating: 4.0, // Add your rating if applicable
      companylink: null, // Add your company link if applicable
      // link:''
    },
    {
      title: 'Final Year Project - NTICShip',
      company: 'University (Service for internship management)',
      date: 'February - June 2023',
      description: 'Developed a service to facilitate internship management, search, and application. Backend API developed with Laravel, MySQL database. Frontend developed using Vue.js 3, responsive design, and web interface manipulation.',
      class:"fas fa-quote-left", // Add your custom class for this experience
      rating: 3.5, // Add your rating if applicable
      companylink: null, // Add your company link if applicable
      // link:''
    },
  ];
  
  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    const stars = [];
    for (let i = 0; i < fullStars; i++) {
      stars.push(<i key={i} className="fas fa-star"></i>);
    }
    if (hasHalfStar) {
      stars.push(<i key={stars.length} className="fas fa-star-half-alt"></i>);
    }
    return stars;
  };

  return (
    <>
      <div className="section" id="skills">
          <div className="section-header">
            <h3 className="title" data-title="What I Did">Experience</h3>
          </div>

          <div className="testi-content grid-2">
            {experiences.map((experience, index) => (
              <div className="column-1 card-sp" key={index}>
                <div className="swiper-container">
                  <div className="swiper-wrapper">
                      <div className="swiper-slide review">
                        <i className={experience.class+" quote"}></i>
                        <div style={{justifyContent:'space-between',display:'flex'}}>
                          <div className="rate">{renderStars(experience.rating)}</div>
                          <h6>{experience.date}</h6>
                        </div>
                        
                        <p className="review-text">{experience.description}</p>
                        
                        <div className="review-info" style={experience.link?{cursor: 'pointer'}:null} onClick={() => {experience.link? window.open(experience.link, '_blank'): null}}>
                          <h3 className="review-name">{experience.title}</h3>
                          <h5 className="review-job" style={experience.companylink?{cursor: 'pointer'}:null} onClick={() => {experience.companylink? window.open(experience.companylink, '_blank'): null}}>{experience.company}</h5>
                        </div>
                      </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
      </div>
    </>
  );
}

export default Experience;