import {createAsyncThunk, createSlice, PayloadAction, Reducer} from "@reduxjs/toolkit";
import axios from "axios";
import {INewsItemType, initialNewsTypes} from "./types";
import {IUsersItemType} from "../UserSlice/types";



const newsInitialState: initialNewsTypes = {
    news : [],
    isLoading: false,
    error: ''
}

export const fetchNews = createAsyncThunk(
    'news/fetchNews',
    async (  thunkAPI) => {
        const response = await axios("https://631e270c9f946df7dc3ec0cd.mockapi.io/news")
        return response.data
    }
)

const newsSlice = createSlice({
    name: 'news',
    initialState: newsInitialState,
    reducers: {
        fetchNews(state) {
            state.isLoading = true
        },
        fetchNewsSuccess(state, action: PayloadAction<INewsItemType[]>) {
            state.isLoading = false
            state.error = ''
            state.news = action.payload
        },
        fetchNewsError(state, action: PayloadAction<string>) {
            state.isLoading = false;
            state.error = action.payload
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchNews.fulfilled, (state, action) => {
            state.news = action.payload
        })
    },
})


export default newsSlice.reducer as Reducer<initialNewsTypes>