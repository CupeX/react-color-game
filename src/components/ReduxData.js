import { useSelector } from 'react-redux'

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
  setHintActive,
  setInitialBoxNumber,
} from '../store/gameSettings'

const ReduxData = () => {
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
  const hintActive = useSelector(state => state.gameSettings.hintActive)

  const initialBoxNumber = useSelector(
    state => state.gameSettings.initialBoxNumber
  )

  return {
    setTrueColor,
    setColors,
    attemptsIncrement,
    setScore,
    attemptsReset,
    setAllGenerated,
    setBoxesNumber,
    setCustomLevels,
    deleteCustomLevels,
    setHintActive,
    setInitialBoxNumber,
    allGenerated,
    score,
    attempts,
    colors,
    trueColor,
    activeLevel,
    availableLevels,
    curBoxNumber,
    hintActive,
    initialBoxNumber,
  }
}

export default ReduxData
