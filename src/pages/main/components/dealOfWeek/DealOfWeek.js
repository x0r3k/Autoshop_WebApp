import DealTimer from './DealTimer';

export default function DealOfWeek(props) {
  return (
    <div className='deal_of_week-part' id='deal_of_week'>
      <div className="deal-background-image">
        <div className='deal-content-wrapper flex-column'>
          <div className="deal-content-text">
            <p className="text uppercase-text light-weight-text">
              We offer a hot deal offer every festival
            </p>
          </div>
          <div className="deal-content-heading">
            <p className="text uppercase-text medium-weight-text">
              DEAL OF THE Week!
            </p>
          </div>
          <DealTimer/>
          <button className="btn text uppercase-text medium-weight-text">Go to products</button>
          <div className="deal-content-button"></div>
        </div>
      </div>
    </div>
  );
}