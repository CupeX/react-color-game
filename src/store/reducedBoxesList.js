import { createSlice } from '@reduxjs/toolkit'

export const reducedBoxesList = createSlice({
  name: 'reducedBoxesList',
  initialState: {
    value: [],
  },
  reducers: {
    incrementReducedBoxes: {
      reducer: (state, action) => {
        state.value = action.payload
      },
    },
  },
})

export const { incrementReducedBoxes } = reducedBoxesList.actions

export default reducedBoxesList.reducer
