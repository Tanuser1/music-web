import React from 'react';
import './PlayerControls.css';

const PlayerControls = () => {
    return (
        <footer className="player-controls-container">
            {/* Phần thông tin bài hát (bên trái) */}
            <div className="song-info">
                <div className="song-thumbnail-placeholder" />
                <div className="song-details">
                    <p className="song-title">Chưa có bài hát</p>
                    <p className="song-artist">...</p>
                </div>
            </div>

            {/* Phần điều khiển chính (ở giữa) */}
            <div className="main-controls">
                <div className="control-buttons">
                    <button className="ctrl-btn">SH</button>
                    <button className="ctrl-btn">{'<<'}</button>
                    <button className="ctrl-btn play-pause-btn">▶</button>
                    <button className="ctrl-btn">{'>>'}</button>
                    <button className="ctrl-btn">LP</button>
                </div>
                <div className="progress-bar-wrapper">
                    <span className="time-stamp">0:00</span>
                    <div className="progress-bar-background">
                        <div className="progress-bar-foreground" style={{ width: '0%' }}></div>
                    </div>
                    <span className="time-stamp">0:00</span>
                </div>
            </div>

            {/* Phần điều khiển phụ (bên phải) */}
            <div className="side-controls">
                <button className="ctrl-btn">VOL</button>
                <div className="volume-bar-background">
                    <div className="volume-bar-foreground" style={{ width: '80%' }}></div>
                </div>
            </div>
        </footer>
    );
};

export default PlayerControls;