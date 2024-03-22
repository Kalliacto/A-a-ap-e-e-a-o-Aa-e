import React, { useState } from 'react';
import s from './index.module.css';
import cn from 'classnames';
import VideoBtn from './VideoBtn';
import Iframe from 'react-iframe';
import Play from '../../assets/img/play-circle.svg?react';

const btnItem = [
    {
        id: 1,
        label: 'трейлер 1',
        src: 'https://www.youtube.com/embed/ByAn8DF8Ykk',
    },
    { id: 2, label: 'трейлер 2', src: 'https://www.youtube.com/embed/waJKJW_XU90' },
    {
        id: 3,
        label: 'трейлер 3',
        src: 'https://www.youtube.com/embed/Cw12Dat8bkE',
    },
];

const Videos = ({ className }) => {
    const [activeLink, setActiveLink] = useState('https://www.youtube.com/embed/ByAn8DF8Ykk');
    const activeLinkImg = activeLink.match(/\/embed\/([^/\?]+)/)[1];
    const [showTrailer, setShowTrailer] = useState(false);

    const handleActiveLink = (link) => {
        setShowTrailer(false);
        setActiveLink(link);
    };

    return (
        <section className={s.video} id='video'>
            <div className={cn(s.video__container, className)}>
                <ul className={s.video__btns}>
                    {btnItem.map((btn) => (
                        <li key={btn.id} className={s.video__item_btn} onClick={() => handleActiveLink(btn.src)}>
                            <VideoBtn label={btn.label} src={btn.src} activeLink={activeLink} />
                        </li>
                    ))}
                </ul>
                <ul className={s.video__list}>
                    <li className={s.video__item}>
                        <div className={s.video__wrap}>
                            {showTrailer ? (
                                <Iframe
                                    url={`${activeLink}?autoplay=1`}
                                    className={s.video__trailer}
                                    allow='autoplay'
                                ></Iframe>
                            ) : (
                                <div className={s.show}>
                                    <span onClick={() => setShowTrailer((s) => !s)} className={s.show__btn_img}>
                                        <svg
                                            width='64'
                                            height='64'
                                            viewBox='0 0 64 64'
                                            fill='none'
                                            xmlns='http://www.w3.org/2000/svg'
                                        >
                                            <circle cx='32' cy='32' r='32' fill='#FF3D00' />
                                            <path
                                                d='M42.5 31.134C43.1667 31.5189 43.1667 32.4811 42.5 32.866L27.5 41.5263C26.8333 41.9112 26 41.4301 26 40.6603V23.3397C26 22.5699 26.8333 22.0888 27.5 22.4737L42.5 31.134Z'
                                                fill='white'
                                            />
                                        </svg>
                                    </span>
                                    <img src={`https://img.youtube.com/vi/${activeLinkImg}/maxresdefault.jpg`} alt='' />
                                </div>
                            )}
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default Videos;
