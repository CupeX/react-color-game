import { useSelector } from 'react-redux'
import {
  setBoxesNumber,
  setTrueColor,
  setColors,
  attemptsIncrement,
  setScore,
  attemptsReset,
  setAllGenerated,
  startNewGame,
  useHint,
  checkForRightColor,
} from '../store/gameInProgress'

const useGameInProgress = () => {
  const {
    allGenerated,
    score,
    attempts,
    colors,
    trueColor,
    activeLevel,
    maxPoints,
    activeLvlBoxCount,
  } = useSelector(state => state.gameInProgress)

  return {
    setBoxesNumber,
    setTrueColor,
    setColors,
    attemptsIncrement,
    setScore,
    attemptsReset,
    setAllGenerated,
    allGenerated,
    score,
    attempts,
    colors,
    trueColor,
    activeLevel,
    startNewGame,
    useHint,
    maxPoints,
    checkForRightColor,
    activeLvlBoxCount,
  }
}

export default useGameInProgress
