import './FoodCard.css';
import Button from '../Button/Button';

const FoodCard = ({ food }) => {
    const {name, imageUrl, text, price} = food;
    return (
        <div className='foodcard'>
            <img src={`http://localhost:8080/food/images/${imageUrl}`} />
            <div className='food-info'>
                <div className='info'>
                    <h1>{name}</h1>
                    <p>{text}</p>
                </div>
                <Button btnText={`$ ${price.toFixed(2)}`}/>
            </div>
        </div>
    )
}

export default FoodCard;