import {createAsyncThunk, createSlice, Reducer} from "@reduxjs/toolkit";
import axios from "axios";
import {initialUsersTypes} from "./types";


const usersInitialState:initialUsersTypes = {
    users : [],
}

export const fetchUsers = createAsyncThunk(
    'users/fetchUsers',
    async (thunkAPI) => {
        const response = await axios("https://631e270c9f946df7dc3ec0cd.mockapi.io/users")
        return response.data
    }
)

const usersSlice = createSlice({
    name: 'users',
    initialState: usersInitialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            state.users = action.payload
        })
    },
})


export default usersSlice.reducer as Reducer<initialUsersTypes>