import { nanoid } from 'nanoid'
import hexToRgb from './HexToRgb'
import rgbToHsl from './RgbToHsl'

const DisplayFormat = (trueColor, activeColorDisplayFormat) => {
  const getColorInFormat = (color, colorFormat) => {
    if (colorFormat == 'hex') {
      return color
    } else if (colorFormat == 'rgb') {
      return hexToRgb(color).rgb
    } else if (colorFormat == 'hsl') {
      return rgbToHsl(...hexToRgb(color).rgbArr)
    }
  }

  return (
    <h2 key={nanoid()} style={{ display: 'inline' }}>
      {getColorInFormat(trueColor, activeColorDisplayFormat)}
    </h2>
  )
}

export default DisplayFormat
