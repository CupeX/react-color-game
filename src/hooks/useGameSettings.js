import { useSelector } from 'react-redux'
import { setCustomLevels, deleteCustomLevels } from '../store/gameSettings'

const useGameSettings = () => {
  const defaultLevels = useSelector(state => state.gameSettings.defaultLevels)
  const activeLvlBoxCount = useSelector(
    state => state.gameSettings.activeLvlBoxCount
  )
  const hintActive = useSelector(state => state.gameSettings.hintActive)
  const customLevels = useSelector(state => state.gameSettings.customLevels)
  const activeColorDisplayFormat = useSelector(
    state => state.gameSettings.activeColorDisplayFormat
  )
  const initialBoxNumber = useSelector(
    state => state.gameSettings.initialBoxNumber
  )

  return {
    setCustomLevels,
    deleteCustomLevels,
    defaultLevels,
    activeLvlBoxCount,
    hintActive,
    customLevels,
    activeColorDisplayFormat,
    initialBoxNumber,
  }
}

export default useGameSettings
