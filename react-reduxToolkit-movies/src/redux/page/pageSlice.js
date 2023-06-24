import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    page: 1
}

export const pageSlice = createSlice({
    name: 'page',
    initialState,
    reducers: {
        pressNext: (state) => {
            state.page += 1
        },
        pressPrev: (state) => {
            if (state.page > 1) {
                state.page -= 1
            }
        }
    },
})

export const { pressNext, pressPrev } = pageSlice.actions

export default pageSlice.reducer