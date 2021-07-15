import { createSlice } from '@reduxjs/toolkit'
import { setScore } from './gameInProgress'

const gameSettings = createSlice({
  name: 'gameSettings',
  initialState: {
    curBoxNumber: 3,
    activeColorDisplayFormat: 'hex',
    availableLevels: [
      { label: 'easy', boxesNumber: 3 },
      { label: 'medium', boxesNumber: 6 },
      { label: 'hard', boxesNumber: 9 },
    ],
    customLevels: [],
  },
  extraReducers: {
    // [setScore]: (state, action) => {
    //   console.log(state.activeColorDisplayFormat, 'hello world')
    //   console.log(action)
    // },
  },
  reducers: {
    setActiveColorDisplayFormat(state, action) {
      state.activeColorDisplayFormat = action.payload
    },
    setBoxesNumber(state, action) {
      state.curBoxNumber = action.payload
    },
    setCustomLevels(state, action) {
      state.customLevels.push(action.payload)
    },
    deleteCustomLevels(state) {
      state.customLevels = []
    },
  },
})

export const setActiveColorDisplayFormat =
  gameSettings.actions.setActiveColorDisplayFormat
export const setBoxesNumber = gameSettings.actions.setBoxesNumber
export const setCustomLevels = gameSettings.actions.setCustomLevels
export const deleteCustomLevels = gameSettings.actions.deleteCustomLevels

export default gameSettings
