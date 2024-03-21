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
                                <div>
                                    <span onClick={() => setShowTrailer((s) => !s)} className={s.btn__img}>
                                        <Play className={s.play} />
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
