import React from 'react';
import {NavLink} from 'react-router-dom'
import Style from './layout.module.css'
const layout = (props) => {
    return (
        <>
        <div className={Style.navLinkWrapper}>
            <NavLink to="/">Historical Data</NavLink>
            <NavLink to="/liveChart">Live OHLC</NavLink>
        </div>
        {props.children}
        </>
    );
};

export default layout;