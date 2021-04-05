import React from 'react';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const ChatList = (props) => {
    return (
        <div className="chatlist">
            <ul className="chat">
                {props.list.map((item, index) => (
                    <li
                        className="chat-item"
                        key={index}
                        onClick={() => props.onChange(index)}
                    >
                        {item}
                    </li>
                ))}
            </ul>

            <List component="nav" aria-label="secondary mailbox folders">
                <ListItem button>
                    <ListItemText primary="Trash" />
                </ListItem>
                <ListItem button>
                    <ListItemText primary="Trash" />
                </ListItem>
                <ListItem button>
                    <ListItemText primary="Trash" />
                </ListItem>
            </List>

        </div>

    )
}
export default ChatList