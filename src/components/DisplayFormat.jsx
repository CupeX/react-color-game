import { nanoid } from 'nanoid'
import hexToHsl from '../utils/hexToHsl'
import hexToRgb from '../utils/hexToRgb'

const displayFormat = (trueColor, activeColorDisplayFormat) => {
  const getColorInFormat = (color, colorFormat) => {
    if (colorFormat == 'hex') {
      return color
    } else if (colorFormat == 'rgb') {
      return hexToRgb(color)
    } else if (colorFormat == 'hsl') {
      return hexToHsl(color)
    }
  }

  return (
    <h2 key={nanoid()} style={{ display: 'inline' }}>
      {getColorInFormat(trueColor, activeColorDisplayFormat)}
    </h2>
  )
}

export default displayFormat
