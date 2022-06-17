import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faUser,
  faCartShopping,
  faBars,
  faAngleDown,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";
import Searchbar from "./search-bar";
import Sidebar from "./Sidebar";
import { useState } from "react";
import Popup from "./popup";
import WithSlideInBorder from "./withSlideInBorder";
import PopupButton from "./Popup-button";
const Header = ({ selectedMarkt, setSelectedMarkt }) => {
  let [sideBarVisilbe, setSideBarVisible] = useState(false);
  let [showMeinMarkt, setShowMeinMarkt] = useState(false);

  return (
    <header className="header">
      {showMeinMarkt && (
        <Popup classes="mein-markt-popup" setShow={setShowMeinMarkt}>
          <h4>Markt wählen</h4>
          <p>
            Bitte geben Sie Ihre PLZ oder Stadt ein, um Märkte in Ihrer Nähe
            anzuzeigen.
          </p>
          <Searchbar placeholder={"PLZ/Stadt"} />
        </Popup>
      )}
      {sideBarVisilbe && (
        <Sidebar
          setShow={setSideBarVisible}
          setShowMeinMarkt={setShowMeinMarkt}
        />
      )}
      <div className=" header-top">
        <div className="container">
          <div>
            <FontAwesomeIcon icon={faCheck} className="header-icon" />
            <a href="https://tahmdev.github.io/e-commerce/">Deal des Tages</a>
          </div>
          <div>
            <FontAwesomeIcon icon={faCheck} className="header-icon" />
            <a href="https://tahmdev.github.io/e-commerce/">Corona Infos</a>
          </div>
          <div className="large-only">
            <FontAwesomeIcon icon={faCheck} className="header-icon" />
            <a href="https://tahmdev.github.io/e-commerce/">Finanzierung</a>
          </div>
        </div>
      </div>

      <div className="container">
        <nav className="header-middle large-only">
          <ul className="navbar">
            {navbarData.map((item, idx) => {
              return (
                <li key={idx}>
                  <WithSlideInBorder style={"1px solid white"}>
                    <a href={item.link}> {item.name} </a>
                  </WithSlideInBorder>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex-container header-bottom">
          <div className="flex-container">
            <button
              className="burger"
              onClick={() => setSideBarVisible(true)}
              aria-controls="sidebar-wrapper"
              aria-expanded={sideBarVisilbe}
            >
              <FontAwesomeIcon icon={faBars} />
              <span className="large-only"> Alle Kategorien</span>
            </button>
            <a
              href="https://tahmdev.github.io/e-commerce/"
              aria-label="Zurück zur homepage"
            >
              <img src="./logo.png" className="logo" alt="logo" />
            </a>
          </div>
          <div className="flex-container icon-link-wrapper">
            <PopupButton
              aria-label="Login button"
              popupClasses="login-button-popup"
            >
              <>
                <FontAwesomeIcon icon={faUser} className="header-icon-link" />
              </>
              <>
                <a
                  href="https://tahmdev.github.io/e-commerce/"
                  className="login-button"
                >
                  Anmelden
                </a>
                <a
                  href="https://tahmdev.github.io/e-commerce/"
                  className="signup-button"
                >
                  Registrieren
                </a>
                <a href="https://tahmdev.github.io/e-commerce/">
                  <FontAwesomeIcon icon={faAngleRight} className="red-text" />
                  <span>{` Mit Club-Kartennummer registrieren`}</span>
                </a>
              </>
            </PopupButton>
            <a
              href="https://tahmdev.github.io/e-commerce/"
              aria-label="Einkaufswagen"
            >
              <FontAwesomeIcon
                icon={faCartShopping}
                className="header-icon-link"
              />
            </a>
          </div>
          <Searchbar placeholder="Was suchen Sie?" />
          <PopupButton classes="large-only navbar-MM-button" triangle>
            <>
              <span className="bold"> Mein Markt </span>
              <span> {selectedMarkt || "Kein Markt Ausgewählt"} </span>
            </>
            <>
              <span className="bold">Wählen Sie einen Markt</span>
              <Searchbar placeholder={"PLZ"} classes={"popup-button-search"} />
              <a href="https://tahmdev.github.io/e-commerce/">
                {" "}
                Alle Märkte anzeigen
              </a>
            </>
          </PopupButton>
        </div>
      </div>
    </header>
  );
};
export default Header;

const navbarData = [
  {
    name: "Angebote",
    link: "https://tahmdev.github.io/e-commerce/",
  },
  {
    name: "OUTLET%",
    link: "https://tahmdev.github.io/e-commerce/",
  },
  {
    name: "Angebote",
    link: "https://tahmdev.github.io/e-commerce/",
  },
  {
    name: "Markt-Fundgrube",
    link: "https://tahmdev.github.io/e-commerce/",
  },
  {
    name: "Handy mit Vertrag",
    link: "https://tahmdev.github.io/e-commerce/",
  },
  {
    name: "Service",
    link: "https://tahmdev.github.io/e-commerce/",
  },
  {
    name: "Club",
    link: "https://tahmdev.github.io/e-commerce/",
  },
  {
    name: "Live-Beratung",
    link: "https://tahmdev.github.io/e-commerce/",
  },
  {
    name: "Geschenkkarte",
    link: "https://tahmdev.github.io/e-commerce/",
  },
  {
    name: "Guthabenkarten",
    link: "https://tahmdev.github.io/e-commerce/",
  },
  {
    name: "Hilfe",
    link: "https://tahmdev.github.io/e-commerce/",
  },
  {
    name: "Business Solutions",
    link: "https://tahmdev.github.io/e-commerce/",
  },
  {
    name: "Fotoservice",
    link: "https://tahmdev.github.io/e-commerce/",
  },
  {
    name: "Partnervorteile",
    link: "https://tahmdev.github.io/e-commerce/",
  },
];
