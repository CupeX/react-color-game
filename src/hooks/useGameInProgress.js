import { useSelector } from 'react-redux'
import {
  setTrueColor,
  setColors,
  attemptsIncrement,
  setScore,
  attemptsReset,
  setAllGenerated,
  startNewGame,
} from '../store/gameInProgress'

const useGameInProgress = () => {
  const allGenerated = useSelector(state => state.gameInProgress.allGenerated)
  const score = useSelector(state => state.gameInProgress.score)
  const attempts = useSelector(state => state.gameInProgress.attempts)
  const colors = useSelector(state => state.gameInProgress.colors)
  const trueColor = useSelector(state => state.gameInProgress.trueColor)
  const activeLevel = useSelector(state => state.gameInProgress.activeLevel)

  return {
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
  }
}

export default useGameInProgress
