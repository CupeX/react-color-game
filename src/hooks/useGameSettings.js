import { useSelector } from 'react-redux'
import {
  setBoxesNumber,
  setCustomLevels,
  deleteCustomLevels,
  setHintActive,
  setInitialBoxNumber,
} from '../store/gameSettings'

const useGameSettings = () => {
  const defaultLevels = useSelector(state => state.gameSettings.defaultLevels)
  const curBoxNumber = useSelector(state => state.gameSettings.curBoxNumber)
  const hintActive = useSelector(state => state.gameSettings.hintActive)
  const customLevels = useSelector(state => state.gameSettings.customLevels)
  const activeColorDisplayFormat = useSelector(
    state => state.gameSettings.activeColorDisplayFormat
  )
  const initialBoxNumber = useSelector(
    state => state.gameSettings.initialBoxNumber
  )

  return {
    setBoxesNumber,
    setCustomLevels,
    deleteCustomLevels,
    setHintActive,
    setInitialBoxNumber,
    defaultLevels,
    curBoxNumber,
    hintActive,
    customLevels,
    activeColorDisplayFormat,
    initialBoxNumber,
  }
}

export default useGameSettings
