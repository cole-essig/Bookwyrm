import "./HeaderHome.css"
import React from "react"

function HeaderHome() {
    const learnOnClick = () => {
        console.log('learn yoo')
    }
    const readOnClick = () => {
        console.log("READ FOO")
    }
    return(
        <div className="header__content">
            <div className="header__text">
              <p className="header__text_big">Grow Your Dragon.</p>
              <p className="header__text_big">One book at a time.</p>
              <p className="header__text_normal">At read with Bookwyrm, we ignite the passion for reading by heping you track your
                 progress and earn exciting badges. Join challenges that motivateyou and celebrate 
                 your achievements in reading along the way!
              </p>
            </div>

            <div className='header__bubble_read' onClick={readOnClick}>
                <p className='header__bubble_text'>START READING!</p>
            </div>
            <div className='header__bubble_read header__bubble_pulse-read'></div>

            <div className='header__bubble_learn' onClick={learnOnClick}>
                <p className='header__bubble_text'>LEARN MORE!</p>
            </div>
            <div className='header__bubble_learn header__bubble_pulse-learn'></div>
        </div>
    )
}

export default HeaderHome;