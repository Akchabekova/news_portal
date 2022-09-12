import React from 'react';
import {Route, Routes} from "react-router-dom";
import  { useEffect } from 'react';
import { useDispatch } from "react-redux";
import HomePage from "./pages/HomePage";
import Users from "./pages/Users";
import News from "./pages/News";
import AddNews from "./pages/AddNews";
import Header from "./components/Header";
import {fetchUsers} from "./redux/UserSlice/UserSlice";
import {AppStore} from "./redux/store";
import {fetchNews} from "./redux/NewsSlice/NewsSlice";

const App = () => {
    const dispatch = useDispatch<AppDispatch>();
    useEffect( ()=> {
        dispatch(fetchUsers())
        dispatch(fetchNews())
    } , [dispatch])
  return (
      <>
      <Header />
      <Routes>
        <Route path="/" element={ <HomePage />}/>
        <Route path="/users" element={ <Users />}/>
        <Route path="/news" element={ <News />}/>
        <Route path="/addnews" element={ <AddNews />}/>
      </Routes>
          </>
  );
};

export type AppDispatch = AppStore['dispatch']
export default App;
