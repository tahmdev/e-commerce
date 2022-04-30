import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faUser, faCartShopping, faBars, faAngleDown, faAngleRight } from '@fortawesome/free-solid-svg-icons'
import Searchbar from './search-bar';
import Sidebar from './Sidebar';
import { useState } from 'react';
import Popup from './popup';
import WithSlideInBorder from './withSlideInBorder';
import PopupButton from './Popup-button';
const Header = ({selectedMarkt, setSelectedMarkt}) => {
  let [sideBarVisilbe, setSideBarVisible] = useState(false); 
  let [showMeinMarkt, setShowMeinMarkt] = useState(false)

  return(
    <header className='header'>
      {showMeinMarkt && 
      <Popup classes="mein-markt-popup" setShow={setShowMeinMarkt}>
        <h4>Markt wählen</h4>
        <p>Bitte geben Sie Ihre PLZ oder Stadt ein, um Märkte in Ihrer Nähe anzuzeigen.</p>
        <Searchbar placeholder={"PLZ/Stadt"} />
      </Popup> }
      {sideBarVisilbe && <Sidebar setShow={setSideBarVisible} setShowMeinMarkt={setShowMeinMarkt} />}
      <div className=" header-top">
          <div className='container'>
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
        </div>
      
      <div className='container'>
        
        <nav className='header-middle large-only'>
          <ul className='navbar'>
            {
              navbarData.map((item, idx) => {
                return(
                  <li key={idx} > 
                    <WithSlideInBorder style={"1px solid white"}>
                      <a href={item.link} > {item.name} </a>
                    </WithSlideInBorder>
                  </li>
                )
              })
            }
          </ul>
        </nav>

        <div className="flex-container header-bottom">
          <div className='flex-container'>
              <button className='burger' onClick={() => setSideBarVisible(true)} aria-controls="sidebar-wrapper" aria-expanded={sideBarVisilbe}  >
                <FontAwesomeIcon icon={faBars}/>
                <span className='large-only'> Alle Kategorien</span>
              </button>
            <a href="http://localhost:3000/" aria-label='Zurück zur homepage' >
              <img src='./logo.png' className='logo' alt='logo' />
            </a>
          </div>
          <div className='flex-container icon-link-wrapper'>
            <PopupButton aria-label="Login button" popupClasses="login-button-popup" >
              <>
                <FontAwesomeIcon icon={faUser} className="header-icon-link"/>
              </>
              <>
                <a href='http://localhost:3000/' className='login-button' > Anmelden </a>
                <a href='http://localhost:3000/' className='signup-button' > Registrieren </a>
                <a href='http://localhost:3000/'> 
                <FontAwesomeIcon icon={faAngleRight} className="red-text"/>
                <span>{` Mit Club-Kartennummer registrieren`}</span> 
                </a>
              </>
            </PopupButton>
            <a href="http://localhost:3000/" aria-label='Einkaufswagen' >
              <FontAwesomeIcon icon={faCartShopping} className="header-icon-link"/>
            </a>
          </div>
          <Searchbar placeholder="Was suchen Sie?" />
          <PopupButton classes='large-only navbar-MM-button' triangle >
            <>
              <span className="bold"> Mein Markt </span>
              <span> {selectedMarkt || "Kein Markt Ausgewählt"} </span>
            </>
            <>
              <span  className="bold" >Wählen Sie einen Markt</span>
              <Searchbar placeholder={"PLZ"} classes={"popup-button-search"} />
              <a href='http://localhost:3000/'> Alle Märkte anzeigen</a>
            </>
          </PopupButton>
        </div>
      </div>
    </header>
  )
}
export default Header

const navbarData = [
  {
    name: "Angebote",
    link: "http://localhost:3000/"
  },
  {
    name: "OUTLET%",
    link: "http://localhost:3000/"
  },
  {
    name: "Angebote",
    link: "http://localhost:3000/"
  },
  {
    name: "Markt-Fundgrube",
    link: "http://localhost:3000/"
  },
  {
    name: "Handy mit Vertrag",
    link: "http://localhost:3000/"
  },
  {
    name: "Service",
    link: "http://localhost:3000/"
  },
  {
    name: "Club",
    link: "http://localhost:3000/"
  },
  {
    name: "Live-Beratung",
    link: "http://localhost:3000/"
  },
  {
    name: "Geschenkkarte",
    link: "http://localhost:3000/"
  },
  {
    name: "Guthabenkarten",
    link: "http://localhost:3000/"
  },
  {
    name: "Hilfe",
    link: "http://localhost:3000/"
  },
  {
    name: "Business Solutions",
    link: "http://localhost:3000/"
  },
  {
    name: "Fotoservice",
    link: "http://localhost:3000/"
  },
  {
    name: "Partnervorteile",
    link: "http://localhost:3000/"
  },
]