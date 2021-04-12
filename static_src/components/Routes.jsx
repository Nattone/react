import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from '../App';
import Layout from './Layout.jsx';
import ChatPage from './ChatPage.jsx';
import Profile from './Profile.jsx';


export const Routes = () => (
    <BrowserRouter>
        <Layout>
            <Switch>
                <Route exact path="/">
                    <App />
                </Route>
                <Route path="/chats/:activeChat">
                    <ChatPage />
                </Route>
                <Route path="/profile">
                    <Profile />
                </Route>
            </Switch>
        </Layout>
    </BrowserRouter>
)

export default Routes