import React from 'react';
import './assets/App.css';
import Main from './components/Main'
import Dice from './components/Dice'
import Confetti from 'react-confetti'
import useWindowSize from "@rooks/use-window-size"

export default function App() {
  const [allDice, setAllDice] = React.useState(allNewDice())
  const {width, height} = useWindowSize()

  const tenzies = allDice.every((dice) => (
      allDice[0].value === dice.value && dice.held ? true : false
  ))

  function randomNumber() {
      return Math.ceil(Math.random() * 6);
  }

  function allNewDice() {
          const newDice = []
          for(let i = 0; i < 10; i++) {
              const die = {
                  held: false,
                  id: i,
                  value: randomNumber()
                  }
              newDice.push(die)
          }
          return newDice
  }

  function holdDice(id) {
      setAllDice(prevDice => prevDice.map(die => {
          return die.id === id ?
              {...die, held: !die.held} :
              die
      }))
  }

  const diceComponents = allDice.map((die) => (
      <Dice key={die.id} {...die} hold={() => holdDice(die.id)} />
  ))

  function rollUnheldDice() {
      if (!tenzies) {
          setAllDice((prevDice) => prevDice.map(die => {
              return die.held ?
              die :
              {...die, value: randomNumber()}
          }))
      } else {
          setAllDice(allNewDice());
      }
  }

  return (
      <div className="game-container">
      {tenzies &&  <Confetti width={width} height={height} />}
          <Main
              dice={allDice}
              diceComponents={diceComponents}
              rollUnheldDice={rollUnheldDice}
              allNewDice={allNewDice}
              tenzies={tenzies}
          />
      </div>
  )
}
