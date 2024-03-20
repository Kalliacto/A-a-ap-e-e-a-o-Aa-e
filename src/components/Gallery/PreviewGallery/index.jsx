import React, { useEffect, useMemo, useRef } from 'react';
import s from './index.module.css';
import cn from 'classnames';
import { shots } from '../../../assets/img/gallery';

const PreviewGallery = ({ setIndexActivePhoto, indexActivePhoto, photos, className }) => {
    const previewContainer = useRef(null);

    useEffect(() => {
        if (!previewContainer.current) {
            return;
        }

        previewContainer.current.style.transform = `translate3d(-${indexActivePhoto * 174}px , 0, 0)`;
    }, [indexActivePhoto]);

    return (
        <div className={cn(s.preview__gallery, className)}>
            {useMemo(() => {
                return (
                    <ul className={s.preview__gallery_list} ref={previewContainer}>
                        {photos.map((photo) => (
                            <li
                                key={photo.id}
                                className={s.preview__gallery_preview}
                                onClick={() => setIndexActivePhoto(photo.id - 1)}
                            >
                                <img
                                    className={s.preview__gallery_image}
                                    src={shots[photo.src]}
                                    alt={photo.description}
                                />
                            </li>
                        ))}
                    </ul>
                );
            }, [])}

            <div className={s.preview__gallery_cover}>
                {indexActivePhoto + 1} / {photos.length}
            </div>
        </div>
    );
};

export default PreviewGallery;
