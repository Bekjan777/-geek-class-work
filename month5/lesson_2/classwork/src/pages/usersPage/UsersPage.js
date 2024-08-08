import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsersAction } from "../../redux/actions";
import User from "../../components/User";

const UsersPage = () => {

    const users = useSelector(state => state.usersReducer.users)

    const dispatch = useDispatch()

    const getUsers = () => {
        dispatch(fetchUsersAction())
    }

    console.log(users)

    useEffect(() => {
        getUsers()
    }, [])

    return (
        <div>
            {users.map(user => <User userInfo={user} />) }
        </div>
    )
}

export default UsersPage;