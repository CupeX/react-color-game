import { useState } from 'react'
import { useDispatch } from 'react-redux'
import {
  Button,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
} from 'reactstrap'
import useGameSettings from '../hooks/useGameSettings'

const CustomLevelCreator = () => {
  const dispatch = useDispatch()
  const { setCustomLevels } = useGameSettings()

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

  return (
    <div>
      <form onSubmit={e => formSubmissionHandler(e)}>
        <InputGroup className='my-2'>
          <InputGroupAddon addonType='prepend'>
            <InputGroupText>add custom lvl name:</InputGroupText>
          </InputGroupAddon>
          <Input
            type='text'
            name='lvl name'
            value={customLvlName}
            onChange={e => customLvlNameHandler(e.target.value)}
          />
        </InputGroup>
        <InputGroup className='my-2'>
          <InputGroupAddon addonType='prepend'>
            <InputGroupText>add number of boxes:</InputGroupText>
          </InputGroupAddon>
          <Input
            type='number'
            name='lvls'
            value={customLvlBoxes}
            onChange={e => customLvlBoxesHandler(e.target.value)}
          />
        </InputGroup>

        <Button type='submit' color='success' className='m-2'>
          add custom lvl
        </Button>

        <Button
          onClick={() => deleteCustomLvlsHandler()}
          type='btn'
          color='danger'
          className='m-2'
        >
          delete custom levels
        </Button>
      </form>
    </div>
  )
}

export default CustomLevelCreator
