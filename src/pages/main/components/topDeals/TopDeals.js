
import TopDealsCard from './TopDealsCard';
import EngineImage from '../../../../assets/images/engine.png';
import TireImage from '../../../../assets/images/tire.png';
import SteeringWheelImage from '../../../../assets/images/steering_wheel.png';
import RepairImage from '../../../../assets/images/repair.png';
import TransmissionImage from '../../../../assets/images/transmission.png';
import BrakesImage from '../../../../assets/images/brakes.png';

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