import {combineReducers, configureStore} from "@reduxjs/toolkit";
import usersReducer from "./UserSlice/UserSlice";
import newsReducer from "./NewsSlice/NewsSlice";

const rootReducer = combineReducers({
    usersReducer,
    newsReducer
})

export const setUpStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setUpStore>
export type AppDispatch = AppStore['dispatch']