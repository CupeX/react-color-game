import { useState } from 'react'
import { useDispatch } from 'react-redux'
import useGameSettings from './useGameSettings'

const useCreateCustomLvl = () => {
  const dispatch = useDispatch()

  const { deleteCustomLevels, setCustomLevels } = useGameSettings()

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

  const formSubmissionHandler = e => {
    e.preventDefault()
    if (customLvlName === '' && customLvlBoxes === '') {
      alert('Please, fill all fields!')
    } else {
      setCustomLvlName('')
      setCustomLvlBoxes('')
      const addLvl = {
        label: customLvlName,
        boxesNumber: +customLvlBoxes,
      }

      dispatch(setCustomLevels(addLvl))
    }
  }

  return {
    customLvlName,
    customLvlBoxes,
    setCustomLvlBoxes,
    setCustomLvlName,
    customLvlNameHandler,
    customLvlBoxesHandler,
    deleteCustomLvlsHandler,
    formSubmissionHandler,
  }
}

export default useCreateCustomLvl
