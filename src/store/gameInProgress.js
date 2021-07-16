import { createSlice } from '@reduxjs/toolkit'
import generateGameColors from '../utils/generateGameColors'
import { setBoxesNumber } from './gameSettings'

const gameInProgress = createSlice({
  name: 'gameInProgress',
  initialState: {
    trueColor: '',
    colors: [],
    score: 0,
    attempts: 0,
    activeLevel: 'easy',
    allGenerated: true,
  },
  extraReducers: {
    [setBoxesNumber]: (state, action) => {
      gameInProgress.caseReducers.startNewGame
    },
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
    startNewGame(state, action) {
      console.log(state, action.payload)
      const { newColors, trueColor } = generateGameColors(action.payload)

      state.trueColor = trueColor
      state.colors = newColors
      state.allGenerated = true
    },
  },
})

export const setScore = gameInProgress.actions.setScore
export const setTrueColor = gameInProgress.actions.setTrueColor
export const setColors = gameInProgress.actions.setColors
export const attemptsIncrement = gameInProgress.actions.attemptsIncrement
export const attemptsReset = gameInProgress.actions.attemptsReset
export const setAllGenerated = gameInProgress.actions.setAllGenerated
export const startNewGame = gameInProgress.actions.startNewGame

export default gameInProgress
