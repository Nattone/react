import React from 'react';
import Layout from './Layout.jsx';


const Profile = () => {
    return (
        <div className="profile">
            <div className="profile-avatar"></div>
            <div className="profile-info">
                <p className="profile-nickname">Какое-то Имя</p>
                <a href="#" className="profile-mail">example@example.ru</a>
                <p className="profile-about">О себе</p>
            </div>
        </div>

    )
}
export default Profile