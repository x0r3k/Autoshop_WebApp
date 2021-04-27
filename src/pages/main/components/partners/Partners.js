
import PartnersCard from './PartnersCard';

const cardConfig = [
  {
    id: 1,
    image: null,
  },
  {
    id: 2,
    image: null,
  },
  {
    id: 3,
    image: null,
  },
  {
    id: 4,
    image: null,
  },
  {
    id: 5,
    image: null,
  },
  {
    id: 6,
    image: null,
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
                <PartnersCard/>
            )})
          }
        </div>
      </div>
    </section>
  )
}