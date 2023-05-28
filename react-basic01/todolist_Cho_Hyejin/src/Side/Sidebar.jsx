import React from 'react';
import './Sidebar.css';

const Sidebar = ({data}) => {
    return(
        <div className="sidebar">
            <h3>Sidebar</h3>
            <div className="sidebar__counts">
                <div className="count">{data.length}<div className="count_text">Total Task</div></div>
                <div className="count">8<div className="count_text">Today Task</div></div>
                <div className="count">5<div className="count_text">Complete</div></div>
                <div className="count">5<div className="count_text">Postpone</div></div>
            </div>
            <div className="sidebar__icon">STAR</div>
        </div>
    )
}

export default Sidebar;