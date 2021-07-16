import { useEffect } from 'react'
import ColorGamePlayground from './ColorGamePlayground'
import ColorGameControls from './ColorGameControls'
import { useDispatch } from 'react-redux'
import useGameInProgress from '../hooks/useGameInProgress'

const AppContainer = () => {
  const dispatch = useDispatch()

  const { activeLvlBoxCount, setScore, allGenerated, setBoxesNumber } =
    useGameInProgress()

  useEffect(() => {
    dispatch(setBoxesNumber(activeLvlBoxCount))
    dispatch(setScore(+window.localStorage.getItem('score')))
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
