import React from 'react';
import './Header.css';

const Header = () => {
    // Logic cho các nút này sẽ được thêm sau
    const handleGoBack = () => console.log('Go back');
    const handleGoForward = () => console.log('Go forward');

    return (
        <header className="header">
            <div className="navigation-controls">
                <button onClick={handleGoBack} className="nav-btn">
                    {'<'}
                </button>
                <button onClick={handleGoForward} className="nav-btn">
                    {'>'}
                </button>
            </div>
            <div className="user-controls">
                <button className="signup-btn">Đăng ký</button>
                <button className="login-btn">Đăng nhập</button>
            </div>
        </header>
    );
};

export default Header