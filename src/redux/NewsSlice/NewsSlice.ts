import {createAsyncThunk, createSlice, Reducer} from "@reduxjs/toolkit";
import axios from "axios";
import {initialNewsTypes} from "./types";





const newsInitialState: initialNewsTypes = {
    news : [],
}

export const fetchNews = createAsyncThunk(
    'news/fetchNews',
    async (thunkAPI) => {
        const response = await axios("https://631e270c9f946df7dc3ec0cd.mockapi.io/news")
        return response.data
    }
)

const newsSlice = createSlice({
    name: 'news',
    initialState: newsInitialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchNews.fulfilled, (state, action) => {
            state.news = action.payload
        })
    },
})


export default newsSlice.reducer as Reducer<initialNewsTypes>