import React, { useState, useEffect, useRef } from 'react';
import TestImage from '../../img/home/home_pic_1.jpg'


export default function HeaderContent(props) {
  return (
    <div className="home-part main-page-part full-page-vp" id="home">
      <div className="content-container full-page-pc">
        <div className="text-container bh-center">
          <h1>Text</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque incidunt temporibus exercitationem doloribus, accusamus ratione quisquam molestiae quod quos eius excepturi maiores eaque aut sed quibusdam ipsa rem praesentium quasi.</p>
        </div>
        <div className="flex-row full-page-pc" style={{justifyContent:"flex-end"}}>
          <div className="image-container">
            <img src={TestImage} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}