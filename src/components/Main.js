import React from 'react'
import '../assets/main.css'

export default function Main(props) {
    return (
      <>
        <div className="game-div">
            <h1>🎲 Tenzies 🎲</h1>
            <p className="game-explanation">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
            {props.diceComponents}
            <button onClick={props.rollUnheldDice}>{props.tenzies ? 'Play Again' : 'Roll Again'}</button>
        </div>
      </>
    )
}
