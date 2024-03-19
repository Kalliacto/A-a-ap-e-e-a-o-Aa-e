import React from 'react';
import s from './index.module.css';
import cn from 'classnames';

const GalleryNavigation = ({ className, disabledPrev, disabledNext, onPrevClick, onNextClick }) => {
    return (
        <div className={cn(className, s.navigation)}>
            <button
                disabled={disabledPrev}
                className={cn(s.navigation__btn, s.navigation__btn_left)}
                onClick={onPrevClick}
            >
                Previous
            </button>
            <button
                disabled={disabledNext}
                className={cn(s.navigation__btn, s.navigation__btn_right)}
                onClick={onNextClick}
            >
                Next
            </button>
        </div>
    );
};

export default GalleryNavigation;
