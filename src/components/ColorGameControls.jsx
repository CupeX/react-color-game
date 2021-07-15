import { nanoid } from 'nanoid'
import { Button } from 'reactstrap'
import ButtonComponent from './ButtonComponent'
import { useSelector, useDispatch } from 'react-redux'
import { setActiveColorDisplayFormat } from '../store/gameSettings'
import RadioBtns from './RadioBtns'
import FormComponent from './FormComponent'
import DisplayFormat from './DisplayFormat'

const ColorGameControls = props => {
  const { score, trueColor, customLvlName, customLvlBoxes, onLvlHandler } =
    props
  const dispatch = useDispatch()
  const customLevels = useSelector(state => state.gameSettings.customLevels)
  const displayColorFormat = DisplayFormat(trueColor)

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
          {props.availableLevels.map(x => (
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
          onSubmit={prop => props.onFormSubmissionHandler(prop)}
          onChangeName={prop => props.onCustomLvlNameHandler(prop)}
          onChangeLvl={prop => props.onCustomLvlHandler(prop)}
          customLvlName={customLvlName}
          customLvlBoxes={customLvlBoxes}
        />

        <Button
          onClick={() => props.onDeleteCustomLvlsHandler()}
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
