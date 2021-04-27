
export default function ProductCard({scu, title, image}) {
  return (
    <div className="product-card flex-column">
      <div className="product-image">
        <img src={image} alt="" />
      </div>
      <p className="product-title semibold-weight-text">{title}</p>
      <p className="product-scu">{scu}</p>
      <div className="product-rating"></div>
      <div className="flex-column flex-center" style={{flexGrow: 1, justifyContent: 'flex-end'}}>
        <p className="product-price">199.99$</p>
        <button className="btn text uppercase-text medium-weight-text">Add to cart</button>
      </div>

    </div>
  )
}