import '../styles/index.scss';
import Appbar from '../../../components/appbar';
import ShowIcon from '../../../assets/icons/show.svg';
import ChevronDownIcon from '../../../assets/icons/down-chevron.svg';

export default function Registration(props) {
  return (
    <div className="register authentication" id="register">
      <Appbar simpleAppbar />
      <div className="authen-wrapper">
        <div className="authen-title text bold-text uppercase-text">
          BECOME AN AUTOSHOP REWARDS MEMBER
        </div>
        <div className="register-form flex-column">
          <div className="flex-row full-width-pc">
            <div className="form-input-wrapper col-6">
              <label htmlFor="" className="text-input-label text light-weight-text">First Name*</label>
              <input type="text" className="form-input text" placeholder="test_email@mail.com" />
            </div>
            <div className="form-input-wrapper col-6">
              <label htmlFor="" className="text-input-label text light-weight-text">Last Name</label>
              <input type="text" className="form-input text" placeholder="testPassword123" />
            </div>
          </div>
          <div className="flex-row full-width-pc">
            <div className="form-input-wrapper col-6">
              <label htmlFor="" className="text-input-label text light-weight-text">Email*</label>
              <input type="text" className="form-input text" placeholder="test_email@mail.com" />
            </div>
            <div className="form-input-wrapper col-6">
              <label htmlFor="" className="text-input-label text light-weight-text">Password*</label>
              <div className="form-input-with-icon">
                <input type="text" className="form-input text" placeholder="testPassword123" />
                <div className="form-input-icon">
                  <img src={ShowIcon} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="flex-row full-width-pc">
            <div className="form-input-wrapper col-6">
              <label htmlFor="" className="text-input-label text light-weight-text">Phone Number*</label>
              <input type="text" className="form-input text" placeholder="test_email@mail.com" />
            </div>
            <div className="form-input-wrapper col-6">
              <label htmlFor="" className="text-input-label text light-weight-text">City*</label>
              <input type="text" className="form-input text" placeholder="testPassword123" />
            </div>
          </div>
          <div className="flex-row full-width-pc">
            <div className="form-input-wrapper col-6">
              <label htmlFor="" className="text-input-label text light-weight-text">Birthdate</label>
              <input type="text" className="form-input text" placeholder="test_email@mail.com" />
            </div>
            <div className="form-input-wrapper col-6">
              <label htmlFor="" className="text-input-label text light-weight-text">Gender</label>
              <div className="form-input-with-icon">
                <input type="text" className="form-input text" placeholder="testPassword123" />
                <div className="form-input-icon">
                  <img src={ChevronDownIcon} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="flex-row form-input-wrapper checkbox-input">
            <div className="form-checkbox"/>
            <label htmlFor="" className="text-input-label text light-weight-text">I have read, understood and consent Privacy Policy</label>
          </div>
          <button className="btn text uppercase-text medium-weight-text">create account</button>
          <a className="text medium-weight-text auth-form-link">
            Already have an account?
          </a>
        </div>
      </div>
    </div>
  )
}