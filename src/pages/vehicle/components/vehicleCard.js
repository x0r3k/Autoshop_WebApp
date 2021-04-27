
import clsx from 'clsx';
import RemoveIcon from "../images/close.svg";
export default function VehicleCard({isActive, title}) {

  return (
    <div className={clsx("vehicle-card", {"active": isActive})} >
      <div className="vehicle-card-outer">
        <div className="vehicle-card-inner flex-column">
          <div className="vehicle-card-status flex-row">
            {
              isActive 
              ? 
              (
                <p className="text light-weight-text vehicle-card-status-text">
                Currently Shopping for
                </p>
              )
              : 
              (
                <a className="text light-weight-text vehicle-card-status-text">
                Set As Current Vehicle
                </a>
              )
            }
            <div className="vehicle-card-remove">
              <img src={RemoveIcon} alt=""/>
            </div>
          </div>
          <div className="vehicle-card-title">
            <p className="medium-weight-text">
              {title}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}