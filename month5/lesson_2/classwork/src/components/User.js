import React from "react";

const User = ({userInfo}) => {

    return (
        <ul>
            <li>name: {userInfo.name}</li>
            <li>email: {userInfo.email}</li>
            <li>username: {userInfo.username}</li>
            <li>
                <button>get more</button>
            </li>
        </ul>
    )
}

export default User;