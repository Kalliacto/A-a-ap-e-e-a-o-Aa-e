import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import Hero from '../Hero';
import About from '../About';
import Modal from '../Modal';
import Gallery from '../Gallery';

const HomePage = (props) => {
    // const [isModal, setModal] = React.useState(false);
    return (
        <div>
            <Header className={['container', 'link_show_trailer']} />
            <main>
                <Hero className={['container', 'link_show_trailer']} />
                <About className={'container'} />
                <Gallery className={'container'} />
            </main>

            <Footer className={'container'} />

            {/* <>
                Заготовка для модального окна
                <button style={{ background: 'orange' }} onClick={() => setModal(true)}>
                    Click Here
                </button>
                <Modal
                    isVisible={isModal}
                    title='Modal Title'
                    content={<p>Тут будет картинка</p>}
                    footer={<button>Описание картинки будет тут</button>}
                    setModal={setModal}
                />
            </> */}
        </div>
    );
};

export default HomePage;
