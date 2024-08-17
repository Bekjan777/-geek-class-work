import React, {useState} from "react";
import {logDOM} from "@testing-library/react";

const User = ({userInfo}) => {
    const [show, setShow] = useState(false);
    const {city, geo, street, suite, zipcode} = userInfo.address;
    const {phone, username, website} = userInfo
    // console.log(city, geo, street);
    return (
        <ul>
            <li>name: {userInfo.name}</li>
            <li>email: {userInfo.email}</li>
            <li>username: {userInfo.username}</li>
            <li>
                <button onClick={()=>setShow(prev=>!prev)}>get more</button>
            </li>
            {
                show && (
                    <div className={`more`}>
                        <li>city: {city}</li>
                        <li>geo: {`${geo.lat} ${geo.lng}`}</li>
                        <li>street: {street}</li>
                        <li>suite: {suite}</li>
                        <li>zipcode: {zipcode}</li>
                        <li>phone: {phone}</li>
                        <li>username: {username}</li>
                        <li>website: {website}</li>
                    </div>
                )
            }
        </ul>
    )
}

export default User;