import "./Footer.css"
import React from "react"
import { Link } from "react-router-dom";
import FooterContent from "./FooterContent";

function Footer() {
    return(
        <footer className="footer">
          <img 
            src="src\assets\Footer_wave.svg"
            alt="waves for top of footer, creates flowing design"
            className="footer__waves"
          />
          <FooterContent />
          <div className="footer__bottom">
                          <div className="footer__copyright">
                            <p className="footer__copyright_text">
                              © 2025 Cole Essig, Powered by Inovation and Love of Learning
                            </p>
                          </div>
                          <div className="footer__bottom_links">
                            <Link to='https://www.instagram.com/'>
                              <img
                                src="src\assets\instagram.svg"
                                alt="instagram icon link"
                                className="footer__icons"
                              />
                            </Link>
                            <Link to='https://github.com/cole-essig/Bookwyrm'>
                              <img 
                                src="src\assets\github.svg"
                                alt="github icon link"
                                className="footer__icons"
                              />
                            </Link>
                            <Link to='https://www.facebook.com/'>
                              <img 
                                src="src\assets\facebook.svg"
                                alt="facebook icon link"
                                className="footer__icons"
                              />
                            </Link>
                            <Link to='https://www.linkedin.com/in/colepessig/'>
                              <img 
                                src="src\assets\linkedIn.svg"
                                alt="linkedin icon link"
                                className="footer__icons"
                              />
                            </Link>
                          </div>
                      </div>
        </footer>
    )
}

export default Footer;