import './FoodCards.css';
import FoodCard from '../FoodCard/FoodCard';

const FoodCards = ({ filteredFoodItem }) => {
  return (
    <div className='foodcards'>
      { filteredFoodItem && filteredFoodItem.map((foodItem, i) => <FoodCard key={foodItem.name} food={ foodItem }/>) }
    </div>
  )
}

export default FoodCards;