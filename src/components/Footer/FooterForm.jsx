import "./FooterForm.css"
import { useState } from "react"

function FooterForm() {
    const [email, setEmail] = useState('');
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("You have subbed dude");
    }
    return(
        <>
        <form className="footer__form" onSubmit={handleSubmit} >
                <input 
                    type='email'
                    className='footer__input'
                    id='footerSub'
                    placeholder='Enter Email'
                    value={email}
                    onChange={handleEmailChange}
                />
                <button type="submit" className="footer__button" >Submit</button>
        </form>
        </>
    )
}

export default FooterForm;