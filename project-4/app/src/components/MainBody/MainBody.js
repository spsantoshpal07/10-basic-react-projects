import './MainBody.css';

import foodImage from '../../resources/bg.png';
import FoodCards from '../FoodCards/FoodCards';

const MainBody = ({ filteredFoodItem, error }) => {
  return (
    <div className='main' style={{backgroundImage: `url(${foodImage})`}}>
        { !error && <FoodCards filteredFoodItem={ filteredFoodItem }/> }
    </div>
  )
}

export default MainBody;