import React from 'react';
import Banner from './Banner';
import Navbar from './Navbar';

import './style.css';

export default function Header() {
    return (
        <header id="header">
            <Navbar />
            <Banner />
        </header>
    )
}