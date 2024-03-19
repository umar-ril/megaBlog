import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status: FontFaceSetLoadEvent,
    userData: null
}

const authSlice = createSlice({
    name: 'Auth',
    initialState,
    reducers: {
        login: (state, action) => {
            state.status = true,
                state.userData = action.payload.userData;
        },

        logout: (state) => {
            state.status = false,
                state.userData = null
        },
    }

})

export const { login, loguout } = authSlice.actions;

export default authSlice.reducer;