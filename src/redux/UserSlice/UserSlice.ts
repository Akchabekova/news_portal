import {createAsyncThunk, createSlice, PayloadAction, Reducer} from "@reduxjs/toolkit";
import axios from "axios";
import {initialUsersTypes, IUsersItemType} from "./types";
import {fetchNews} from "../NewsSlice/NewsSlice";


const usersInitialState:initialUsersTypes = {
    users : [],
    isLoading: false,
    error: '' ,
}

export const fetchUsers = createAsyncThunk(
    'users/fetchUsers',
    async (values, thunkAPI) => {
        try{
            const response = await axios ("https://631e270c9f946df7dc3ec0cd.mockapi.io/users" )
        } catch ( error ) {
            return thunkAPI.rejectWithValue("Данные не загрузились")
        }
 }
)

export const addUsers = createAsyncThunk(
    "users/addUsers",
    async (values:IUsersItemType, thunkAPI) => {
        try{
            const response = await axios.post ("https://631e270c9f946df7dc3ec0cd.mockapi.io/users", values)
        }catch (error) {
            return thunkAPI.rejectWithValue("Данные не загрузились")
        }
    }
)

const usersSlice = createSlice({
    name: 'users',
    initialState: usersInitialState,
    reducers: {},
    extraReducers: {
        [fetchUsers.pending.type]: (state) => {
            state.isLoading = true
        },
        [fetchUsers.fulfilled.type]: (state, action: PayloadAction<IUsersItemType[]>) => {
            state.users = action.payload
            state.isLoading = false
            state.error = ''
        },
        [fetchNews.rejected.type]: (state, action: PayloadAction<string>) => {
            state.isLoading = false
            state.error = action.payload
        },
        [addUsers.pending.type]: (state) => {
            state.isLoading = true
        },
        [addUsers.fulfilled.type]: (state, action: PayloadAction<IUsersItemType[]>) => {
            state.users = action.payload
            state.isLoading = false
            state.error = ''
        },
        [addUsers.rejected.type]: (state, action: PayloadAction<string>) => {
            state.isLoading = false
            state.error = action.payload
        }
    },

})


export default usersSlice.reducer as Reducer<initialUsersTypes>