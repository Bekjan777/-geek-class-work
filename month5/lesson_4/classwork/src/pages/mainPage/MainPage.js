import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeTitleAction } from "../../redux/actions";
import Menu from "../../components/Menu";
import 'bootstrap/dist/css/bootstrap.min.css'

const MainPage = () => {

    const mainTitle = useSelector(state => state.mainReducer.title)

    const dispatch = useDispatch()

    return (
        <div>

            <Menu/>
        </div>

    )
}

export default MainPage;