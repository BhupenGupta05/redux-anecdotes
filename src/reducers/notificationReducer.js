import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    message: null
}

const notificationSlice = createSlice({
    name: 'notification',
    initialState,
    reducers: {
        setNotification(state, action) {
            state.message = action.payload.message
        },
        clearNotification(state, action) {
            state.message = null
        }
    }
})

export const { setNotification, clearNotification } = notificationSlice.actions
export default notificationSlice.reducer