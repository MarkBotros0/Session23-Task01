import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    modalOpened: false,
    movie: {}
}

export const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        openModal: (state, action) => {
            state.modalOpened = true
            state.movie = action.payload
        },
        closeModal: (state) => {
            state.modalOpened = false
            state.movie = {}
        }
    },
})

export const { openModal, closeModal } = modalSlice.actions

export default modalSlice.reducer