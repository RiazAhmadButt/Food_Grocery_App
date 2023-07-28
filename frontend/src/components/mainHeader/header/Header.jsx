import BaseketImg from '../../../../public/assets/basket.png';
import FreshFruitImg from '../../../../public/assets/freshfruits.png';
import './Header.css';

export const Header = () => {
  return (
    <>
      <div className="heder">
        <div className="headin-txt">
          <span className='first'>Best Deal on Gracery</span>
          <span className='second'>Fruits</span>
          <span className='third'>&Vegetables</span>
          <span className='fourth'>UP to <span> 50% OFF</span></span>
        </div>
        <div className="fruit-img">
          <img src={FreshFruitImg} alt=""  />
        </div>
        <div className="basket-img">
          <img src={BaseketImg} alt=""  />
        </div>
      </div>
    </>
  )
}
