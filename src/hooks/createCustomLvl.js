import { useState } from 'react'
import ReduxData from '../components/ReduxData'

const useCreateCustomLvl = (x, y) => {
  const { setCustomLevels } = ReduxData()
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
