import { createSlice } from '@reduxjs/toolkit'

const gameSettings = createSlice({
  name: 'gameSettings',
  initialState: {
    activeColorDisplayFormat: 'hex',
    defaultLevels: [
      { label: 'easy', boxesNumber: 3 },
      { label: 'medium', boxesNumber: 6 },
      { label: 'hard', boxesNumber: 9 },
    ],
    customLevels: [],
  },
  reducers: {
    setActiveColorDisplayFormat(state, action) {
      state.activeColorDisplayFormat = action.payload
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
export const setCustomLevels = gameSettings.actions.setCustomLevels
export const deleteCustomLevels = gameSettings.actions.deleteCustomLevels

export default gameSettings
