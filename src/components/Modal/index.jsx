import React from 'react';
import s from './index.module.css';

const Modal = ({ isVisible = false, content, setModal }) => {
    const onClose = () => {
        setModal(false);
    };

    const keydownHandler = ({ key }) => {
        switch (key) {
            case 'Escape':
                onClose();
                break;
            default:
        }
    };

    React.useEffect(() => {
        document.addEventListener('keydown', keydownHandler);
        return () => document.removeEventListener('keydown', keydownHandler);
    });

    return !isVisible ? null : (
        <div className={s.modal} onClick={onClose}>
            <div className={s.modal__dialog} onClick={(e) => e.stopPropagation()}>
                <span className={s.modal__close} onClick={onClose}>
                    &times;
                </span>
                <img src={content} alt='картинка' />
            </div>
        </div>
    );
};

export default Modal;
