import './Header.css';
import React from 'react';
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
            <div className='header__logo'>
                <img 
                    alt='logo image'
                    className='header__logo_image'
                    src='src\assets\bookwyrm.png'
                />
            </div>
            <div className='header__bubble'>
                <p className='header__bubble_text'>READ WITH ME!</p>
            </div>
            <div className='header__bubble header__bubble_pulse'></div>
            <div className='header__nav'>
                <Link to='/' className='header__title'>BookWyrm</Link>
                <div className='header__nav_bar'>
                  <Link to='/' className='header__link'>
                    My Page
                  </Link>
                  <Link to='/' className='header__link'>
                    Leaderboards
                  </Link>
                  <Link to='/' className='header__link'>
                    Books
                  </Link>
                  <Link to='/' className='header__link'>
                    About
                  </Link> 
                  <Link to='/' className='header__link'>
                    Rewards
                  </Link> 
                </div>
            </div>
        </header>
    )
}

export default Header;