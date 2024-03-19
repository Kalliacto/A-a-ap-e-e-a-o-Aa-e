import React from 'react';
import s from './index.module.css';

const Modal = ({ isVisible = false, title, content, footer, setModal }) => {
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
                <div className={s.modal__header}>
                    <h3 className={s.modal__title}>{title}</h3>
                    <span className={s.modal__close} onClick={onClose}>
                        &times;
                    </span>
                </div>
                <div className={s.modal__body}>
                    <div className={s.modal__content}>{content}</div>
                </div>
                {footer && <div className={s.modal__footer}>{footer}</div>}
                <button onClick={onClose}>Cancel</button>
            </div>
        </div>
    );
};

export default Modal;
