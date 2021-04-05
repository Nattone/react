import React from 'react';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

const ChatList = (props) => {
    return (
        <div className="chatlist">
            <List className="chat">
                {props.list.map((item, index) => (
                    <ListItem button
                        className="chat-item"
                        key={index}
                        onClick={() => props.onChange(index)}
                    >
                        {item}
                    </ListItem>
                ))}
            </List>
        </div>

    )
}
export default ChatList