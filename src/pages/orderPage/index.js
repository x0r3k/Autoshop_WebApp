import Appbar from '../../components/appbar';
import Footer from '../../components/footer';
import './styles/index.scss';

import Photo1 from './images/battery_3.jfif';
import Photo2 from './images/battery_4.jpg';

export default function OrderPage(props) {
  return (
    <div id="orderPage">
      <Appbar simpleAppbar />
      <div className="order-page-wrapper">
        <div className="order-content">
          <div className="flex-row">
            <div className="order-page-title text uppercase-text bold-text">
              ORDERING
            </div>
          </div>
          <div className="order-form-wrapper">
            <div className="order-form">
              <div className="order-form-section">
                <div className="section-bullet">
                  <span className="text bold-text">!</span>
                </div>
                <span className="section-label text bold-text">Contact information</span>
              </div>
              <div className="form-contant-info">
                <div className="form-input-wrapper">
                  <label htmlFor="" className="text-input-label text light-weight-text">First Name*</label>
                  <input type="text" className="form-input text" placeholder="Kyrylo" />
                </div>
                <div className="form-input-wrapper">
                  <label htmlFor="" className="text-input-label text light-weight-text">Last Name</label>
                  <input type="text" className="form-input text" placeholder="Dolhopolov" />
                </div>
                <div className="form-input-wrapper">
                  <label htmlFor="" className="text-input-label text light-weight-text">Phone Number*</label>
                  <input type="text" className="form-input text" placeholder="0994006501" />
                </div>
                <div className="form-input-wrapper">
                  <label htmlFor="" className="text-input-label text light-weight-text">City</label>
                  <input type="text" className="form-input text" placeholder="Kharkiv" />
                </div>
              </div>
              <div className="form-section-divider"></div>
              <div className="order-form-section">
                <div className="section-bullet">
                  <span className="text bold-text">1</span>
                </div>
                <span className="section-label text bold-text">Products</span>
              </div>
              <div className="form-products">
                <div className="form-product flex-row">
                  <div className="form-product-image">
                    <img src={Photo1} alt="" />
                  </div>
                  <div className="form-product-title text medium-weight-text">
                    <p>ACDelco Advantage Battery 24FS Group Size 24F 600 CCA</p>
                  </div>
                  <div className="form-product-price flex-column flex-center">
                    <span className="title text">Price</span>
                    <span className="value text">$2,500.00</span>
                  </div>
                  <div className="form-product-quantity flex-column flex-center">
                    <span className="title text">Quantity</span>
                    <span className="value text">1</span>
                  </div>
                  <div className="form-product-total flex-column flex-center">
                    <span className="title text">Total</span>
                    <span className="value text">$2,500.00</span>
                  </div>
                </div>
                <div className="form-product-divider"></div>
                <div className="form-product flex-row">
                  <div className="form-product-image">
                    <img src={Photo2} alt="" />
                  </div>
                  <div className="form-product-title text medium-weight-text">
                    <p>ACDelco Advantage Battery 24S Group Size 24 600 CCA</p>
                  </div>
                  <div className="form-product-price flex-column flex-center">
                    <span className="title text">Price</span>
                    <span className="value text">$2,500.00</span>
                  </div>
                  <div className="form-product-quantity flex-column flex-center">
                    <span className="title text">Quantity</span>
                    <span className="value text">2</span>
                  </div>
                  <div className="form-product-total flex-column flex-center">
                    <span className="title text">Total</span>
                    <span className="value text">$5,000.00</span>
                  </div>
                </div>
              </div>
              <div className="form-section-divider"></div>
              <div className="order-form-section">
                <div className="section-bullet">
                  <span className="text bold-text">2</span>
                </div>
                <span className="section-label text bold-text">Shipping</span>
              </div>
              <div className="form-shipping">
                <div className="form-option">
                  <div className="flex-row radiobtn-input flex-center">
                    <div className="form-radiobtn">
                      <div className="form-radiobtn-dot"></div>
                    </div>
                    <label htmlFor="" className="text-input-label text light-weight-text">Free shipping</label>
                  </div>
                  <span>Free</span>
                </div>
                <div className="form-option">
                  <div className="radiobtn-input flex-row flex-center">
                    <div className="form-radiobtn active">
                      <div className="form-radiobtn-dot"></div>
                    </div>
                    <label htmlFor="" className="text-input-label text light-weight-text">Flat rate</label>
                  </div>
                  <span>12.00$</span>
                </div>
                <div className="form-option">
                  <div className="radiobtn-input flex-row flex-center">
                    <div className="form-radiobtn">
                      <div className="form-radiobtn-dot"></div>
                    </div>
                    <label htmlFor="" className="text-input-label text light-weight-text">Local pickup</label>
                  </div>
                  <span>15.00$</span>
                </div>
              </div>
              <div className="form-section-divider"></div>
              <div className="order-form-section">
                <div className="section-bullet">
                  <span className="text bold-text">3</span>
                </div>
                <span className="section-label text bold-text">Payment</span>
              </div>
              <div className="form-payment">
                <div className="form-option">
                  <div className="flex-row radiobtn-input flex-center">
                    <div className="form-radiobtn">
                      <div className="form-radiobtn-dot"></div>
                    </div>
                    <label htmlFor="" className="text-input-label text light-weight-text">Check payments</label>
                  </div>
                </div>
                <div className="form-option">
                  <div className="radiobtn-input flex-row flex-center">
                    <div className="form-radiobtn active">
                      <div className="form-radiobtn-dot"></div>
                    </div>
                    <label htmlFor="" className="text-input-label text light-weight-text">Cash on delivery</label>
                  </div>
                </div>
                <div className="form-option">
                  <div className="radiobtn-input flex-row flex-center">
                    <div className="form-radiobtn">
                      <div className="form-radiobtn-dot"></div>
                    </div>
                    <label htmlFor="" className="text-input-label text light-weight-text">PayPal</label>
                  </div>
                </div>
              </div>
              <div className="form-section-divider"></div>
              <div className="order-form-section">
                <div className="section-bullet">
                  <span className="text bold-text">4</span>
                </div>
                <span className="section-label text bold-text">Receiver information</span>
              </div>
              <div className="form-receiver-info">
                <p>Who is the recipient?</p>
                <div className="form-option">
                  <div className="flex-row radiobtn-input flex-center">
                    <div className="form-radiobtn">
                      <div className="form-radiobtn-dot"></div>
                    </div>
                    <label htmlFor="" className="text-input-label text light-weight-text">Me</label>
                  </div>
                </div>
                <div className="form-option">
                  <div className="radiobtn-input flex-row flex-center">
                    <div className="form-radiobtn active">
                      <div className="form-radiobtn-dot"></div>
                    </div>
                    <label htmlFor="" className="text-input-label text light-weight-text">Another person</label>
                  </div>
                </div>
                <div className="receiver-info-form">
                  <div className="form-input-wrapper">
                    <label htmlFor="" className="text-input-label text light-weight-text">First Name*</label>
                    <input type="text" className="form-input text" placeholder="Kyrylo" />
                  </div>
                  <div className="form-input-wrapper">
                    <label htmlFor="" className="text-input-label text light-weight-text">Last Name</label>
                    <input type="text" className="form-input text" placeholder="Dolhopolov" />
                  </div>
                  <div className="form-input-wrapper">
                    <label htmlFor="" className="text-input-label text light-weight-text">Phone Number*</label>
                    <input type="text" className="form-input text" placeholder="0994006501" />
                  </div>
                  <div className="form-input-wrapper">
                    <label htmlFor="" className="text-input-label text light-weight-text">City</label>
                    <input type="text" className="form-input text" placeholder="Kharkiv" />
                  </div>
                </div>
              </div>
            </div>

            <div className="order-total-info">
              <div className="total-info-title text bold-text">Your order</div>
              <div className="flex-row flex-between info-row flex-center">
                <span className="text">2 items in total</span>
                <span className="text">$7,500.00</span>
              </div>
              <div className="flex-row flex-between info-row flex-center">
                <span className="text">Shipping cost</span>
                <span className="text">12.00$</span>
              </div>
              <div className="total-info-divider"></div>
              <div className="flex-row flex-between info-row flex-center">
                <span className="text">Total</span>
                <span className="text total-price uppercase-text bold-text">$7,512.00</span>
              </div>
              <div className="total-info-divider"></div>
              <p className="personal-data-info text uppercase-text">
                Your personal data will be used to process your order, support your experience throughout this website,
                and for other purposes described in our privacy policy.
              </p>
              <div className="flex-row checkbox-input confirm-conditions">
                <div className="form-checkbox"></div>
                <label htmlFor="" className="text-input-label text light-weight-text">I have read and agree to the website terms and conditions</label>
              </div>
              <div className="flex-row flex-center">
              <button className="btn text uppercase-text">Place Order</button>
              </div>
              
            </div>
          </div>

        </div>
      </div>
      {/* <Footer /> */}
    </div>
  )
}