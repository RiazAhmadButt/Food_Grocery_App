import { Logo } from '../../components/mainHeader/logo/Logo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AppleStore from "../../../public/assets/AppleStore.png";
import PlayStore from '../../../public/assets/PlaySotre.png';
// import { faWhatsapp } from '@fortawesome/free-solid-svg-icons';

import './Footer.css';

export const Footer = () => {
    return (
        <>        <footer>
            <div className="footer-content-wrapper">
                <div className="footer-col large-25 small-50 tiny-100 ta-l flt footer-contact">
                    <div className='footer-logo'>
                        <Logo />
                    </div>
                    <div className="contactUs">
                        <div className='contactHeading'>
                            <span>Contact Us</span>
                        </div>
                        <div className='wp-contact'>
                            <div>
                                {/* <FontAwesomeIcon icon={faWhatsapp} /> */}
                                <span>Icon</span>
                            </div>
                            <div className='wpa-contact'>
                                <div>
                                    <span className='spanDesign'>Whats App</span>
                                </div>
                                <div>
                                    <span className='spanDesign'>+923449178093</span>
                                </div>
                            </div>
                        </div>
                        <div className='wp-contact'>
                            <div>
                                {/* <FontAwesomeIcon icon={faWhatsapp} /> */}
                                <span>Icon</span>
                            </div>
                            <div className='wpa-contact'>
                                <div>
                                    <span className='spanDesign'>Call Us</span>
                                </div>
                                <div>
                                    <span className='spanDesign'>+923449178093</span>
                                </div>
                            </div>
                        </div>


                        <div>
                        </div>
                    </div>
                    <div className='socailMedia'>
                        <div>
                            <span>Instagram</span>
                        </div>
                        <div>
                            <span>facebook</span>
                        </div>
                        <div>
                            <span>Youtube</span>
                        </div>
                    </div>
                </div>

                {/* col 2  */}
                <div className="footer-col large-25 small-50 tiny-100 ta-l flt col-2">
                    <h3>Popular Categories</h3>
                    <div className='col-2-body'>
                        <span>
                            Fruits & Vegetables Dairy & Breakfasts Egg, Meat & Fish Bath &  Body <br /> Cold drinks & Juices Snacks & Munchies
                        </span>
                    </div>
                </div>
                <div className="footer-col large-25 small-50 tiny-100 ta-l flt col-3">
                    <h3>Customer Services</h3>
                    <div className='col-3-body'>
                        <a href="#">About Us</a>
                        <a href="#">Terms & Conditions</a>
                        <a href="#">FAQ</a>
                        <a href="#">Privacy Policy </a>
                        <a href="#"> E-waste Policy</a>
                        <a href="#">Cancellation & Return Policy</a>
                    </div>
                </div>
                <div className="footer-col large-25 small-50 tiny-100 ta-l flt col-4">
                    <h3>Download App</h3>
                    <div className='stores'>
                        <img src={AppleStore} alt="" />
                        <img src={PlayStore} alt="" />
                    </div>
                </div>
            </div>
            <div className="clearfix"></div>
        </footer>
        </>
    );
};

