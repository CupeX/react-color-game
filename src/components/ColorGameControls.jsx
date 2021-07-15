import { nanoid } from 'nanoid'
import {
  Button,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
} from 'reactstrap'
import ButtonComponent from './ButtonComponent'
import hexToRgb from './HexToRgb'
import rgbToHsl from './RgbToHsl'
import { useSelector, useDispatch } from 'react-redux'
import { setActiveColorDisplayFormat } from '../store/gameSettings'

const ColorGameControls = props => {
  const dispatch = useDispatch()
  const { score, trueColor, customLvlName, customLvlBoxes, onLvlHandler } =
    props
  const activeColorDisplayFormat = useSelector(
    state => state.gameSettings.activeColorDisplayFormat
  )
  const customLevels = useSelector(state => state.gameSettings.customLevels)

  const displayFormat = () => {
    const rgb = hexToRgb(trueColor).map(x => (
      <h2 key={nanoid()} style={{ display: 'inline' }}>
        {x},
      </h2>
    ))
    const hsl = rgbToHsl(...hexToRgb(trueColor)).map(x => (
      <h2 key={nanoid()} style={{ display: 'inline' }}>
        {x},
      </h2>
    ))

    if (activeColorDisplayFormat == 'hex') {
      return <h2 style={{ display: 'inline' }}>{trueColor}</h2>
    } else if (activeColorDisplayFormat == 'rgb') {
      return <div>{rgb}</div>
    } else if (activeColorDisplayFormat == 'hsl') {
      return <div>{hsl}</div>
    }
  }

  const radioBtnHandler = e => {
    dispatch(setActiveColorDisplayFormat(e.target.value))
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
        {displayFormat()}

        <div onChange={radioBtnHandler}>
          <div className='form-check form-check-inline'>
            <label className='form-check-label' htmlFor='hex'>
              HEX
              <input
                className='form-check-input'
                id='hex'
                type='radio'
                value='hex'
                name='color'
              />
            </label>
          </div>
          <div className='form-check form-check-inline'>
            <label className='form-check-label' htmlFor='rgb'>
              RGB
              <input
                className='form-check-input'
                id='rgb'
                type='radio'
                value='rgb'
                name='color'
              />
            </label>
          </div>

          <div className='form-check form-check-inline'>
            <label className='form-check-label' htmlFor='hsl'>
              HSL
              <input
                className='form-check-input'
                id='hsl'
                type='radio'
                value='hsl'
                name='color'
              />
            </label>
          </div>
        </div>
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

        <form onSubmit={e => props.onFormSubmissionHandler(e)}>
          <InputGroup className='my-2'>
            <InputGroupAddon addonType='prepend'>
              <InputGroupText>add custom lvl name:</InputGroupText>
            </InputGroupAddon>
            <Input
              type='text'
              name='lvl name'
              value={customLvlName}
              onChange={e => props.onCustomLvlNameHandler(e.target.value)}
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
              onChange={e => props.onCustomLvlHandler(e.target.value)}
            />
          </InputGroup>

          <Button type='submit' color='success' className='m-2'>
            add custom lvl
          </Button>
        </form>
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
