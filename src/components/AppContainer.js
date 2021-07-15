import { useEffect, useState } from 'react'
import ColorGamePlayground from './ColorGamePlayground'
import ColorGameControls from './ColorGameControls'
import hexGenerator from './HexGenerator'
import { useSelector, useDispatch } from 'react-redux'
import {
  setTrueColor,
  setColors,
  attemptsIncrement,
  setScore,
  attemptsReset,
  setAllGenerated,
} from '../store/gameInProgress'
import {
  setBoxesNumber,
  setCustomLevels,
  deleteCustomLevels,
} from '../store/gameSettings'

const AppContainer = () => {
  const dispatch = useDispatch()

  const allGenerated = useSelector(state => state.gameInProgress.allGenerated)
  const score = useSelector(state => state.gameInProgress.score)
  const attempts = useSelector(state => state.gameInProgress.attempts)
  const colors = useSelector(state => state.gameInProgress.colors)
  const trueColor = useSelector(state => state.gameInProgress.trueColor)
  const activeLevel = useSelector(state => state.gameInProgress.activeLevel)
  const availableLevels = useSelector(
    state => state.gameSettings.availableLevels
  )
  const curBoxNumber = useSelector(state => state.gameSettings.curBoxNumber)
  const customLevels = useSelector(state => state.gameSettings.customLevels)

  useEffect(() => {
    getNewColors()
    dispatch(setScore(+window.localStorage.getItem('score')))
  }, [curBoxNumber, allGenerated])

  const saveScore = () => {
    window.localStorage.setItem('score', score)
  }
  const resetScore = () => {
    dispatch(setScore(0))
    window.localStorage.removeItem('score')
  }

  const getNewColors = () => {
    const newColors = Array.from(Array(curBoxNumber).keys()).map(() =>
      hexGenerator(6)
    )
    const randomer = newColors[Math.floor(Math.random() * newColors.length)]
    dispatch(setTrueColor(randomer))
    dispatch(setColors(newColors))
    dispatch(setAllGenerated(true))
  }

  const checkColorHandler = x => {
    if (x === trueColor) {
      alert(
        `Good job! You get it after ${attempts + 1} attempts, and recive ${
          curBoxNumber - attempts
        } points!`
      )
      dispatch(attemptsReset())
      dispatch(setScore(score + curBoxNumber - attempts))
      resetHandler()
    } else {
      const updatedList = colors.filter(item => x !== item)

      dispatch(setColors(updatedList))
      dispatch(attemptsIncrement())
    }
  }

  const resetHandler = () => {
    getNewColors()
  }

  const lvlHandler = prop => {
    dispatch(setBoxesNumber(prop))
  }

  const customLvlHandler = prop => {
    setCustomLvlBoxes(prop)
  }

  const customLvlNameHandler = prop => {
    setCustomLvlName(prop)
  }

  const deleteCustomLvlsHandler = () => {
    dispatch(deleteCustomLevels())
  }

  const [customLvlName, setCustomLvlName] = useState('')
  const [customLvlBoxes, setCustomLvlBoxes] = useState('')

  const formSubmissionHandler = e => {
    e.preventDefault()
    if (customLvlName === '' && customLvlBoxes === '') {
      alert('Please, fill all fields!')
    } else {
      setCustomLvlBoxes('')
      setCustomLvlName('')
      const addLvl = {
        label: customLvlName,
        boxesNumber: +customLvlBoxes,
      }

      dispatch(setCustomLevels(addLvl))
    }
  }

  const hintHandler = () => {
    const withoutTrueColor = colors.filter(x => x !== trueColor)
    const halfLength = Math.floor(withoutTrueColor.length / 2)
    const halfSize = withoutTrueColor.splice(0, halfLength).concat(trueColor)

    dispatch(setColors(halfSize))
    dispatch(setBoxesNumber(halfSize.length))
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
            customLvlName={customLvlName}
            customLvlBoxes={customLvlBoxes}
            availableLevels={availableLevels}
            score={score}
          />
          <ColorGamePlayground
            onCheckColor={checkColorHandler}
            colors={colors}
          />
        </div>
      )}
    </div>
  )
}

export default AppContainer
