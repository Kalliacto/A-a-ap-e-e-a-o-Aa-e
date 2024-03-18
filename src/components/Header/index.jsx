import React from 'react';
import s from './index.module.css';
import cn from 'classnames';
import Logo from '../../assets/img/logo.svg';

const Header = ({ className }) => {
    return (
        <header className={s.header} id='logo'>
            <div className={cn(s.header__container, className)}>
                <img className={s.header__logo} src={Logo} alt='Logo - ПРО КИНО' />
                <a className={cn(s.header__link, s.link_show_trailer)} href='#trailer'>
                    Смотреть трейлер{' '}
                </a>
            </div>
        </header>
    );
};

export default Header;
