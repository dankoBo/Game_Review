import { createSlice } from '@reduxjs/toolkit';

const showGameInfoSlice = createSlice({
    name: 'showGameInfo',
    initialState: {
        isOpen: false,
    },
    reducers: {
        openGameInfo(state) {
            state.isOpen = true;
            console.log(state);
            
        },
        closeGameInfo(state) {
            state.isOpen = false;
            console.log(state);
        },
    }
});

export const { openGameInfo, closeGameInfo } = showGameInfoSlice.actions;
export default showGameInfoSlice.reducer;