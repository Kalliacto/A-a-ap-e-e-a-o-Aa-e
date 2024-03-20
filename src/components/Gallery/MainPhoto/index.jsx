import React from 'react';
import s from './index.module.css';
import Modal from '../../Modal';
import { shots } from '../../../assets/img/gallery';
import Zoom from '../../../assets/img/zoom.svg?react';

const MainPhoto = ({ prevPhoto, activePhoto, nextPhoto }) => {
    const [isModal, setModal] = React.useState(false);

    return (
        <div className={s.main__photo}>
            {!!prevPhoto && (
                <img className={s.main__photo_imagePrev} src={shots[prevPhoto.src]} alt={prevPhoto.description} />
            )}
            <img className={s.main__photo_image} src={shots[activePhoto.src]} alt={activePhoto.description} />
            <div className={s.main__photo_zoom}>
                <Zoom onClick={() => setModal(true)} />
            </div>
            {!!nextPhoto && (
                <img className={s.main__photo_imageNext} src={shots[nextPhoto.src]} alt={nextPhoto.description} />
            )}
            <Modal isVisible={isModal} content={shots[activePhoto.src]} setModal={setModal} />
        </div>
    );
};

export default MainPhoto;
