import './styles/index.scss';

export default function Footer(props) {
  return (
    <footer id="footer" className="footer">
      <div className="footer-blocks">
        <div className="footer-block footer-contacts flex-row">
          <div className="col-7 flex-row">
            <div className="footer-heading">
              LAST CHANCE TO WIN OUR DISCOUNT!
            </div>
            <div className="footer-input-wrapper">
              <input type="text" name="" id=""/>
              <button>Subscribe</button>
            </div>
          </div>
          <div className="col-5">
            <div className="footer-heading">
              ON SOCIAL NETWORKS
            </div>
          </div>
        </div>
        <div className="footer-block footer-information">
          <div>
            <div className="footer-heading mg-10">
              Autoshop
            </div>
            <p className="footer-text text">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry lorem Ipsum is simply dummy text of industry lorem ipsum is simply dummy typesetting text.
            </p>
          </div>
          <div>
            <div className="footer-heading mg-10">
              Categories
            </div>
            <div className="footer-links">
              <a href="" className="footer-link text">Brake system</a>
              <a href="" className="footer-link text">Engine and exhaust system</a>
              <a href="" className="footer-link text">Suspension and steering</a>
            </div>

          </div>
          <div>
            <div className="footer-heading mg-10">
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
            <div className="footer-heading mg-10">
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
          <div className="col-12">
            Copyright © 2021 Autoshop, Inc. All Rights Reserved
          </div>
        </div>
      </div>

    </footer>
  )
}