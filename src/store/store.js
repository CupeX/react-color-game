import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import gameInProgress from './gameInProgress'
import gameSettings from './gameSettings'

export const rootReducer = combineReducers({ gameInProgress, gameSettings })

export default configureStore({
  reducer: {
    gameInProgress: gameInProgress.reducer,
    gameSettings: gameSettings.reducer,
  },
})
