import '../styles/index.scss';
import FacebookIcon from '../images/icons/facebook.svg';
import InstagramIcon from '../images/icons/instagram.svg';
import TwitterIcon from '../images/icons/twitter.svg';
import ShowIcon from '../images/icons/show.svg';
import HideIcon from '../images/icons/hide.svg';
import Appbar from '../../../components/appbar';

export default function Authorization(props) {
  return (
    <div className="authorization authentication" id="authorization">
      <Appbar simpleAppbar />
      <div className="authen-wrapper">
        <div className="authen-title text bold-text uppercase-text">
          WELCOME BACK!
        </div>
        <div className="auth-form flex-column">
          <p className="auth-with text light-weight-text">
            Login to your account with
          </p>
          <div className="auth-form-icons">
            <div className="auth-form-icon">
              <img src={FacebookIcon} alt="" />
            </div>
            <div className="auth-form-icon">
              <img src={InstagramIcon} alt="" />
            </div>
            <div className="auth-form-icon">
              <img src={TwitterIcon} alt="" />
            </div>
          </div>
          <div className="auth-form-divider flex-row flex-center">
            <div className="divider-line"></div>
            <p className="divider-text text light-weight-text">or</p>
            <div className="divider-line"></div>
          </div>
          <div className="authentication-input-wrapper">
            <label htmlFor="" className="text-input-label text light-weight-text">Email*</label>
            <input type="text" className="authentication-input text" placeholder="test_email@mail.com"/>
          </div>
          <div className="authentication-input-wrapper">
            <label htmlFor="" className="text-input-label text light-weight-text">Password*</label>
            <div className="authentication-input-with-icon">
              <input type="text" className="authentication-input text" placeholder="testPassword123"/>
              <div className="authentication-input-icon">
                <img src={ShowIcon} alt="" />
              </div>
            </div>
            
          </div>
          <div className="flex-row authentication-input-wrapper checkbox-input">
            <div className="authentication-checkbox"/>
            <label htmlFor="" className="text-input-label text light-weight-text">Remember credentials</label>
          </div>
          <button className="btn text uppercase-text medium-weight-text">Sign in</button>
          <a className="text medium-weight-text auth-form-link">
            Dont have an account? Register here
          </a>
        </div>
      </div>

    </div>
  )
}