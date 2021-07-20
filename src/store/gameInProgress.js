import { createSlice } from '@reduxjs/toolkit'
import generateGameColors from '../utils/generateGameColors'

const gameInProgress = createSlice({
  name: 'gameInProgress',
  initialState: {
    trueColor: '',
    colors: [],
    score: 0,
    attempts: 0,
    activeLevel: 'easy',
    allGenerated: true,
    activeLvlBoxCount: 3,
    maxPoints: 3,
  },
  reducers: {
    setScore(state, action) {
      state.score = action.payload
    },
    setTrueColor(state, action) {
      state.trueColor = action.payload
    },
    setColors(state, action) {
      state.colors = action.payload
    },
    attemptsIncrement(state) {
      state.attempts++
    },
    attemptsReset(state) {
      state.attempts = 0
    },
    setAllGenerated(state, action) {
      state.allGenerated = action.payload
    },
    setBoxesNumber(state, action) {
      gameInProgress.caseReducers.startNewGame(state, action.payload)
      state.activeLvlBoxCount = action.payload
      state.maxPoints = action.payload
    },
    startNewGame(state, action) {
      const { newColors, trueColor } = generateGameColors(action)

      state.trueColor = trueColor
      state.colors = newColors
      state.allGenerated = true
    },
    useHint(state) {
      const withoutTrueColor = state.colors.filter(x => x !== state.trueColor)
      const halfLength = Math.floor(withoutTrueColor.length / 2)
      const halfSize = withoutTrueColor
        .splice(0, halfLength)
        .concat(state.trueColor)
        .sort(() => (Math.random() > 0.5 ? 1 : -1))

      state.attempts = 0
      state.colors = halfSize
      state.maxPoints = halfLength + 1
    },
  },
})

export const {
  setTrueColor,
  setScore,
  setColors,
  setBoxesNumber,
  attemptsIncrement,
  attemptsReset,
  setAllGenerated,
  startNewGame,
  useHint,
  checkForRightColor,
} = gameInProgress.actions

export default gameInProgress.reducer
