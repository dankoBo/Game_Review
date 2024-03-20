import { configureStore } from '@reduxjs/toolkit';
import loginReducer from './showLoginSlice'

export const store = configureStore({
	reducer: {
        showLogin: loginReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;