
export default function PartnersCard({ id, heading, text, image }) {
  return (
    <div className="partners-card">
      <div className='partners_image-container'>
        <img src={image} alt="" />
      </div>
      <div className="partners_information">
        <div className="heading">
          <span className="text light-text medium-text h4-text">
            {heading}
          </span>

        </div>
        <div className="content">
          <span className="center-text">
            {text}
          </span>
        </div>
      </div>
      <div className="partners_overlay"></div>
    </div>
  )
}