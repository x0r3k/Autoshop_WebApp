import React from 'react';
import './styles/index.scss';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

export default function Footer(props) {
  return (
    <footer id="footer" className="footer">
      <div className="footer-blocks">
        <div className="footer-block footer-contacts flex-row">
          <div className="col-7 flex-row">
            <div className="footer-heading text bold-text mg-right-10">
              LAST CHANCE TO WIN OUR DISCOUNT!
            </div>
            <div className="footer-input-wrapper">
              <input type="text" name="" id="" className="text"/>
              <button className="text uppercase-text">Subscribe</button>
            </div>
          </div>
          <div className="col-5">
            <div className="footer-heading text" style={{justifyContent: "flex-end"}}>
              <span className="mg-right-10">
                ON SOCIAL NETWORKS
              </span>
              <InstagramIcon className="mg-right-10"/>
              <FacebookIcon className="mg-right-10"/>
              <TwitterIcon className="mg-right-10"/>
              <LinkedInIcon className="mg-right-10"/>
            </div>
            
          </div>
        </div>
        <div className="footer-block footer-information">
          <div>
            <div className="footer-heading mg-bottom-10">
              Autoshop
            </div>
            <p className="footer-text text">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry lorem Ipsum is simply dummy text of industry lorem ipsum is simply dummy typesetting text.
            </p>
          </div>
          <div>
            <div className="footer-heading mg-bottom-10">
              Categories
            </div>
            <div className="footer-links">
              <a href="" className="footer-link text">Brake system</a>
              <a href="" className="footer-link text">Engine and exhaust system</a>
              <a href="" className="footer-link text">Suspension and steering</a>
              <a href="" className="footer-link text">Transmission</a>
              <a href="" className="footer-link text">Cooling and heating</a>
              <a href="" className="footer-link text">Electrics and lighting</a>
              <a href="" className="footer-link text">Body and components</a>
              <a href="" className="footer-link text">Auto-chemical goods</a>
            </div>
          </div>
          <div>
            <div className="footer-heading mg-bottom-10">
              Customer
            </div>
            <div className="footer-links">
              <a href="" className="footer-link text">Help and support</a>
              <a href="" className="footer-link text">Shipping and delivery</a>
              <a href="" className="footer-link text">Payment method</a>
              <a href="" className="footer-link text">Terms and conditions</a>
              <a href="" className="footer-link text">Privacy policy</a>
            </div>

          </div>
          <div>
            <div className="footer-heading mg-bottom-10">
              Company
            </div>
            <div className="footer-links">
              <a href="" className="footer-link text">About company</a>
              <a href="" className="footer-link text">Our services</a>
              <a href="" className="footer-link text">Get the voucher</a>
              <a href="" className="footer-link text">Store locator</a>
              <a href="" className="footer-link text">Contact us</a>
            </div>
          </div>
        </div>
        <div className="footer-block footer-copyright center-text gray-text">
          <div className="col-12 text">
            Copyright © 2021 Autoshop, Inc. All Rights Reserved
          </div>
        </div>
      </div>

    </footer>
  )
}