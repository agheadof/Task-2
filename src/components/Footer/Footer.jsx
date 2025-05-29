import './Footer.css'
import logo from '../../assets/imges/Logo.svg'
import mail from '../../assets/imges/mail.svg'
import phone from '../../assets/imges/phone.svg'
import location from '../../assets/imges/location.svg'
import facebook from '../../assets/imges/facebook.svg'
import twitter from '../../assets/imges/twitter.svg'
import linkedin from '../../assets/imges/linkedin.svg'
const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-top'>
                <div className='footer-info'>
                    <div className='footer-logo'>
                        <img src={logo}></img>
                        <p>We believe in the power of play to foster creativity, problem-solving skills, and imagination.</p>
                    </div>
                    <div className='footer-contacts'>
                        <div><img src={mail} />hello@littlelearners.com</div>
                        <div><img src={phone} />+91 91813 23 2309</div>
                        <div><img src={location} />Somewhere in the World</div>
                    </div>
                </div>
                <div className='footer-links'>
                    <div className='footer-links-column'>
                        <h1>Home</h1>
                        <a href='#'>Features</a>
                        <a href='#'>Our Testimonials</a>
                        <a href='#'>FAQ</a>
                    </div>
                    <div className='footer-links-column'>
                        <h1>About Us</h1>
                        <a href='#'>Our Mission</a>
                        <a href='#'>Our Vission</a>
                        <a href='#'>Awards and Recognitions</a>
                        <a href='#'>History</a>
                        <a href='#'>Teachers</a>


                    </div>
                    <div className='footer-links-column'>
                        <h1>Academics</h1>
                        <a href='#'>Special Features</a>
                        <a href='#'>Gallery</a>

                    </div>
                    <div className='footer-links-column'>
                        <h1>Contact Us</h1>
                        <a href='#'>Information</a>
                        <a href='#' > Map & Direction</a>
                    </div>

                </div>
            </div>
            <div className='footer-bottom'>
                <div className='footer-policy'>
                    <div>
                        <a href='#'>Terms of Service</a>
                        <a href='#'>Privacy Policy</a>
                        <a href='#'>Cookie Policy</a>
                    </div>
                    <div>
                        <a href='#'><img src={facebook} /></a>
                        <a href='#'><img src={twitter}/></a>
                        <a href='#'><img src={linkedin}/></a>
                    </div>
                </div>
                <div className='footer-copyrights'>Copyright © [2023] Little Learners Academy. All rights reserved.</div>

            </div>
        </div>
    )
}

export default Footer