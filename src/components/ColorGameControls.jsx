import { useState } from 'react'
import { nanoid } from 'nanoid'
import { Button } from 'reactstrap'
import { useDispatch } from 'react-redux'
import { setActiveColorDisplayFormat } from '../store/gameSettings'
import ButtonComponent from './ButtonComponent'
import RadioBtns from './RadioBtns'
import FormComponent from './FormComponent'
import DisplayFormat from './DisplayFormat'
import ReduxData from './ReduxData'

const ColorGameControls = props => {
  const dispatch = useDispatch()
  const [customLvlName, setCustomLvlName] = useState('')
  const [customLvlBoxes, setCustomLvlBoxes] = useState('')
  const { onLvlHandler } = props
  const { score, trueColor, customLevels, availableLevels, setCustomLevels } =
    ReduxData()

  const displayColorFormat = DisplayFormat(trueColor)

  const customLvlHandler = prop => {
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
      setCustomLvlBoxes('')
      setCustomLvlName('')
      const addLvl = {
        label: customLvlName,
        boxesNumber: +customLvlBoxes,
      }

      dispatch(setCustomLevels(addLvl))
    }
  }

  const radioBtnHandler = prop => {
    dispatch(setActiveColorDisplayFormat(prop))
  }

  return (
    <div className='col-4 vh-100'>
      <div className='d-flex justify-content-between border-bottom border-dark my-3 pb-3'>
        <h2>score: {score}</h2>
        <ButtonComponent onClick={() => props.onSaveScore()} color='success'>
          save score
        </ButtonComponent>
        <ButtonComponent onClick={() => props.onResetScore()} color='danger'>
          reset score
        </ButtonComponent>
      </div>

      <div className='border-bottom border-dark'>
        <h3>Guess the color?</h3>
        {displayColorFormat}

        <RadioBtns onChange={prop => radioBtnHandler(prop)} />
      </div>

      <div className='border-bottom border-dark my-3'>
        <div className='d-flex justify-content-between border-bottom border-dark pb-3'>
          {availableLevels.map(x => (
            <Button
              key={nanoid()}
              onClick={() => onLvlHandler(x.boxesNumber)}
              color='success'
              className='mx-1'
            >
              {x.label}
            </Button>
          ))}
          <ButtonComponent
            onClick={() => props.onResetHandler()}
            color='danger'
          >
            RESET LVL
          </ButtonComponent>
        </div>

        <div className='overflow-auto my-3' style={{ maxHeight: '20vh' }}>
          <h5>Custom levels:</h5>
          {customLevels.map(x => (
            <Button
              key={nanoid()}
              id={nanoid()}
              onClick={() => onLvlHandler(x.boxesNumber)}
              color='success'
              className='m-2'
            >
              {x.label}
            </Button>
          ))}
        </div>

        <FormComponent
          onSubmit={prop => formSubmissionHandler(prop)}
          onChangeName={prop => customLvlNameHandler(prop)}
          onChangeLvl={prop => customLvlHandler(prop)}
          customLvlName={customLvlName}
          customLvlBoxes={customLvlBoxes}
        />

        <Button
          onClick={() => deleteCustomLvlsHandler()}
          type='btn'
          color='danger'
          className='m-2'
        >
          delete custom levels
        </Button>
      </div>

      <Button color='primary' onClick={() => props.onHint()}>
        NEED HELP?
      </Button>
    </div>
  )
}

export default ColorGameControls
