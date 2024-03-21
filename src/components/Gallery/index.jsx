import React, { useState } from 'react';
import s from './index.module.css';
import cn from 'classnames';
import PreviewGallery from './PreviewGallery';
import GalleryNavigation from './GalleryNavigation';
import MainPhoto from './MainPhoto';
import photos from '../../assets/shotsForGallery/shotsForGallery.json';

const Gallery = ({ className }) => {
    const [indexActivePhoto, setIndexActivePhoto] = useState(0);
    const activePhoto = photos[indexActivePhoto];
    const prevPhoto = photos[indexActivePhoto - 1];
    const nextPhoto = photos[indexActivePhoto + 1];

    return (
        <section className={cn(s.gallery, className)}>
            <div className={s.gallery__container}>
                <MainPhoto prevPhoto={prevPhoto} activePhoto={activePhoto} nextPhoto={nextPhoto} />
                <GalleryNavigation
                    className={s.gallery__navigation}
                    disabledPrev={!prevPhoto}
                    disabledNext={!nextPhoto}
                    onPrevClick={() => {
                        setIndexActivePhoto(indexActivePhoto - 1);
                    }}
                    onNextClick={() => {
                        setIndexActivePhoto(indexActivePhoto + 1);
                    }}
                />
            </div>
            <PreviewGallery
                setIndexActivePhoto={setIndexActivePhoto}
                indexActivePhoto={indexActivePhoto}
                photos={photos}
                className={s.gallery__previewList}
            />
        </section>
    );
};

export default Gallery;
