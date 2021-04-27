export default function TopDealsCard({id, heading, text, image}) {
  return (
    <div className='top-deals-card flex-row'>
      {/* <div className=''> */}
        <div className='top-deal-image-container'>
          <img src={image} alt=""/>
        </div>
        <div className="flex-column">
          <p className="top-deal-heading text semibold-weight-text uppercase-text">
            {heading}
          </p>
          <p className="top-deal-text text">
            {text}
          </p>
        </div>
      {/* </div> */}
    </div>
  )
}