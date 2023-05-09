import React, { useState } from 'react'
import Square from './components/Square'
import './App.css'

const App = () => {
  const [squares, setSquares] = useState(Array(9).fill(null))
  const [player, setPlayer] = useState("X")
  const [winner, setWinner] = useState(null)
  
  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }
  const handleClick = (selectedIndex) => {
    if(winner){
      return;
    }
    const newBoard = [...squares];
    if (newBoard[selectedIndex]) {
      return;
    }
    newBoard[selectedIndex] = player

    setSquares(newBoard);
    const newPlayer = player === 'X' ? 'O' :'X'
    setPlayer(newPlayer);
    const gameWinner = calculateWinner(newBoard);
    setWinner(gameWinner);

    if(!gameWinner && !newBoard.includes(null)){
      alert("GAME OVER - IT IS A TIE!");
      handleRestart();
    }
  }
  const handleRestart = () => { setSquares(Array(9).fill(null)); setPlayer("X"); setWinner(null);}



  return (
    <>
      
      <Square squares={squares} handleClick={handleClick}/>
      <br></br>
      {winner && <h2 className="winner" >{winner} Wins!! </h2> }
      <br></br>
      <br></br>
      <button id="button" onClick={handleRestart}>Restart</button>
      <br></br>
      <br></br>
      <br></br>
      <footer> @ Henri, Justin and Kyle</footer>
    </>
  )
}

export default App

