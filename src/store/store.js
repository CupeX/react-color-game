import { configureStore } from '@reduxjs/toolkit'
import boxesNumberReducer from './boxesNumber'
import gameInProgress from './gameInProgress'
import reducedBoxesListReducer from './reducedBoxesList'

export default configureStore({
  reducer: {
    boxesNumber: boxesNumberReducer,
    reducedBoxesList: reducedBoxesListReducer,
    gameInProgress: gameInProgress,
  },
})
