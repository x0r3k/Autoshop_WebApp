
import TopDealsCard from './TopDealsCard';
import EngineImage from '../../img/topDeals/engine.png';
import TireImage from '../../img/topDeals/tire.png';
import SteeringWheelImage from '../../img/topDeals/steering_wheel.png';
import RepairImage from '../../img/topDeals/repair.png';
import TransmissionImage from '../../img/topDeals/transmission.png';
import BrakesImage from '../../img/topDeals/brakes.png';

const cardConfig = [
  {
    id: 1,
    heading: 'Only 1k$',
    text: 'Premium engine by top dealers',
    image: EngineImage,
  },
  {
    id: 2,
    heading: '4 for 2k$',
    text: 'Tire complete set ',
    image: TireImage,
  },
  {
    id: 3,
    heading: '100$ gift card',
    text: 'When you buy new steering wheel',
    image: SteeringWheelImage,
  },
  {
    id: 4,
    heading: 'New parts',
    text: 'Get new transmissions gears first',
    image: TransmissionImage,
  },
  {
    id: 5,
    heading: '10$ gift card',
    text: 'Buy two sets of repair kit and get special card',
    image: RepairImage,
  },
  {
    id: 6,
    heading: '10% off',
    text: 'Get discount for some specific vehicle parts',
    image: BrakesImage,
  }
]

export default function TopDeals(props) {
  return (
    <section className="top_deals-part main-page-part" id="top_deals">
      <div className="flex-column">
        <div className="flex-row">
          <div className="main_page-part-title text uppercase-text bold-text">
            Top deals
          </div>
        </div>
        <div className="top-deals-cards">
          {
            cardConfig.map(item => {
              return (
                <TopDealsCard
                  key={item.id}
                  {...item}

                />
              )
            })
          }

        </div>
      </div>
    </section>
  );
}