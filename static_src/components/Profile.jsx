import React, { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PROFILE_RENAME } from '../store/profile/actions'


const Profile = () => {
    const dispatch = useDispatch()
    const profileName = useSelector((state) => state.profile.name)
    const [isRename, setIsRemname] = useState(false)
    const [inputText, setInputText] = useState('');

    const renameHandler = useCallback((event) => {
        event.preventDefault();

        if (inputText.length === 0) {
            alert('имя введи, умный какой')
        } else {
            dispatch({ type: PROFILE_RENAME, name: inputText })
            setIsRemname(false)
            setInputText('');
        }
    }, [inputText])

    const showRenameHandler = useCallback(() => {
        setIsRemname(true)
    }, [])

    const onChangeNameHandler = (event) => {
        setInputText(event.target.value);
    };

    return (
        <div className="profile">
            <div className="profile-avatar"></div>
            <div className="profile-info">
                <div className="profile-name-wrapper">
                    {isRename && (
                        <form onSubmit={renameHandler} className="form">
                            <input onChange={onChangeNameHandler} value={inputText} placeholder="ваше имя" className="form-input" />
                            <button className="button" type="submit">Подтвердить</button>
                        </form>
                    )}
                    {!isRename && (
                        <>
                            <p className="profile-name">{profileName}</p>
                            <button className="button profile-rename-button" onClick={showRenameHandler}>Изменить имя</button>
                        </>
                    )}
                </div>
                <a href="mailto:example@example.ru" className="profile-mail">example@example.ru</a>
                <p className="profile-about">О себе</p>
            </div>
        </div>

    )
}
export default Profile