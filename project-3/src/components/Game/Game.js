import { useState } from 'react';
import './Game.css';
import RollDice from '../RollDice/RollDice';
import Button from '../Button/Button';

const Game = () => {
    const [selectedNum, setSelectedNum] = useState(-1);
    const [score, setScore] = useState(0);
    const [random, setRandom] = useState();
    const [showErrorMsg, setShowErrorMsg] = useState(false);
    const [showGameRules, setShowGameRules] = useState(false);

    const nums = [1, 2, 3, 4, 5, 6];

    const onSelect = (num) => {
        setSelectedNum(num);
    }

    const handleResetScore = () => {
        setScore(0);
    }

    const handleRollDice = () => {
        if (selectedNum > 0) {
            const randomValue = Math.floor(Math.random() * 6);
            setRandom(randomValue);
            randomValue+1 === selectedNum ? setScore(score + selectedNum) : setScore(score - 2);
            setShowErrorMsg(false);
        } else {
            setShowErrorMsg(true);
        }
    }

    const handleShowGameRules = () => {
        setShowGameRules(!showGameRules);
    }

    console.log(selectedNum);

    return (
        <div className='div'>
            <p className={`error-msg ${!showErrorMsg ? 'hide' : ''}`}>You have not selected any number</p>
            <div className='container'>
                <div className='game-container-head'>
                    <div className='game-container-score'>
                        <div className='game-container-score-counter'>{score}</div>
                        <label className='game-container-score-label'>Total</label>
                    </div>
                    <div className='dice-container'>
                        <div className='dice'>
                            { nums.map((n, index) =>
                                <div className={`dice-number ${selectedNum === n ? 'selected' : ''}`} key={index} onClick={() => onSelect(n)}>{n}</div>
                            ) }
                        </div>
                        <p>Select a Number</p>
                    </div>
                </div>
                <div className='game-container-body'>
                    <RollDice handleResetScore={handleResetScore} handleRollDice={handleRollDice} random={random}/>
                </div>
                <Button btn_txt='Show Rules' handleBtnClick={handleShowGameRules} bgcolor='black' txtcolor='white' />
                <div className={`game-rules ${showGameRules ? 'game-rules-show' : ''}`}>
                    <h1 className='game-rules-title'>How to play dice game</h1>
                    <p>Select any number</p>
                    <p>Click on dice image</p>
                    <p>After click on  dice  if selected number is equal to dice number you will get same point as dice</p>
                    <p>If you get wrong guess then  2 point will be dedcuted</p>
                </div>
            </div>
        </div>
    )
}

export default Game;