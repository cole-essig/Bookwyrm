import './Header.css';
import React from 'react';

function Header() {
    return (
        <header className='header'>
            <div className='header__home'>
                <img 
                alt='logo image'
                className='header__logo'
                src='src\assets\bookwyrm.png'
                />
                <h1 className='header__title'>BookWyrm</h1>
            </div>
        </header>
    )
}

export default Header;