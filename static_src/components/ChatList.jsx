import React from 'react';
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';

const ChatList = (props) => {
    const { activeChat } = useParams()

    return (
        <div className="chatlist">
            <div className="chatlist-wrapper">
                {props.list.map((item, index) => (
                    <Link to={`/chats/${index}`}
                        className={`chat-item${(parseInt(activeChat) === index) ? ' _active' : ''}`}
                        key={index}
                    >
                        {item}
                    </Link>
                ))}
            </div>
            <button className="button">Добавить чат</button>
        </div>
    )
}
export default ChatList