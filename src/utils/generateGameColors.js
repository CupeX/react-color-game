import hexGenerator from '../utils/hexGenerator'

const generateGameColors = activeLvlBoxCount => {
  const newColors = Array.from(Array(activeLvlBoxCount).keys()).map(() =>
    hexGenerator(6)
  )
  const randomer = newColors[Math.floor(Math.random() * newColors.length)]

  return { newColors, trueColor: randomer }
}

export default generateGameColors
