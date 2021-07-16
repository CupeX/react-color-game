import { useEffect } from 'react'
import ColorGamePlayground from './ColorGamePlayground'
import ColorGameControls from './ColorGameControls'
import { useDispatch } from 'react-redux'
import useGameSettings from '../hooks/useGameSettings'
import useGameInProgress from '../hooks/useGameInProgress'

const AppContainer = () => {
  const dispatch = useDispatch()

  const { activeLvlBoxCount } = useGameSettings()
  const { setScore, allGenerated, setBoxesNumber } = useGameInProgress()

  console.log(activeLvlBoxCount)

  useEffect(() => {
    if (activeLvlBoxCount !== undefined) {
      dispatch(setBoxesNumber(activeLvlBoxCount))
    }
    dispatch(setScore(+window.localStorage.getItem('score')))
  }, [activeLvlBoxCount])

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
