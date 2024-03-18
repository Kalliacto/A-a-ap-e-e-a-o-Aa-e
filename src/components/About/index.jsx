import React from 'react';
import s from './index.module.css';
import cn from 'classnames';

const About = ({ className }) => {
    return (
        <section className={s.about} id='about'>
            <div className={cn(s.about__container, className)}>
                <div className={s.about__content}>
                    <h2 className={s.about__title}>Аватар: Легенда&nbsp;об&nbsp;Аанге</h2>
                    <p className={s.about__description}>
                        Сюжет рассказывает о&nbsp;мальчике из&nbsp;племени воздушных кочевников, Аанге, способном
                        покорять стихию воздуха. В&nbsp;возрасте 11&nbsp;лет, он&nbsp;узнал, что
                        он&nbsp;Аватар&nbsp;&mdash; властелин четырёх стихий. Мир погряз в&nbsp;многолетней войне нации
                        Огня против остального мира, в&nbsp;котором определённые люди способны покорять одну
                        из&nbsp;четырёх стихий&nbsp;&mdash; воду, землю, огонь или воздух. Аанг &mdash; единственный,
                        кто способен покорить все элементы и&nbsp;будучи Аватаром, он&nbsp;должен спасти мир
                        от&nbsp;уничтожения нацией Огня. Со&nbsp;своими новыми друзьями, Катарой и&nbsp;Соккой, Аанг
                        отправляется овладевать стихиями, попутно их&nbsp;преследует изгнанный принц нации
                        Огня&nbsp;&mdash; Зуко, который хочет вернуть себе честь, поймав Аватара.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;
