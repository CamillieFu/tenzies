import React from 'react'
import '../assets/dice.css'

export default function Dice(props) {

  function Dots() {
    return <span className="dot"></span>
  }

  const diceDots = Array.from({length: props.value}, (_, index) => {
    return <Dots key={index}/>
  });
        return(
            <div
                key={props.id}
                id={`dice-${props.value}`}
                className={props.held ? "held dice" : "dice"}
                onClick={props.hold}
            >
              {diceDots}
           </div>
        )
}
