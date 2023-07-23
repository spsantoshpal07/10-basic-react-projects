import { useContext } from 'react';
import { StartGameContext } from '../../App';
import diceImage from '../../resources/dices 1.png';
import Button from '../Button/Button';

import './StartPage.css';

const StartPage = () => {
    const { handleShowStartGame } = useContext(StartGameContext);

    return (
        <div className='start-page'>
            <div className='start-page-container'>
                <img src={diceImage} alt='dice-pic' />
                <div className='start-page-title-container'>
                    <h1 className='start-page-title'>Dice Game</h1>
                    <Button btn_txt='Start Game' handleBtnClick={handleShowStartGame}/>
                </div>
            </div>
        </div>
    );
}

export default StartPage;