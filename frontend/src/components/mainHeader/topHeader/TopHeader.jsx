import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faTruckFast } from '@fortawesome/free-solid-svg-icons';
import { faPercent } from '@fortawesome/free-solid-svg-icons';
import './TopHeader.css';

export const TopHeader = () => {
    return (
        <>
            <div className='topheader'>
                <div className='topHeaderBody'>
                    <div className="head">
                        <span className='topHeadText'>Delivery in 10 minutes</span>
                    </div>
                    <div className="topNav">
                        <div className="location">
                            <FontAwesomeIcon icon={faLocationDot} className="locationIcon" />
                            <span className='topHeadText line'>Deliver to 411017</span>
                        </div>
                        <div className="orderTrack">
                            <FontAwesomeIcon icon={faTruckFast} className="locationIcon" />
                            <span className='topHeadText line'>Track your order</span>
                        </div>
                        <div className="offers">
                            <FontAwesomeIcon icon={faPercent} className="locationIcon" />
                            <span className='topHeadText'>All Offers</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
