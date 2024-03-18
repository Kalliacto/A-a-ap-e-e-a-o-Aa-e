import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import Hero from '../Hero';
import About from '../About';

const HomePage = (props) => {
    return (
        <div>
            <Header className={['container', 'link_show_trailer']} />
            <main>
                <Hero className={['container', 'link_show_trailer']} />
                <About className={'container'} />
            </main>
            <Footer className={'container'} />
        </div>
    );
};

export default HomePage;
