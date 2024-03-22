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
                <About className={'container'} />
                <Gallery className={'container'} />
                {/* TODO: Добавить блок с инфо по актерам или еще чем */}
                <Videos className={'container'} />
            </main>
            <Footer className={'container'} />
        </div>
    );
};

export default HomePage;
