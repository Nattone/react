import React from 'react';
import { Link } from 'react-router-dom';

const Layout = (props) => {
    return (
        <div className="layout">
            <div className="menu">
                <ul className="menu-list">
                    <li className="menu-item">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="menu-item">
                        <Link to="/chats/0">Chats</Link>
                    </li>
                    <li className="menu-item">
                        <Link to="/profile">Profile</Link>
                    </li>
                </ul>
            </div>
            {props.children}
        </div>
    )
}
export default Layout