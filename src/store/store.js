import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../components/counterSlice'
import boxesNumberReducer from './boxesNumber'

export default configureStore({
  reducer: {
    counter: counterReducer,
    boxesNumber: boxesNumberReducer,
  },
})
