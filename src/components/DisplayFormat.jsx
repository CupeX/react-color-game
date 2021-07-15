import { nanoid } from 'nanoid'
import { useSelector } from 'react-redux'
import hexToRgb from './HexToRgb'
import rgbToHsl from './RgbToHsl'

const DisplayFormat = trueColor => {
  const activeColorDisplayFormat = useSelector(
    state => state.gameSettings.activeColorDisplayFormat
  )

  let content = ''

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
    content = <h2 style={{ display: 'inline' }}>{trueColor}</h2>
  } else if (activeColorDisplayFormat == 'rgb') {
    content = <div>{rgb}</div>
  } else if (activeColorDisplayFormat == 'hsl') {
    content = <div>{hsl}</div>
  }

  return content
}

export default DisplayFormat
