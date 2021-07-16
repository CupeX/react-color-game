import { useDispatch } from 'react-redux'
import useGameInProgress from './useGameInProgress'

const useCheckRightColor = () => {
  const dispatch = useDispatch()
  const {
    score,
    attempts,
    maxPoints,
    trueColor,
    activeLvlBoxCount,
    colors,
    attemptsIncrement,
    setColors,
    setScore,
    attemptsReset,
    setBoxesNumber,
  } = useGameInProgress()

  const checkColor = colorToCheck => {
    if (colorToCheck === trueColor) {
      alert(
        `Good job! You get it after ${attempts + 1} attempts, and recive ${
          maxPoints - attempts
        } points!`
      )
      dispatch(setScore(score + maxPoints - attempts))
      dispatch(setBoxesNumber(activeLvlBoxCount))
      dispatch(attemptsReset())
    } else {
      dispatch(attemptsIncrement())
      dispatch(setColors(colors.filter(item => colorToCheck !== item)))
    }
  }

  return { checkColor }
}

export default useCheckRightColor
