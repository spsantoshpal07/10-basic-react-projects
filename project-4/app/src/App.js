import './App.css';
import Navigation from './components/Navigation/Navigation';
import MainBody from './components/MainBody/MainBody';
import { useEffect, useState } from 'react';

function App() {

  const [foodItemsData, setFoodItemsData] = useState([]);
  const [error, setError] = useState(false);
  const [searchedValue, setSearchedValue] = useState('');

  useEffect(() => {
    try {
      fetch("http://localhost:8080/food/getFoodItems")
        .then(resp => resp.json())
        .then(data => {
          setFoodItemsData(data);
        })
    } catch (error) {
      setError(true);
    }
  }, []);

  const handleSearch = (e) => {
    setSearchedValue(e.target.value);
  }

  const handleTagSearch = (value) => {
    if (value === 'All') {
      value = '';
    }
    setSearchedValue(value);
  }

  let filteredFoodItem = foodItemsData
      .filter(food => food.name.toLowerCase().includes(searchedValue.toLowerCase()) 
          || food.type.toLowerCase() === searchedValue.toLowerCase());

  return (
    <div className='app'>
      <Navigation handleSearch={handleSearch} handleTagSearch={handleTagSearch} />
      <MainBody filteredFoodItem={filteredFoodItem} error={error}/>
    </div>
  )
}

export default App;
