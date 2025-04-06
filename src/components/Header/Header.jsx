import './Header.css';
import React from 'react';
import Nav from '../Nav/Nav';
import HeaderHome from './HeaderHome';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header className='header'>
            <div className='header__background_top'>
                <img 
                    src="src\assets\Header_base_background_z0.svg" 
                    alt="background svg for header look, organic svg shape"
                    className='header__background_image' 
                />
            </div>
            <div className='header__background_base'>
                <img 
                    src='src\assets\Header_base_background_z1.svg'
                    alt='background svg for header look, organic svg shape'
                    className='header__background_image'
                />
            </div>
            <Nav />
            <HeaderHome />
        </header>
    )
}

export default Header;