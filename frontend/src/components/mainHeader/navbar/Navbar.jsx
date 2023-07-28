import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import './Navbar.css';
import { Logo } from '../logo/Logo';

export const Navbar = () => {
  return (
    <>
      <div className="nav">
        <Logo />
        <div className='search-body'>
          <div className="search">
            <FontAwesomeIcon icon={faSearch} className="searchicon"/>
            <input type="search" placeholder='Search essentials, groceries and more...' className='header-search' />
          </div>
        </div>
        <div className="icons">
          <div className="loginIcon">
            <FontAwesomeIcon icon={faUser} />
            <span>Login</span>
          </div>
          <div className="cartIcon">
            <FontAwesomeIcon icon={faCartShopping} />
            <span>Cart</span>
          </div>
        </div>
      </div>
    </>
  )
}
