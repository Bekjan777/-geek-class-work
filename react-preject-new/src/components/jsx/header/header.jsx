import { useState } from 'react';
import { Link } from "react-router-dom";
import Modal from "../modal.jsx";

export default function Header() {
    const [isModalVisible, setModalVisible] = useState(false);

    const openModal = () => setModalVisible(true);
    const closeModal = () => setModalVisible(false);

    return (
        <>
            <div className="header">
                <div className="container">
                    <div className="inner_header">
                        <a href="/">
                            <div className="logotype">
                                <h2>JavaScript</h2>
                            </div>
                        </a>
                        <ul className="menu">
                            <li className="menu_link">
                                <Link to="/homeworks">Home Works</Link>
                            </li>
                            <li className="menu_link">
                                <Link to="/lessons">Lessons</Link>
                            </li>
                            <li className="menu_link">
                                <Link to="http://t.me/nurdinbuy16" target="_blank">Send Hw</Link>
                            </li>
                            <li className="menu_link">
                                <Link to="/cards">Cards</Link>
                            </li>
                        </ul>
                        <button className="btn" id="btn-get" onClick={openModal}>Click me!</button>
                    </div>
                </div>
            </div>
            {isModalVisible && <Modal isVisible={isModalVisible} onClose={closeModal} />}
        </>
    );
}
