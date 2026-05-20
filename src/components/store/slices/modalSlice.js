import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
    name: 'modal',
    initialState: {
        modalDetails: {
            modalTitle: '',
            openPopup: false,
            mode: ''
        }
    },

    reducers: {
        setModalDetails(state, action) {
            state.modalDetails.modalTitle = action.payload.title
            state.modalDetails.openPopup = action.payload.openPopup
            state.modalDetails.mode = action.payload.mode
        }
    },
})

export const { setModalDetails } = modalSlice.actions

export default modalSlice.reducer