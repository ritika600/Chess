import logo from './logo.svg';
import './App.css';
import {gameSubject,initGame,resetGame} from './Game';
import React,{useEffect,useState} from 'react';
import Board from './Board';


function App() {
  const  [board,setBoard] =useState([ ])
  const [isGameOver, setIsGameOver] = useState()
  const [result, setResult] = useState()
  const [turn, setTurn] = useState()
  useEffect(() => {
    initGame()
    const subscribe = gameSubject.subscribe((game) => {setBoard(game.board)
    setBoard(game.board)
    setIsGameOver(game.isGameOver)
    setResult(game.result)
    setTurn(game.turn)
    })
    return () =>subscribe.unsubscribe();
  },[])
  return (
    <div className=" d-flex justify-content-center" id="container" >
      {isGameOver && (
        <h2 className="vertical-text">
          GAME OVER 
          <button onClick={resetGame}>
            <span className="vertical-text"> NEW GAME</span>
          </button>
          </h2>
      )}
      <div className="w-600 h-600" id="board-container">
      <Board board={board} turn={turn}/>
      </div>
      {result && <p className="vertical-text">{result}</p>}
    </div>
  );
}

export default App;
