import React from 'react'
import '../assets/main.css'

export default function Main(props) {
  const [count, setCount] = React.useState(0);

  function handleClick() {
    if (!props.tenzies) {
      setCount(prevCount => prevCount + 1);
      props.rollUnheldDice();
    } else {
      setCount(0);
      props.rollUnheldDice();
    }
  }

  return (
    <>
      <div className="game-div">
          <h1>🎲 Tenzies 🎲</h1>
          <p className="game-explanation">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
          {props.diceComponents}
          <button onClick={handleClick}>{props.tenzies ? 'Play Again' : 'Roll Again'}</button>
          {
            props.tenzies && <p className="score-count-msg">You completed this round within {count} rolls.
            {count > 10 ? ' Better luck next time 😅' : ' Great job 🙌'}</p>
          }
      </div>
    </>
  )
}
