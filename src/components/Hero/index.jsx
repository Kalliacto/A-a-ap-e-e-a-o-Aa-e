import React from 'react';
import s from './index.module.css';
import cn from 'classnames';
import HeroBanner from '../../assets/img/banner_description.png';

const Hero = ({ className }) => {
    return (
        <section className={s.hero}>
            <div className={cn(s.hero__container, className[0])}>
                <h1 className={s.visually_hidden}>Аватар: Легенда&nbsp;об&nbsp;Аанге</h1>
                <img src={HeroBanner} alt='Avatar the last airbender' className={s.hero__banner} />
                <p className={s.hero__date}>
                    <time dateTime='2024-02-22'>22 Февраля</time>
                </p>
                <a className={cn(s.hero__link, className[1])} href='#video'>
                    Смотреть трейлер
                </a>
                <a className={s.hero__arrow} href='#about'>
                    <svg width='64' height='64' viewBox='0 0 64 64' fill='none' xmlns='http://www.w3.org/2000/svg'>
                        <circle cx='32' cy='32' r='31.5' stroke='currentColor' />
                        <path
                            d='M20.1921 26.4547C20.1921 26.2532 20.2718 26.0469 20.4265 25.8922C20.7359 25.5828 21.2421 25.5828 21.5515 25.8922L32.1406 36.4813L42.575 26.0469C42.8843 25.7375 43.3906 25.7375 43.7 26.0469C44.0093 26.3563 44.0093 26.8625 43.7 27.1719L32.7031 38.1735C32.3937 38.4828 31.8875 38.4828 31.5781 38.1735L20.4265 27.0219C20.2671 26.8625 20.1921 26.661 20.1921 26.4547Z'
                            fill='currentColor'
                        />
                    </svg>
                </a>
            </div>
        </section>
    );
};

export default Hero;
