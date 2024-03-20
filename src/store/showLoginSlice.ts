import { createSlice } from '@reduxjs/toolkit';

const showLoginSlice = createSlice({
    name: 'showLogin',
    initialState: {
        isOpen: false,
    },
    reducers: {
        openLogin(state) {
            state.isOpen = true;
            console.log(state);
            
        },
        closeLogin(state) {
            state.isOpen = false;
            console.log(state);
        },
    }
});

export const { openLogin, closeLogin } = showLoginSlice.actions;
export default showLoginSlice.reducer;