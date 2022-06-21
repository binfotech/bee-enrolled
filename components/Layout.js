import React from 'react';
import Navbar from './navbar/Navbar';
import Footer from './footer/Footer';
const Layout = (props) => (
    <React.Fragment>
        <Navbar/>
        {props.children}
        <Footer />
    </React.Fragment>
);
export default Layout;