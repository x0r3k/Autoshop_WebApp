import '../styles/index.scss';
import FacebookIcon from '../images/icons/facebook.svg';
import InstagramIcon from '../images/icons/instagram.svg';
import TwitterIcon from '../images/icons/twitter.svg';
import Appbar from '../../../components/appbar';

export default function Authorization(props) {
  return (
    <div className="authorization" id="authorization">
      <Appbar simpleAppbar />
      <div className="auth-wrapper">
        <div className="auth-title text bold-text uppercase-text">
          WELCOME BACK!
        </div>
        <div className="auth-form">
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
          <div className="col-6">
            <input type="text" className="authentication-input"/>
          </div>
          <div className="col-6">
            <input type="text" className="authentication-input"/>
          </div>
        </div>
      </div>

    </div>
  )
}