import React, { useEffect, useRef } from 'react';

export default function ImageSlider({ config, currentSlide }) {
  const sliderRef = useRef();  

  useEffect(() => {
    let viewportHeight = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
    sliderRef.current.style.transform = `translate(0px, ${currentSlide * viewportHeight * -1}px)`;
    // console.log(Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0));
  }, [currentSlide]);

  return (
    <div className="image-slider" ref={sliderRef}>
      {
        config.map(item => {
          return (
            <div key={item.slide_id} >
              <div className="slide-container full-page-pc">
                <div className="text-container outer-text-container bh-center">
                  <div className="inner-text-container">
                    <h1>{item.heading}</h1>
                    <p>{item.text}</p>
                  </div>
                </div>
                <div className="flex-row full-page-pc" style={{ justifyContent: "flex-end" }}>
                  <div className="image-container">
                    <img src={item.image} alt="" />
                  </div>
                </div>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}