import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    amount: 16,
}

export const bonusSlice = createSlice({
    name: 'bonus',
    initialState,
    reducers:{
        increment: (state) => {
            state.amount += 1
        },
    }
})

export const { increment } = bonusSlice.actions

export default bonusSlice.reducer