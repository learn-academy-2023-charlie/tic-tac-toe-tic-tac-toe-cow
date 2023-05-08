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
  }
  return (
    <>
      <h1>Tic Tac Toe</h1>
      <Square squares={squares} handleClick={handleClick}/>
      {winner && <h2>{winner} Wins!! </h2> }
      <header> Henri, Justin and Kyle</header>
    </>
  )
}

export default App

