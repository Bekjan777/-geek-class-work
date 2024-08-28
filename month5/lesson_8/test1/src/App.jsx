import { useState } from 'react'

import './App.css'
import {useDispatch, useSelector} from "react-redux";
import {registerAdd} from "./store/registerSlice.js";
import {Link} from "react-router-dom";
import {
    BrowserRouter as Router,
    Route,
    Routes
} from 'react-router-dom';
import HomePage from "./pages/HomePage.jsx";
import ProfilePage from "./pages/ProfilePage.jsx";

function App() {


  return (
    <>
        <Router>
        <Link to={`/`}>home</Link>
            <br/>
        <Link to={`/account`}>Profile</Link>

            <Routes>
                <Route path="/" exact element={<HomePage/>} />
                <Route path="/account" element={<ProfilePage />} />
            </Routes>
        </Router>
    </>
  )
}

export default App
