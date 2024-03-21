import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import Hero from '../Hero';
import About from '../About';
import Gallery from '../Gallery';
import Videos from '../Videos';

const HomePage = (props) => {
    return (
        <div>
            <Header className={['container', 'link_show_trailer']} />
            <main>
                <Hero className={['container', 'link_show_trailer']} />
                {/* TODO: Добавить блок с инфо по актерам или еще чем */}
                <Gallery className={'container'} />
                <About className={'container'} />
                <Videos className={'container'} />
            </main>
            <Footer className={'container'} />
        </div>
    );
};

export default HomePage;
