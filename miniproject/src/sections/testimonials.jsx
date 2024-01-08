import React, { useEffect, useRef, useState } from 'react';
import 'swiper/css/bundle';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Swiper from 'swiper';

function Testimonials() {
  const swiperContainerRef = useRef(null);
  const [swiperInstance, setSwiperInstance] = useState(null);

  const testimonialsData = [
    {
      quote: "Working with this team was an amazing experience. Their creativity and attention to detail surpassed my expectations. I highly recommend them!",
      rating: 3,
      name: "Emily Johnson",
      job: "Graphic Designer, New York",
      link:"https://github.com/"
    },
    {
      quote: "I've been a client for years, and the quality of their service has never wavered. Professionalism and efficiency are their strengths. Great job!",
      rating: 3.5,
      name: "Michael Rodriguez",
      job: "Marketing Manager, Los Angeles",
      link:"https://github.com/"
    },
    {
      quote: "The team at this company is exceptional. They understand the client's needs and deliver outstanding results. It's a pleasure working with them.",
      rating: 4.5,
      name: "Sophia Williams",
      job: "Business Owner, Chicago",
      link:"https://github.com/"
    },
    {
      quote: "Incredible attention to detail and a collaborative approach make them stand out. I'm impressed with the results and would choose them again.",
      rating: 6,
      name: "David Carter",
      job: "UX Designer, San Francisco",
      link:"https://github.com/"
    },
  ];

  useEffect(() => {
    if (!swiperInstance) {
      const newSwiper = new Swiper(swiperContainerRef.current, {
        speed: 1100,
        slidesPerView: 1,
        loop: true,
        autoplay: {
          delay: 5000,
        },
      });

      setSwiperInstance(newSwiper);
    }

    return () => {
      if (swiperInstance) {
        swiperInstance.destroy();
      }
    };
  }, [swiperInstance]);

  const handlePrevClick = () => {
    if (swiperInstance) {
      swiperInstance.slidePrev();
    }
  };

  const handleNextClick = () => {
    if (swiperInstance) {
      swiperInstance.slideNext();
    }
  };

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
      <div className="testimonials section" id="Testimonials">
        <div className="container">
          <div className="section-header">
            <h3 className="title" data-title="What People Say">Testimonials</h3>
          </div>

          <div className="testi-content grid-2">
            <div className="column-1 reviews">
              <div className="swiper-container" ref={swiperContainerRef}>
                <div className="swiper-wrapper">
                  {testimonialsData.map((testimonial, index) => (
                    <div className="swiper-slide review" key={index}>
                      <i className="fas fa-quote-left quote"></i>
                      <div className="rate">{renderStars(testimonial.rating)}</div>
                      <p className="review-text">{testimonial.quote}</p>
                      <div className="review-info" style={testimonial.link?{cursor: 'pointer'}:null} onClick={() => {testimonial.link? window.open(testimonial.link, '_blank'): null}}>
                        <h3 className="review-name">{testimonial.name}</h3>
                        <h5 className="review-job">{testimonial.job}</h5>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="review-nav swiper-button-prev" onClick={handlePrevClick}>
                  <i className="fas fa-long-arrow-alt-left"></i>
                </div>
                <div className="review-nav swiper-button-next" onClick={handleNextClick}>
                  <i className="fas fa-long-arrow-alt-right"></i>
                </div>
              </div>
            </div>
            <div className="column-2 image">
              <img src="./img/testi.png" alt="" className="img-element" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Testimonials;
