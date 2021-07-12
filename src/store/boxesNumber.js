import { createSlice } from '@reduxjs/toolkit'

export const boxesNumber = createSlice({
  name: 'boxesNumber',
  initialState: {
    value: 3,
  },
  reducers: {
    increment: {
      reducer: (state, action) => {
        state.value = action.payload
      },
    },
  },
})

export const { increment } = boxesNumber.actions

export default boxesNumber.reducer
