import { useState } from 'react'
import { useDispatch } from 'react-redux'
import useGameSettings from './useGameSettings'

const useCreateCustomLvl = () => {
  const dispatch = useDispatch()

  const { deleteCustomLevels } = useGameSettings()

  const [customLvlName, setCustomLvlName] = useState('')
  const [customLvlBoxes, setCustomLvlBoxes] = useState('')

  const customLvlBoxesHandler = prop => {
    setCustomLvlBoxes(prop)
  }

  const customLvlNameHandler = prop => {
    setCustomLvlName(prop)
  }

  const deleteCustomLvlsHandler = () => {
    dispatch(deleteCustomLevels())
  }

  return {
    customLvlName,
    customLvlBoxes,
    setCustomLvlBoxes,
    setCustomLvlName,
    customLvlNameHandler,
    customLvlBoxesHandler,
    deleteCustomLvlsHandler,
  }
}

export default useCreateCustomLvl
