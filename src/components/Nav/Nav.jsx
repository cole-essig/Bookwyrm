import "./Nav.css"
import React from "react"
import { Link } from "react-router-dom";

function Nav() {
    const onJoinClick = (e) => {
        e.preventDefault()
        console.log("Join Us")
      };
    
      const onSignInClick = (e) => {
        e.preventDefault();
        console.log('Youre in Bucko!')
      }
    return(
        <>
          <div className='nav'>
                <Link to='/' className='nav__logo'>
                    <p className='nav__logo_text'>Book</p>
                    <img 
                        alt='logo image'
                        className='nav__logo_image'
                        src='src\assets\bookwyrm.png'
                    />
                    <p className='nav__logo_text'>Wyrm</p>                 
                </Link>
                <div className='nav__bar'>
                <Link to='/' className='nav__link'>
                    Reading Hub
                </Link>
                <Link to='/' className='nav__link'>
                    Challenges
                </Link>
                <Link to='/' className='nav__link'>
                    More Info
                </Link>
                <Link to='/' className='nav__link'>
                    Get Started
                </Link> 
                </div>
                <div className='nav__signup_signin'>
                <button className='nav__button_join' type='button' onClick={onJoinClick}>
                    Join
                </button>
                <button className='nav__button_signin' type='button' onClick={onSignInClick}>
                    Sign In
                </button>
                </div>
            </div>
        </>
    )
}

export default Nav;