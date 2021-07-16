import { useState } from 'react'
import useGameSettings from './useGameSettings'

const useCreateCustomLvl = () => {
  const { setCustomLevels } = useGameSettings()
  const [testLabel, setTestLabel] = useState('')
  const [testBoxesNumber, setTestBoxesNumber] = useState('')

  return {
    testLabel,
    setTestLabel,
    testBoxesNumber,
    setTestBoxesNumber,
    setCustomLevels,
  }
}

export default useCreateCustomLvl
