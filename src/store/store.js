import { configureStore } from '@reduxjs/toolkit'
import gameInProgress from './gameInProgress'
import gameSettings from './gameSettings'

export default configureStore({
  reducer: {
    gameInProgress: gameInProgress.reducer,
    gameSettings: gameSettings.reducer,
  },
})
