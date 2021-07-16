import { nanoid } from 'nanoid'
import { Button } from 'reactstrap'
import { useDispatch } from 'react-redux'
import { setActiveColorDisplayFormat } from '../store/gameSettings'
import ButtonComponent from '../common/ButtonComponent'
import RadioBtns from '../common/RadioBtns'
import FormComponent from './FormComponent'
import displayFormat from './displayFormat'
import useCreateCustomLvl from '../hooks/useCreateCustomLvl'
import useGameSettings from '../hooks/useGameSettings'
import useGameInProgress from '../hooks/useGameInProgress'

const ColorGameControls = () => {
  const dispatch = useDispatch()

  const {
    defaultLevels,
    customLevels,
    activeColorDisplayFormat,
    deleteCustomLevels,
  } = useGameSettings()

  const {
    setBoxesNumber,
    score,
    trueColor,
    useHint,
    setScore,
    activeLvlBoxCount,
  } = useGameInProgress()

  let {
    testLabel,
    setTestLabel,
    testBoxesNumber,
    setTestBoxesNumber,
    setCustomLevels,
  } = useCreateCustomLvl()

  const radioBtnHandler = prop => {
    dispatch(setActiveColorDisplayFormat(prop))
  }

  const customLvlBoxesHandler = prop => {
    setTestBoxesNumber(prop)
  }

  const customLvlNameHandler = prop => {
    setTestLabel(prop)
  }

  const deleteCustomLvlsHandler = () => {
    dispatch(deleteCustomLevels())
  }

  const formSubmissionHandler = e => {
    e.preventDefault()
    if (testLabel === '' && testBoxesNumber === '') {
      alert('Please, fill all fields!')
    } else {
      setTestLabel('')
      setTestBoxesNumber('')
      const addLvl = {
        label: testLabel,
        boxesNumber: +testBoxesNumber,
      }

      dispatch(setCustomLevels(addLvl))
    }
  }

  const saveScore = () => {
    window.localStorage.setItem('score', score)
  }
  const resetScore = () => {
    dispatch(setScore(0))
    window.localStorage.removeItem('score')
  }

  const lvlHandler = boxesNumber => {
    dispatch(setBoxesNumber(boxesNumber))
  }

  const hintHandler = () => {
    dispatch(useHint())
  }

  return (
    <div className='col-4 vh-100'>
      <div className='d-flex justify-content-between border-bottom border-dark my-3 pb-3'>
        <h2>score: {score}</h2>
        <ButtonComponent onClick={() => saveScore()} color='success'>
          save score
        </ButtonComponent>
        <ButtonComponent onClick={() => resetScore()} color='danger'>
          reset score
        </ButtonComponent>
      </div>

      <div className='border-bottom border-dark'>
        <h3>Guess the color?</h3>
        {displayFormat(trueColor, activeColorDisplayFormat)}

        <RadioBtns onChange={prop => radioBtnHandler(prop)} />
      </div>

      <div className='border-bottom border-dark my-3'>
        <div className='d-flex justify-content-between border-bottom border-dark pb-3'>
          {defaultLevels.map(x => (
            <Button
              key={nanoid()}
              onClick={() => lvlHandler(x.boxesNumber)}
              color='success'
              className='mx-1'
            >
              {x.label}
            </Button>
          ))}
          <ButtonComponent
            onClick={() => lvlHandler(activeLvlBoxCount)}
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
              onClick={() => lvlHandler(x.boxesNumber)}
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
          onChangeBoxes={prop => customLvlBoxesHandler(prop)}
          customLvlName={testLabel}
          customLvlBoxes={testBoxesNumber}
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

      <Button color='primary' onClick={() => hintHandler()}>
        NEED HELP?
      </Button>
    </div>
  )
}

export default ColorGameControls
