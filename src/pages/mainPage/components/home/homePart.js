import React, { useState, useEffect, useRef } from 'react';
import ImageSlider from './ImageSlider';
import clsx from 'clsx';
import HomeImage_1 from '../../img/home/home_pic_1.jpg';
import HomeImage_2 from '../../img/home/home_pic_2.jpg';
import HomeImage_3 from '../../img/home/home_pic_3.jpg';
import HomeImage_4 from '../../img/home/home_pic_4.jpg';

const mockData = [
  {
    id: 0,
    slide_id: 'slide_1',
    pagination_id: '01',
    heading: 'See new products',
    text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla, nesciunt dolorum exercitationem cumque dolorem, et laborum itaque facere pariatur id quisquam, recusandae hic ullam fugit quaerat quis ab voluptate.',
    image: HomeImage_1,
  },
  {
    id: 1,
    slide_id: 'slide_2',
    pagination_id: '02',
    heading: 'Get a 10% off',
    text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla, nesciunt dolorum exercitationem cumque dolorem, et laborum itaque facere pariatur id quisquam, recusandae hic ullam fugit quaerat quis ab voluptate.',
    image: HomeImage_2,
  },
  {
    id: 2,
    slide_id: 'slide_3',
    pagination_id: '03',
    heading: 'Brand Duralast starts discount\'s rain',
    text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla, nesciunt dolorum exercitationem cumque dolorem, et laborum itaque facere pariatur id quisquam, recusandae hic ullam fugit quaerat quis ab voluptate.',
    image: HomeImage_3,
  },
  {
    id: 3,
    slide_id: 'slide_4',
    pagination_id: '04',
    heading: 'Hurry up! ACDelco Brake Pads sold ASAP',
    text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla, nesciunt dolorum exercitationem cumque dolorem, et laborum itaque facere pariatur id quisquam, recusandae hic ullam fugit quaerat quis ab voluptate.',
    image: HomeImage_4,
  }
];

export default function HomePart(props) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    let interval = setInterval(() => {
      setCurrentSlide((currentSlide + 1) % mockData.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [currentSlide]);

  return (
    <section className="home-part" id="home">
      
      <ImageSlider config={mockData} currentSlide={currentSlide}/>

      <div className="swiper-pagination bh-center flex-column">
        {
          mockData.map(item => {
            return (
              <span 
                key={item.pagination_id}
                className={clsx('swiper-pagination-bullet', 'flex-row', 'flex-center', {'active': currentSlide === item.id})}
                onClick={() => setCurrentSlide(item.id)}
              >
                {item.pagination_id}
              </span>
            )
          })
        }
      </div>
    </section>
  );
}