
import PartnersCard from './PartnersCard';
import BoschImage from '../../../../assets/images/product_brands/Bosch.png';
import BremboImage from '../../../../assets/images/product_brands/Brembo.png';
import CastrolImage from '../../../../assets/images/product_brands/Castrol.gif';
import DuralastImage from '../../../../assets/images/product_brands/Duralast.png';
import NosImage from '../../../../assets/images/product_brands/Nos.png';
import SparcoImage from '../../../../assets/images/product_brands/Sparco.svg';

const cardConfig = [
  {
    id: 1,
    image: BoschImage,
    heading: 'Bosch',
    text: 'Bosch represent the latest in design following our 100+ year history of Automotive, Industrial, and Racing products.'
  },
  {
    id: 2,
    image: BremboImage,
    heading: 'Brembo',
    text: 'Aftermarket components are designed to accommodate the needs of any driver.'
  },
  {
    id: 3,
    image: CastrolImage,
    heading: 'Castrol',
    text: 'Castrol is here to serve every driver, every motorcyclist and every industry on earth.'
  },
  {
    id: 4,
    image: DuralastImage,
    heading: 'Duralast',
    text: 'When it’s time for a new battery, Duralast has all the power you need.'
  },
  {
    id: 5,
    image: NosImage,
    heading: 'NOS',
    text: 'NOS parts has been sourced from Ford suppliers and dealers when they need to make room for new items.'
  },
  {
    id: 6,
    image: SparcoImage,
    heading: 'Sparco',
    text: 'Technology, quality and experience made in Italy for your safety. Welcome to Sparco.'
  }
]

export default function Partners(props) {
  return (
    <section className="partners-part main-page-part">
      <div className="flex-column">
        <div className="flex-row">
          <div className="main_page-part-title text uppercase-text bold-text">
            Brands we trust
          </div>
        </div>
        <div className="partners-cards">
          {
            cardConfig.map(item => {
              return (
                <PartnersCard 
                  id={item.id} 
                  image={item.image}
                  heading={item.heading}
                  text={item.text}
                />
            )})
          }
        </div>
      </div>
    </section>
  )
}