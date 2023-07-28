import React, { useState } from 'react';
import Img50 from '../../../../public/assets/image 50.png';
import Img54 from '../../../../public/assets/image 54.png';
import './FeatureBrands.css'; // Make sure to create the CSS file for styling

const data = [0, 1, 2, 3];

const CardsSlider = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const goToSlide = (index) => {
        setActiveIndex(index);
    };

    return (
        <>
            <div className='vegitableFruites'>
                <div className='head'>
                    <div className='topTitle'>
                        <span className='title'>Featured Brands</span>
                    </div>
                    <div className='viewAll'>
                        <span>View All {'>'} </span>
                    </div>
                </div>
                <hr />
                <div className="cards-slider">
                    <div className="slider-container" style={{ transform: `translateX(-${activeIndex * 100}%)` }}>

                        <div className="slider-card1">
                            <div className='sliderCardDetails'>
                                <div>
                                    <img src={Img54} alt='' className="sliderMainImg2" />
                                </div>
                                <div className='layout-cpt'>
                                    <span className='cpt'>Cook Exotic Dishes</span>
                                </div>
                                <div>
                                    <span className='cpo'>UP to <span style={{fontWeight : 700}}> 20% OFF</span></span>
                                </div>
                            </div>
                            <div>
                                <div>

                                </div>
                                <div>
                                    <img src={Img50} alt='' className="sliderMainImg" />

                                </div>
                            </div>
                        </div>
                        <div className="slider-card2">
                            <div className='sliderCardDetails'>
                                <div>
                                    <img src={Img54} alt='' className="sliderMainImg2" />
                                </div>
                                <div className='layout-cpt cpt2'>
                                    <span className='cpt'>World’s No.1 Rice</span>
                                </div>
                                <div>
                                    <span className='cpo'>UP to <span style={{fontWeight : 700}}> 40% OFF</span></span>
                                </div>
                            </div>
                            <div>
                                <div>

                                </div>
                                <div>
                                    <img src={Img50} alt='' className="sliderMainImg" />

                                </div>
                            </div>
                        </div>
                        <div className="slider-card3">
                            <div className='sliderCardDetails'>
                                <div>
                                    <img src={Img54} alt='' className="sliderMainImg2" />
                                </div>
                                <div className='layout-cpt cpt3'>
                                    <span className='cpt'>Green Tastea!</span>
                                </div>
                                <div>
                                    <span className='cpo'>UP to <span style={{fontWeight : 700}}> 25% OFF</span></span>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <img src={Img50} alt='' className="sliderMainImg" />

                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="dots">
                        {data.map((_, index) => (
                            <span key={index} className={index === activeIndex ? 'dot active' : 'dot'} onClick={() => goToSlide(index)}></span>
                        ))}
                    </div>
                </div>
            </div>


        </>
    );
};

export default CardsSlider;
