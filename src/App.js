import React from 'react';
import $ from 'jquery';

import Main from './Components/Main/Main.jsx';
import Nft from './Components/Nft/Nft.jsx';
import Mint from './Components/Mint/Mint.jsx';
import What from './Components/What/What.jsx';
import Road from './Components/Road/Road.jsx';
import Founders from './Components/Founders/Founders.jsx';
import Faq from './Components/Faq/Faq.jsx';
import Join from './Components/Join/Join.jsx';
import Footer from './Components/Footer/Footer.jsx';
import Menu from './Components/Menu/Menu.jsx';

const App = () => {
    return(
        <>
            <Main />
            <Nft />
            <Mint />
            <What />
            <Road />
            <Founders />
            <Faq />
            <Join />
            <Footer />
            <Menu />
        </>
    )
}

export default App;