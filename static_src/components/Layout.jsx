import React, { useState } from 'react';

import Header from './Header.jsx';

const Layout = (props) => {
    return (
        <div className="layout">
            <Header />
            <div className="chatwrapper">
                {props.children}
            </div>
        </div>
    )
}
export default Layout