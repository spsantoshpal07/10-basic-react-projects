import Dice1 from '../../resources/dice_1.png';
import Dice2 from '../../resources/dice_2.png';
import Dice3 from '../../resources/dice_3.png';
import Dice4 from '../../resources/dice_4.png';
import Dice5 from '../../resources/dice_5.png';
import Dice6 from '../../resources/dice_6.png';
import Button from '../Button/Button';

import './RollDice.css';

const RollDice = ({ handleResetScore, handleRollDice, random }) => {
    const dice = [Dice1, Dice2, Dice3, Dice4, Dice5, Dice6];

    console.log(random);

    return (
        <div className='roll-dice-container'>
            <img src={ random ? dice[random] : Dice1 } alt='pic' onClick={handleRollDice} style={{width: '16rem', height:'16rem'}}/>
            <p>Click on Dice to Roll</p>
            <Button btn_txt='Reset Game' handleBtnClick={handleResetScore} />
        </div>
    )
}

export default RollDice;