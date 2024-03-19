import React from 'react';
import s from './index.module.css';
import { shots } from '../../../assets/img/gallery';
import Zoom from '../../../assets/img/zoom.svg?react';

console.log(Zoom);
const MainPhoto = ({ prevPhoto, activePhoto, nextPhoto }) => {
    return (
        <div className={s.main__photo}>
            {!!prevPhoto && (
                <img className={s.main__photo_imagePrev} src={shots[prevPhoto.src]} alt={prevPhoto.description} />
            )}
            <img className={s.main__photo_image} src={shots[activePhoto.src]} alt={activePhoto.description} />
            <div className={s.main__photo_zoom}>
                <Zoom />
            </div>
            {!!nextPhoto && (
                <img className={s.main__photo_imageNext} src={shots[nextPhoto.src]} alt={nextPhoto.description} />
            )}
        </div>
    );
};

export default MainPhoto;
