import { nanoid } from 'nanoid'
import { useDispatch } from 'react-redux'
import ReduxData from './ReduxData'

const ColorGamePlayground = props => {
  const dispatch = useDispatch()
  const {
    trueColor,
    attempts,
    curBoxNumber,
    score,
    colors,
    attemptsReset,
    setScore,
    setColors,
    attemptsIncrement,
  } = ReduxData()

  const checkColorHandler = x => {
    if (x === trueColor) {
      alert(
        `Good job! You get it after ${attempts + 1} attempts, and recive ${
          curBoxNumber - attempts
        } points!`
      )
      dispatch(attemptsReset())
      dispatch(setScore(score + curBoxNumber - attempts))
      props.onResetHandler()
    } else {
      const updatedList = colors.filter(item => x !== item)

      dispatch(setColors(updatedList))
      dispatch(attemptsIncrement())
    }
  }

  return (
    <div className='d-flex flex-wrap justify-content-center align-items-center overflow-auto col-8 vh-100 p-3'>
      <div className='d-flex flex-wrap justify-content-between align-items-center overflow-auto'>
        {colors.map(x => (
          <div key={nanoid()} className=''>
            <button
              className='p-5 m-1'
              style={{ background: x }}
              onClick={() => checkColorHandler(x)}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default ColorGamePlayground
