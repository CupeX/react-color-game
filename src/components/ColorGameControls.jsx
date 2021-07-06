import { useState } from 'react'
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
import rgbToHsl from './rgbToHsl'

const ColorGameControls = props => {
  const [colorOption, setColorOption] = useState('hex')

  const { score } = props
  const { trueColor } = props
  const { customLvl } = props
  const { customLvlName } = props
  const { customLvlBoxes } = props

  const radioBtnHandler = e => {
    setColorOption(e.target.value)
  }

  const content = colorOption => {
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

    if (colorOption == 'hex') {
      return <h2 style={{ display: 'inline' }}>{trueColor}</h2>
    } else if (colorOption == 'rgb') {
      return <div>{rgb}</div>
    } else if (colorOption == 'hsl') {
      return <div>{hsl}</div>
    }
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
        {content(colorOption)}

        <div onChange={radioBtnHandler}>
          <div className='form-check form-check-inline'>
            <input
              className='form-check-input'
              id='hex'
              type='radio'
              value='hex'
              name='color'
            />
            <label className='form-check-label' htmlFor='hex'>
              HEX
            </label>
          </div>
          <div className='form-check form-check-inline'>
            <input
              className='form-check-input'
              id='rgb'
              type='radio'
              value='rgb'
              name='color'
            />
            <label className='form-check-label' htmlFor='rgb'>
              RGB
            </label>
          </div>

          <div className='form-check form-check-inline'>
            <input
              className='form-check-input'
              id='hsl'
              type='radio'
              value='hsl'
              name='color'
            />
            <label className='form-check-label' htmlFor='hsl'>
              HSL
            </label>
          </div>
        </div>
      </div>

      <div className='border-bottom border-dark my-3'>
        <div className='d-flex justify-content-between border-bottom border-dark pb-3'>
          {props.lvlButton.map(x => (
            <Button
              key={nanoid()}
              onClick={() => props.onLvlHandler(x * 3)}
              color='success'
              className='mx-1'
            >
              lvl {x}
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
          {customLvl.map(x => (
            <Button
              onClick={() => props.onLvlHandler(x.lvlNumBoxes)}
              color='success'
              className='m-2'
            >
              {x.lvlName}
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
