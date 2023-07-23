import { createContext, useState } from 'react';
import './App.css';
import StartPage from './components/StartPage/StartPage';
import Game from './components/Game/Game';

export const StartGameContext = createContext();

function App() {
  const [showStartGame, setShowStartGame] = useState(true);

  const handleShowStartGame = () => {
    setShowStartGame(false);
  }

  return (
    <StartGameContext.Provider value={{ showStartGame, handleShowStartGame }} >
      <div className="App">
        { showStartGame ? <StartPage /> : <Game /> }
      </div>
    </StartGameContext.Provider>
  );
}

export default App;
