
export default function DealTimer(props) {
  return (
    <div className="deal-content-timer flex-row">
      <div className="deal-content-timer-item flex-column flex-center">
        <div className="deal-content-timer-number text">
          06
        </div>
        <div className="deal-content-timer-caption light-weight-text uppercase-text">
          Days
        </div>
      </div>
      <div className="deal-content-timer-divider bold-text">
        :
      </div>
      <div className="deal-content-timer-item flex-column flex-center">
        <div className="deal-content-timer-number text">
          19
        </div>
        <div className="deal-content-timer-caption light-weight-text uppercase-text">
          hours
        </div>
      </div>
      <div className="deal-content-timer-divider bold-text">
        :
      </div>
      <div className="deal-content-timer-item flex-column flex-center">
        <div className="deal-content-timer-number text">
          09
        </div>
        <div className="deal-content-timer-caption light-weight-text uppercase-text">
          Minutes
        </div>
      </div>
      <div className="deal-content-timer-divider bold-text">
        :
      </div>
      <div className="deal-content-timer-item flex-column flex-center">
        <div className="deal-content-timer-number text">
          28
        </div>
        <div className="deal-content-timer-caption light-weight-text uppercase-text">
          Seconds
        </div>
      </div>
    </div>
  );
}