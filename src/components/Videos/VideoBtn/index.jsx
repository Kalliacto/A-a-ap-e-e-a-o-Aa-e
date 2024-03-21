import React from 'react';
import s from './index.module.css';
import cn from 'classnames';

const VideoBtn = ({ label, src, activeLink }) => {
    const active = activeLink === src;

    return (
        <button className={cn(s.video__btn, active ? s.video__btn_active : '')} aria-label={label} data-src={src}>
            {label}
        </button>
    );
};

export default VideoBtn;
