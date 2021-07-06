import { useState, useEffect } from 'react'
import ColorGamePlayground from './ColorGamePlayground'
import ColorGameControls from './ColorGameControls'
import hexGenerator from './HexGenerator'
import rgbToHsl from './rgbToHsl'

const AppContainer = () => {
  const [boxesNumber, setBoxesNumber] = useState(3)
  const [scoreCounter, setScoreCounter] = useState(1)
  const [colors, setColors] = useState([])
  const [trueColor, setTrueColor] = useState('')
  const [isHex, setIsHex] = useState(true)
  const [score, setScore] = useState(0)
  const [reducedBoxesList, setReducedBoxesList] = useState([])
  const [lvlButton, setLvlButton] = useState([1, 2, 3, 4, 5])
  const [customLvlName, setCustomLvlName] = useState('')
  const [customLvlBoxes, setCustomLvlBoxes] = useState('')
  const [customLvl, setCustomLvl] = useState([])
  const [allGenerated, setAllGenerated] = useState(false)

  const getNewColors = () => {
    const newColors = Array.from(Array(boxesNumber).keys()).map(() =>
      hexGenerator(6)
    )

    const randomer = newColors[Math.floor(Math.random() * newColors.length)]
    setTrueColor(randomer)
    setColors(newColors)
    setReducedBoxesList(newColors)
    setAllGenerated(true)
  }

  useEffect(() => {
    getNewColors()
    setScore(+window.localStorage.getItem('score'))
  }, [boxesNumber])

  const lvlHandler = prop => {
    setBoxesNumber(prop)
  }

  const resetHandler = () => {
    getNewColors()
  }

  const checkColorHandler = x => {
    if (x === trueColor) {
      alert(
        `Good job! You get it after ${scoreCounter} attempts, and recive ${
          boxesNumber - scoreCounter + 1
        } points!`
      )
      setScoreCounter(1)
      setScore(score + boxesNumber - scoreCounter + 1)
      resetHandler()
    } else {
      const updatedList = reducedBoxesList.filter(item => x !== item)
      setReducedBoxesList(updatedList)
      setScoreCounter(scoreCounter + 1)
    }
  }

  const colorToggler = () => {
    setIsHex(!isHex)
  }

  const resetScore = () => {
    setScore(0)
    window.localStorage.removeItem('score')
  }

  const saveScore = () => {
    window.localStorage.setItem('score', score)
  }

  const customLvlHandler = prop => {
    setCustomLvlBoxes(prop)
  }

  const customLvlNameHandler = prop => {
    setCustomLvlName(prop)
  }

  const formSubmissionHandler = e => {
    e.preventDefault()
    if (customLvlName === '' && customLvlBoxes === '') {
      alert('Please, fill all fields!')
    } else {
      setCustomLvlBoxes('')
      setCustomLvlName('')
      const addLvl = {
        lvlName: customLvlName,
        lvlNumBoxes: +customLvlBoxes,
      }

      setCustomLvl(prevState => [addLvl, ...prevState])
    }
  }

  const deleteCustomLvlsHandler = () => {
    setCustomLvl([])
  }

  const hintHandler = () => {
    const halfLength = Math.floor(colors.length / 2)
    const withoutTrueColor = colors.filter(x => x !== trueColor)
    const halfSize = withoutTrueColor.splice(0, halfLength).concat(trueColor)
    setReducedBoxesList(halfSize)
    setBoxesNumber(halfSize.length)
  }

  return (
    <div>
      {!allGenerated ? (
        <h1>Generating data...</h1>
      ) : (
        <div className='d-flex container'>
          <ColorGameControls
            onHint={() => hintHandler()}
            onSaveScore={() => saveScore()}
            onResetScore={() => resetScore()}
            onResetHandler={() => resetHandler()}
            onColorToggler={() => colorToggler()}
            onLvlHandler={prop => lvlHandler(prop)}
            onCustomLvlHandler={prop => customLvlHandler(prop)}
            onCustomLvlNameHandler={prop => customLvlNameHandler(prop)}
            onDeleteCustomLvlsHandler={() => deleteCustomLvlsHandler()}
            onFormSubmissionHandler={e => formSubmissionHandler(e)}
            trueColor={trueColor}
            customLvl={customLvl}
            customLvlName={customLvlName}
            customLvlBoxes={customLvlBoxes}
            lvlButton={lvlButton}
            score={score}
          />
          <ColorGamePlayground
            onCheckColor={checkColorHandler}
            background={reducedBoxesList}
            trueColor={trueColor}
            score={score}
            boxes={boxesNumber}
          />
        </div>
      )}
    </div>
  )
}

export default AppContainer
