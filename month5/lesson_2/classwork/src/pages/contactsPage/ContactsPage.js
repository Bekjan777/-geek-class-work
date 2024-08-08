import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeInput, changeTitleWithParams } from "../../redux/actions";

const ContactsPage = () => {

    const [input, setInput] = useState('')

    const title = useSelector(state => state.contactsReducer.contactsTitle)
    const dispatch = useDispatch()


    return (
        <div>
            <h1>{title}</h1>
            <button onClick={() => dispatch(changeTitleWithParams(23232323232))}>change title with params</button>
            <p>----------------------------------</p>
            <input type='text' onChange={(event) => setInput(event.target.value)} />
            <button onClick={() => dispatch(changeInput(input))}>add</button>
        </div>
    )
}

export default ContactsPage;