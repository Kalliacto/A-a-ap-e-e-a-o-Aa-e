import React from 'react';
import s from './index.module.css';
import cn from 'classnames';
import Logo from '../../assets/img/logo.svg';

const Footer = ({ className }) => {
    return (
        <footer className={s.footer}>
            <div className={cn(s.footer__container, className)}>
                <div className={s.footer__developer}>
                    Developer:
                    <a
                        className={cn(s.footer__link_orange, s.footer__link)}
                        href='https://github.com/Kalliacto'
                        target='_blank'
                    >
                        &nbsp;Kalliacto with Love&#129505;
                    </a>
                </div>
                <p className={s.footer__copyright}>© ПРОКИНО, 2024</p>
                <a className={s.footer__link} href='#logo'>
                    <img className={s.footer__logo} src={Logo} alt='Logo - ПРО КИНО' />
                </a>
            </div>
        </footer>
    );
};

export default Footer;
