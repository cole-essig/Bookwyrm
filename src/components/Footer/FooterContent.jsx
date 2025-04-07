import "./FooterContent.css"
import React from "react"
import { Link } from "react-router-dom";
import FooterForm from "./FooterForm";

function FooterContent() {
    return(
        <div className="footer__content">
            <div className="footer__logo">
                <p className='footer__logo_text'>Book</p>
                    <img 
                        alt='logo image'
                        className='footer__logo_image'
                        src='src\assets\bookwyrm.png'
                    />
                <p className='footer__logo_text'>Wyrm</p>
            </div>
            <div className="footer__resources">
              <h3 className="footer__title">Resources</h3>
              <Link to='/' className="footer__link">About Us</Link>
              <Link to='/' className="footer__link">Get Started</Link>
              <Link to='/' className="footer__link">Contact Us</Link>
              <Link to='/' className="footer__link">Blog Posts</Link>
              <Link to='/' className="footer__link">Help Center</Link>
            </div>
            <div className="footer__community">
              <h3 className="footer__title">Community</h3>
              <Link to='/' className="footer__link">Hudlow</Link>
              <Link to='/' className="footer__link">Creator Page</Link>
              <Link to='/' className="footer__link">Meet our Libraians</Link>
              <Link to='/' className="footer__link">Schools in Use</Link>
            </div>
            <div className="footer__updates">
              <h3 className="footer__title">Updates</h3>
              <Link to='/' className="footer__link">New Ideas</Link>
              <Link to='/' className="footer__link">Feedback Page</Link>
              <Link to='/' className="footer__link">Top Books</Link>
              <Link to='/' className="footer__link">How to Contribute</Link>
            </div>
            <div className="footer__subscribe">
              <h3 className="footer__title">Subscribe</h3>
              <p className="footer__sub_text">
                Join our newsletter for the latest features, 
                updates and more!
              </p>
              <FooterForm />
            </div>
        </div>
    )
}

export default FooterContent;