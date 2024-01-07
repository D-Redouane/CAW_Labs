import React, { useEffect, useRef, useState } from 'react';
import 'swiper/css/bundle';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Swiper from 'swiper';

function Testimonials() {
  const swiperContainerRef = useRef(null);
  const [swiperInstance, setSwiperInstance] = useState(null);

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

  return (
    <>
      <div className="testimonials section" id="testimonials">
        <div className="container">
          <div className="section-header">
            <h3 className="title" data-title="What People Say">Testimonials</h3>
          </div>

          <div className="testi-content grid-2">
            <div className="column-1 reviews">
              <div className="swiper-container" ref={swiperContainerRef}>
                <div className="swiper-wrapper">
                  <div className="swiper-slide review">
                    <i className="fas fa-quote-left quote"></i>
                    <div className="rate">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                    </div>

                    <p className="review-text">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Laudantium adipisci veniam debitis quas, sapiente
                      repellendus mollitia. Laboriosam labore voluptate quos?
                    </p>

                    <div className="review-info">
                      <h3 className="review-name">Matias Butt</h3>
                      <h5 className="review-job">Photographer, Paris</h5>
                    </div>
                  </div>

                  <div className="swiper-slide review">
                    <i className="fas fa-quote-left quote"></i>
                    <div className="rate">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                    </div>

                    <p className="review-text">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Fugiat voluptate consequatur aut tenetur fugit error
                      molestiae quaerat ex odio rem?
                    </p>

                    <div className="review-info">
                      <h3 className="review-name">Romeo Herbert</h3>
                      <h5 className="review-job">CEO, Munich</h5>
                    </div>
                  </div>

                  <div className="swiper-slide review">
                    <i className="fas fa-quote-left quote"></i>
                    <div className="rate">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                    </div>

                    <p className="review-text">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Cupiditate voluptatum enim nemo quod amet dolorum aliquam,
                      sapiente omnis eaque consectetur.
                    </p>

                    <div className="review-info">
                      <h3 className="review-name">Jack Costa</h3>
                      <h5 className="review-job">Director of THR, London</h5>
                    </div>
                  </div>

                  <div className="swiper-slide review">
                    <i className="fas fa-quote-left quote"></i>
                    <div className="rate">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                    </div>

                    <p className="review-text">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Perspiciatis ab incidunt, dicta quam inventore ipsum
                      dolor. Consectetur nam incidunt error!
                    </p>

                    <div className="review-info">
                      <h3 className="review-name">Reiss Mccartney</h3>
                      <h5 className="review-job">Engineer, San Francisco</h5>
                    </div>
                  </div>
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
