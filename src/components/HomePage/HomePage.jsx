import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import Hero from '../Hero';

const HomePage = (props) => {
    return (
        <div>
            <Header className={'container'} />
            <Hero className={'container'} />
            <Footer className={'container'} />
        </div>
    );
};

export default HomePage;
