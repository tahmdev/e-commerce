import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faUser, faCartShopping, faBars } from '@fortawesome/free-solid-svg-icons'
import Searchbar from './search-bar';
import Sidebar from './Sidebar';
import { useState } from 'react';
const Header = () => {
  let [sideBarVisilbe, setSideBarVisible] = useState(false); 

  return(
    <header className='header'>
      {sideBarVisilbe && <Sidebar setShow={setSideBarVisible} />}
      <div className="flex-container header-top">
        <div>
          <FontAwesomeIcon icon={faCheck} className="header-icon"/>
          <a href="http://localhost:3000/">Deal des Tages</a>
        </div>
        <div>
          <FontAwesomeIcon icon={faCheck} className="header-icon"/>
          <a href="http://localhost:3000/">Corona Infos</a>
        </div>
        <div className='large-only'>
          <FontAwesomeIcon icon={faCheck} className="header-icon"/>
          <a href="http://localhost:3000/" >Finanzierung</a>
        </div>
      </div>

      <nav className='header-middle'>
        <ul>

        </ul>
      </nav>

      <div className="flex-container header-bottom">
        <button className='burger' onClick={() => setSideBarVisible(true)}>
          <FontAwesomeIcon icon={faBars} />
        </button>
        <a href="http://localhost:3000/" >
          <img src='./logo.png' className='logo'/>
        </a>
        <a href="http://localhost:3000/">
          <FontAwesomeIcon icon={faUser} className="header-icon-link"/>
        </a>
        <a href="http://localhost:3000/">
          <FontAwesomeIcon icon={faCartShopping} className="header-icon-link"/>
        </a>
        <Searchbar placeholder="Was suchen Sie?" />
      </div>
    </header>
  )
}
export default Header