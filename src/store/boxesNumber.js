import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export const boxesTest = createSlice({
  name: 'boxesTest',
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

export const { increment } = boxesTest.actions

export default boxesTest.reducer
