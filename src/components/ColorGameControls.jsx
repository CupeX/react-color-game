import { nanoid } from 'nanoid'
import { Button } from 'reactstrap'
import { useDispatch } from 'react-redux'
import { setActiveColorDisplayFormat } from '../store/gameSettings'
import ButtonComponent from '../common/ButtonComponent'
import RadioBtns from '../common/RadioBtns'
import displayFormat from './displayFormat'
import useGameSettings from '../hooks/useGameSettings'
import useGameInProgress from '../hooks/useGameInProgress'
import CustomLevelCreator from './CustomLevelCreator'

const ColorGameControls = () => {
  const dispatch = useDispatch()

  const { defaultLevels, customLevels, activeColorDisplayFormat } =
    useGameSettings()

  const {
    setBoxesNumber,
    score,
    trueColor,
    useHint,
    setScore,
    activeLvlBoxCount,
  } = useGameInProgress()

  const radioBtnHandler = prop => {
    dispatch(setActiveColorDisplayFormat(prop))
  }

  const resetScore = () => {
    dispatch(setScore(0))  
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

        <CustomLevelCreator />
      </div>

      <Button color='primary' onClick={() => hintHandler()}>
        NEED HELP?
      </Button>
    </div>
  )
}

export default ColorGameControls
