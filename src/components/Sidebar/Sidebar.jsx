import React from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="logo-container">
               
                <h2 className="logo-text">Music App</h2>
            </div>
            <nav className="navigation">
                <ul>
                    <li><NavLink to="/" end>Trang chủ</NavLink></li>
                    <li><NavLink to="/search">Tìm kiếm</NavLink></li>
                    <li><NavLink to="/library">Thư viện</NavLink></li>
                </ul>
            </nav>
            <div className="playlist-section">
                <ul>
                    <li><NavLink to="/playlist/create">Tạo playlist mới</NavLink></li>
                    <li><NavLink to="/favorites">Bài hát đã thích</NavLink></li>
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;