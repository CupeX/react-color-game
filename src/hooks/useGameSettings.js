import { useSelector } from 'react-redux'
import { setCustomLevels, deleteCustomLevels } from '../store/gameSettings'

const useGameSettings = () => {
  const {
    defaultLevels,
    hintActive,
    customLevels,
    activeColorDisplayFormat,
    initialBoxNumber,
  } = useSelector(state => state.gameSettings)

  return {
    setCustomLevels,
    deleteCustomLevels,
    defaultLevels,
    hintActive,
    customLevels,
    activeColorDisplayFormat,
    initialBoxNumber,
  }
}

export default useGameSettings
