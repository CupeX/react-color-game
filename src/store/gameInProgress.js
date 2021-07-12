import { createSlice } from '@reduxjs/toolkit'

export default gameInProgress({
  reducer: {
    boxesNumber: boxesNumber.Reducer,
    reducedBoxesList: reducedBoxesList.Reducer,
  },
})

const boxesNumber = createSlice({
  name: 'boxesNumber',
  initialState: {
    value: 3,
  },
  reducers: {
    changeBoxesNumber(state, action) {
      state.value = action.payload
    },
  },
})
export const { changeBoxesNumber } = boxesNumber.actions
// export default boxesNumber.reducer;

const reducedBoxesNumber = createSlice({
  name: 'reducedBoxesNumber',
  initialState: {
    value: [],
  },
  reducers: {
    changeReducedBoxesNumber: {
      reducer: (state, action) => {
        state.value = action.payload
      },
    },
  },
})

export const { changeReducedBoxesNumber } = reducedBoxesNumber.actions
