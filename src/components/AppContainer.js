import { useEffect } from 'react'
import ColorGamePlayground from './ColorGamePlayground'
import ColorGameControls from './ColorGameControls'
import { useDispatch } from 'react-redux'
import useGameInProgress from '../hooks/useGameInProgress'

const AppContainer = () => {
  const dispatch = useDispatch()

  const { activeLvlBoxCount, allGenerated, setBoxesNumber, colors } =
    useGameInProgress()

  useEffect(() => {
    if (colors.length === 0) {
      dispatch(setBoxesNumber(activeLvlBoxCount))
    }
  }, [])

  return (
    <div>
      {!allGenerated ? (
        <h1>Generating data...</h1>
      ) : (
        <div className='d-flex container'>
          <ColorGameControls />
          <ColorGamePlayground />
        </div>
      )}
    </div>
  )
}

export default AppContainer
