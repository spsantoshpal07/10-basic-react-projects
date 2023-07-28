import logo from '../../resources/Foody Zone.svg';
import Button from '../Button/Button';

import './Navigation.css';

const Navigation = ({ handleSearch, handleTagSearch }) => {
  return (
    <div className='nav'>
        <div className='nav-logo-container'>
            <img src={logo} alt='FooZone logo'/>
            <input type='text' placeholder='Search Food' onChange={(e) => handleSearch(e)}/>
        </div>
        <div className='nav-food-filters'>
            <Button btnText='All' handleTagSearch={handleTagSearch}/>
            <Button btnText='Breakfast' handleTagSearch={handleTagSearch}/>
            <Button btnText='Lunch' handleTagSearch={handleTagSearch}/>
            <Button btnText='Dinner' handleTagSearch={handleTagSearch}/>
        </div>
    </div>
  )
}

export default Navigation