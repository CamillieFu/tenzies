import React from 'react'
import '../assets/dice.css'

export default function Dice(props) {
        return(
            <div
                key={props.id}
                className={props.held ? "held dice" : "dice"}
                onClick={props.hold}
            >
            {props.value}
           </div>
        )
}
