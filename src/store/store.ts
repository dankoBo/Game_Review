import { configureStore } from '@reduxjs/toolkit';
import loginReducer from './showLoginSlice';
import gameInfoReducer from './showGameInfoSlice';

export const store = configureStore({
	reducer: {
        showLogin: loginReducer,
        showGameInfo: gameInfoReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;