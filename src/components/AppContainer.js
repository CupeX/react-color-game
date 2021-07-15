import { useEffect } from 'react'
import ColorGamePlayground from './ColorGamePlayground'
import ColorGameControls from './ColorGameControls'
import hexGenerator from './HexGenerator'
import { useDispatch } from 'react-redux'
import ReduxData from './ReduxData'

const AppContainer = () => {
  const dispatch = useDispatch()

  const {
    setTrueColor,
    setColors,
    setScore,
    attemptsReset,
    setAllGenerated,
    setBoxesNumber,
    setHintActive,
    setInitialBoxNumber,
    allGenerated,
    score,
    colors,
    trueColor,
    curBoxNumber,
    hintActive,
    initialBoxNumber,
  } = ReduxData()

  useEffect(() => {
    dispatch(setScore(+window.localStorage.getItem('score')))
  }, [])

  useEffect(() => {
    if (!hintActive) {
      getNewColors()
    }
  }, [curBoxNumber])

  const saveScore = () => {
    window.localStorage.setItem('score', score)
  }
  const resetScore = () => {
    dispatch(setScore(0))
    window.localStorage.removeItem('score')
  }

  const getNewColors = () => {
    const newColors = Array.from(Array(curBoxNumber).keys()).map(() =>
      hexGenerator(6)
    )
    const randomer = newColors[Math.floor(Math.random() * newColors.length)]
    dispatch(setTrueColor(randomer))
    dispatch(setColors(newColors))
    dispatch(setAllGenerated(true))
  }

  const resetHandler = () => {
    dispatch(setHintActive(false))
    dispatch(setBoxesNumber(initialBoxNumber))
    getNewColors()
  }

  const lvlHandler = boxesNumber => {
    dispatch(setHintActive(false))
    dispatch(setInitialBoxNumber(boxesNumber))
    dispatch(setBoxesNumber(boxesNumber))
  }

  const hintHandler = () => {
    dispatch(setHintActive(true))
    const withoutTrueColor = colors.filter(x => x !== trueColor)
    const halfLength = Math.floor(withoutTrueColor.length / 2)
    const halfSize = withoutTrueColor.splice(0, halfLength).concat(trueColor)

    dispatch(attemptsReset())
    dispatch(setColors(halfSize))
    dispatch(setBoxesNumber(halfSize.length))
  }

  return (
    <div>
      {!allGenerated ? (
        <h1>Generating data...</h1>
      ) : (
        <div className='d-flex container'>
          <ColorGameControls
            onHint={() => hintHandler()}
            onSaveScore={() => saveScore()}
            onResetScore={() => resetScore()}
            onResetHandler={() => resetHandler()}
            onColorToggler={() => colorToggler()}
            onLvlHandler={boxesNumber => lvlHandler(boxesNumber)}
          />
          <ColorGamePlayground
            onResetHandler={() => resetHandler()}
            colors={colors}
          />
        </div>
      )}
    </div>
  )
}

export default AppContainer
