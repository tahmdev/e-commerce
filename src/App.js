import './App.css';
import Header from './components/Header';
import Banner from './components/banner';
import Carousel from './components/Carousel';
import CarouselCard from './components/carousel-card';
import Gallery from './components/gallery';
import GalleryCard from './components/gallery-card';
import LongCarouselCard from './components/longCarouselCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faEnvelope, faCommentDots, faFilePen} from '@fortawesome/free-solid-svg-icons'
import Accordion from './components/Accordion';
import WithSlideInBorder from './components/withSlideInBorder';
import { useState } from 'react';

function App() {
  let [selectedMarkt, setSelectedMarkt] = useState()
  // Spend a day on fixing the accessiblity 
  
  return (
    <div className="App">
      <Header selectedMarkt={selectedMarkt} setSelectedMarkt={setSelectedMarkt} />
      <section className='banner-section' >
        <Banner />
      </section>
      <Carousel autoScroll={9000} >
        {carousel1Data.map((item, idx) => <CarouselCard key={idx} item={item}  /> )}
      </Carousel>
      
      <main>
        <section>
          <header>
            <h2> Unsere beliebtesten Kategorien</h2>
          </header>
          <Gallery>
            {gallery1Data.map((item, idx) => <GalleryCard key={idx} item={item} /> )}
          </Gallery>
        </section>
        
        <section>
          <header>
            <h2 className='carousel-title' > Aus der Werbung </h2>
          </header>
          <Carousel carouselClass="secondary-carousel" controlsClass="secondary-carousel-controls" autoScroll={9000} >
            {carousel1Data.map((item, idx) => <CarouselCard key={idx} item={item} classes="secondary-card" infoClasses="top" /> )}
          </Carousel>
        </section>
        
        <section className='long-section'>
          <header>
            <h2 className='carousel-title'> Unsere Tageshighlights </h2>
          </header>
          <Carousel carouselClass="long-carousel" controlsClass="long-controls" longCarousel>
            {longCarousel1Data.map((item, idx) => <LongCarouselCard key={idx} item={item} /> )}
          </Carousel>
        </section>

        <section>
          <header>
            <h2 className='carousel-title'> Top Angebote für Sie </h2>
          </header>
          <Carousel carouselClass="secondary-carousel" controlsClass="secondary-carousel-controls" autoScroll={9000} >
            {carousel1Data.map((item, idx) => <CarouselCard key={idx} item={item} classes="secondary-card" infoClasses="top" /> )}
          </Carousel>
        </section>

        <section>
          <header>
            <h2> Die besten Angebote & Aktionen</h2>
          </header>
          <Gallery>
            {gallery2Data.map((item, idx) => <GalleryCard key={idx} item={item} /> )}
          </Gallery>
        </section>

        <section className='long-section'>
          <header>
            <h2 className='carousel-title'> Unsere Topseller</h2>
          </header>
          <Carousel carouselClass="long-carousel" controlsClass="long-controls" longCarousel>
            {longCarousel1Data.map((item, idx) => <LongCarouselCard key={idx} item={item} /> )}
          </Carousel>
        </section>

        <section>
          <header>
            <h2> Highlights für Sie </h2>
          </header>
          <Gallery>
            {gallery1Data.map((item, idx) => <GalleryCard key={idx} item={item} /> )}
          </Gallery>
        </section>

        <section className='long-section'>
          <header>
            <h2 className='carousel-title'> Unsere Empfhehlungen</h2>
          </header>
          <Carousel carouselClass="long-carousel" controlsClass="long-controls" longCarousel>
            {longCarousel1Data.map((item, idx) => <LongCarouselCard key={idx} item={item} /> )}
          </Carousel>
        </section>

        <section>
          <h2>Unsere Service Highlights für Sie</h2>
          <div className='split'>
            <div className='service-box'>
              <h3>Wunschprodukt einfach finanzieren</h3>
              <p>Ein Produkt kaufen oder lieber doch finanzieren? Lange Laufzeiten, 0% effektiver Jahreszins** und alles jederzeit unkompliziert online abschließbar.</p>
              <a className='flex-container' href='http://localhost:3000/'>
                <FontAwesomeIcon className="red-text block" icon={faAngleRight} />
                <WithSlideInBorder style={"2px solid rgb(204, 203, 203)"}>
                  <p>Mehr erfahren</p>
                </WithSlideInBorder>
              </a>
            </div>
            <div className='service-box'>
              <h3>Mieten statt kaufen mit Grover!</h3>
              <p>Viele Produkte bei MediaMarkt können mit unserem Kooperationspartner Grover zu flexiblen Laufzeiten gemietet werden.</p>
              <a className='flex-container' href='http://localhost:3000/'>
                <FontAwesomeIcon className="red-text block" icon={faAngleRight} />
                <WithSlideInBorder style={"2px solid rgb(204, 203, 203)"}>
                  <p>Mehr erfahren</p>
                </WithSlideInBorder>
              </a>
            </div>
            <div className='service-box'>
              <h3>Lieferung / Marktabholung</h3>
              <p>Lassen Sie sich Ihre Bestellung liefern oder holen Sie sie ganz bequem und kostenlos in einem von über 260 Märkten ab.</p>
              <a className='flex-container' href='http://localhost:3000/'>
                <FontAwesomeIcon className="red-text block" icon={faAngleRight} />
                <WithSlideInBorder style={"2px solid rgb(204, 203, 203)"}>
                  <p>Mehr erfahren</p>
                </WithSlideInBorder>
              </a>
            </div>
          </div>
          <button className='responsive-button btn' role="link" > Alle Services entdecken </button>

          <div className='split'>
          <div className='service-box'>
              <h3>Fragen zur Technik?</h3>
              <p>Technikfreude statt Technikfrust? Die Experten der Deutschen Technikberatung nehmen sich gerne die Zeit, Ihre Fragen zu beantworten.</p>
              <a className='flex-container' href='http://localhost:3000/'>
                <FontAwesomeIcon className="red-text block" icon={faAngleRight} />
                <WithSlideInBorder style={"2px solid rgb(204, 203, 203)"}>
                  <p>Mehr erfahren</p>
                </WithSlideInBorder>
              </a>
            </div>
            <div className='service-box'>
              <h3>Noch Fragen? Immer gerne.</h3>
                <div className='service-inner-flex' >
                  <FontAwesomeIcon icon={faCommentDots} className="service-inner-icon" />
                  <p>Hier finden Sie Antworten:<br/>In der <a href='http://localhost:3000/'>Hilfe</a> und bei den <a href='http://localhost:3000/'>Fragen & Antworten</a></p>
                </div>
                <div className='service-inner-flex' >
                  <FontAwesomeIcon icon={faEnvelope} className="service-inner-icon" />
                  <p>Schreiben Sie uns:<br/>Über unser <a href='http://localhost:3000/'>Kontaktformular</a></p>
                </div>
            </div>
          </div>
        </section>
      </main>

      <footer>
          <section>
            <div className='grid-container'>
              <div className='versandpartner'>
                <span> Unsere versandpartner </span>
                <div className='flex-container '>
                  <div className='placeholder' />
                  <div className='placeholder' />
                  <div className='placeholder' />
                </div>
              </div>

              <div className='einfach-bezahlen'>
                <span> Einfach bezahlen </span>
                <div className='flex-container '>
                  <div className='placeholder' />
                  <div className='placeholder' />
                  <div className='placeholder' />
                  <div className='placeholder' />
                  <div className='placeholder' />
                  <div className='placeholder' />
                  <div className='placeholder' />
                  <div className='placeholder' />
                  <div className='placeholder' />
                  <div className='placeholder' />
                  <div className='placeholder' />
                </div>
              </div>
            </div>

            <div className='accordion-flex'>
              <Accordion title="Kontakt">
                <ul>
                  <li>
                    <div className='flex-container' >
                      <FontAwesomeIcon icon={faCommentDots} className="service-inner-icon" />
                      <div>
                        Fragen und Antworten<br/>
                        <a className='flex-container' href='http://localhost:3000/'>
                          <WithSlideInBorder style={"2px solid rgb(204, 203, 203)"}>
                            <p> <FontAwesomeIcon icon={faAngleRight} /> Mehr erfahren</p>
                          </WithSlideInBorder>
                        </a>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className='flex-container' >
                      <FontAwesomeIcon icon={faFilePen} className="service-inner-icon" />
                      <div>
                        Schreiben Sie Uns<br/>
                        <a className='flex-container' href='http://localhost:3000/'>
                          <WithSlideInBorder style={"2px solid rgb(204, 203, 203)"}>
                            <p> <FontAwesomeIcon icon={faAngleRight} /> Mehr erfahren</p>
                          </WithSlideInBorder>
                        </a>
                      </div>
                    </div>
                  </li>

                </ul>
              </Accordion>
              <Accordion title="Aktuell beliebt">
                <ul>
                  <li><a href='http://localhost:3000/'>Laptops</a></li>
                  <li><a href='http://localhost:3000/'>Apple Watch</a></li>
                  <li><a href='http://localhost:3000/'>Apple iPad</a></li>
                  <li><a href='http://localhost:3000/'>PS5 Spiele</a></li>
                  <li><a href='http://localhost:3000/'>Gartenpflege</a></li>
                  <li><a href='http://localhost:3000/'>Nintendo Switch</a></li>
                  <li><a href='http://localhost:3000/'>Gaming PCs</a></li>
                </ul>
              </Accordion>
              <Accordion title="Service">
                <ul>
                  <li><a href='http://localhost:3000/'>Alle Service-Leistungen</a></li>
                  <li><a href='http://localhost:3000/'>Versandinformationen</a></li>
                  <li><a href='http://localhost:3000/'>MediaMarkt Service</a></li>
                  <li><a href='http://localhost:3000/'>FAQ</a></li>
                  <li><a href='http://localhost:3000/'>Altgeräte-Entsorgung</a></li>
                  <li><a href='http://localhost:3000/'>Affiliate Partnerprogramm</a></li>
                  <li><a href='http://localhost:3000/'>Geschäftskunden</a></li>
                  <li><a href='http://localhost:3000/'>Technikberatung</a></li>
                  <li><a href='http://localhost:3000/'>Geschenkkarte</a></li>
                  <li><a href='http://localhost:3000/'>Rückgabe/Retoure</a></li>
                  <li><a href='http://localhost:3000/'>Produktrückruf</a></li>
                  <li><a href='http://localhost:3000/'>Mietservice</a></li>
                </ul>
              </Accordion>
              <Accordion title="Über uns">
                <ul>
                  <li><a href='http://localhost:3000/'>Unternehmen</a></li>
                  <li><a href='http://localhost:3000/'>Unsere Märkte</a></li>
                  <li><a href='http://localhost:3000/'>Verkaufen auf mediamarkt.de</a></li>
                  <li><a href='http://localhost:3000/'>Unsere Marken</a></li>
                  <li><a href='http://localhost:3000/'>Jobs & Karriere</a></li>
                  <li><a href='http://localhost:3000/'>Koch-mit.de</a></li>
                  <li><a href='http://localhost:3000/'>Gamez.de</a></li>
                  <li><a href='http://localhost:3000/'>MediaMagazin</a></li>
                  <li><a href='http://localhost:3000/'>Nachhaltigkeit</a></li>
                  <li><a href='http://localhost:3000/'>Schwachstellen-Offenlegungsprogramm</a></li>
                </ul>
              </Accordion>
            </div>
            <div className='accordion-flex'>
              <div className='split'>
                <div>
                  <a href='http://localhost:3000/' > <img className='logo' src='logo.png' alt="logo" /> </a>
                </div>
                <div className='flex-container'>
                  <WithSlideInBorder style={"2px solid orange"} >
                    <a href='http://localhost:3000/'>
                      <FontAwesomeIcon className='contact-icon' icon={faCommentDots} />
                    </a>
                  </WithSlideInBorder>
                  <WithSlideInBorder style={"2px solid orange"}>
                    <a href='http://localhost:3000/'>
                      <FontAwesomeIcon className='contact-icon' icon={faEnvelope} />
                    </a>
                  </WithSlideInBorder>
                  <WithSlideInBorder style={"2px solid orange"}>
                    <a href='http://localhost:3000/'>
                      <FontAwesomeIcon className='contact-icon' icon={faEnvelope} />
                    </a>
                  </WithSlideInBorder>
                  <WithSlideInBorder style={"2px solid orange"}>
                    <a href='http://localhost:3000/'>
                      <FontAwesomeIcon className='contact-icon' icon={faEnvelope} />
                    </a>
                  </WithSlideInBorder>
                </div> 
              </div>
              <div className='split no-margin'>
                <div>
                <p> Laden Sie unsere App herunter</p>
                  <div className='flex-container wrap' >
                    <a href='http://localhost:3000/' > <img className='logo' src='logo.png' alt="logo" /> </a>
                    <a href='http://localhost:3000/' > <img className='logo' src='logo.png' alt="logo" /> </a>
                    <a href='http://localhost:3000/' > <img className='logo' src='logo.png' alt="logo" /> </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </footer>
    </div>
  );
}

export default App;



const carousel1Data = [
  {
    link: "http://localhost:3000/",
    image: ["./images/cLZv0oE.webp", "alt here"],
    info: ["Yep info"],
    preTitle: "NUR BIS 27.04., 19:59 UHR",
    title: "WOW TITLE",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    tags: []
  },
  {
    link: "http://localhost:3000/",
    image: ["./images/2bPhSZM.webp", "alt here 2"],
    info: ["Yep info", "Another one"],
    preTitle: "Nur bis Gestern",
    title: "WOW TITLE",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    tags: []
  },
  { 
    link: "http://localhost:3000/",
    image: ["./images/vZYA0EH.webp", "alt here 3"],
    info: [],
    preTitle: "Shark.",
    title: "Still a title",
    description: "Lorem ipsum dolor sit amet ",
    tags: ["tags", "wow"]
  },
]

const gallery1Data = [
  {
    image: "https://cms-images.mmst.eu/2rj3gcd43pmw/5nVWWjqTJewdSXVRTdK1ag/14d3fa574168dc7b1c8707eaa73f463e/Saturn_smarttv-kategoriekachel2.jpg?q=80&w=264",
    text: "Smart TVs",
    link: "http://localhost:3000/"
  },
  {
    image: "https://cms-images.mmst.eu/2rj3gcd43pmw/2xJ4cTCQSN1CsFrbUVD2AU/3b5447cf570804d105ca4f58d6d29f95/MM_Smartphone__1_.jpg?q=80&w=264",
    text: "Smartphones",
    link: "http://localhost:3000/"
  },
  {
    image: "https://cms-images.mmst.eu/2rj3gcd43pmw/7rR74GmWdPZuOqVA7q6jSA/14be2966145819ae3d9f05ec73f731ee/category_module_kvs_kuehlgefrierkombi.png?q=80&w=264",
    text: "Kühl-Gefrierkombis",
    link: "http://localhost:3000/"
  },
  {
    image: "https://cms-images.mmst.eu/2rj3gcd43pmw/5H1XiefrMCGNAingV3fet9/51e129569b96286610fcd33d7345bdc5/MM_notebooks-kategoriekachel2.jpg?q=80&w=264",
    text: "Notebooks",
    link: "http://localhost:3000/"
  },
  {
    image: "https://cms-images.mmst.eu/2rj3gcd43pmw/3B74wcO4OqCahejil6OgXd/f50462d46e23349e5088295bb1caf33b/MM_GamingKategorieModul.jpg?q=80&w=264",
    text: "Gaming & VR",
    link: "http://localhost:3000/"
  },
  {
    image: "https://cms-images.mmst.eu/2rj3gcd43pmw/2YaJsL5gwHUKwDPokXBq4z/aa45bf7e6a166222263639786896437c/MM_Waschmaschine.jpg?q=80&w=264",
    text: "Waschmaschinen & Trockner",
    link: "http://localhost:3000/"
  },
]

const gallery2Data = [
  {
    image: "https://cms-images.mmst.eu/2rj3gcd43pmw/2TJur0AfHxonBn0GA4xir5/6897e68511bbbbb2a867c20d5a4d7280/MM_Tagesdeals_Icon.png?q=80&w=264",
    text: "Deal des Tages",
    link: "http://localhost:3000/"
  },
  {
    image: "https://cms-images.mmst.eu/2rj3gcd43pmw/2e7iTi2JYREelCOQ1D0hpR/020020680693e30deb051d33f26170bb/Smart_wearebles.png.png?q=80&w=264",
    text: "Smartphones & Wearables",
    link: "http://localhost:3000/"
  },
  {
    image: "https://cms-images.mmst.eu/2rj3gcd43pmw/2xqsuVcH28sqBh0BtC4HCd/cefbd18250a8cf63026c7c74d9228c8a/TV_Sound.png.jpg?q=80&w=264",
    text: "TV & Audio",
    link: "http://localhost:3000/"
  },
  {
    image: "https://cms-images.mmst.eu/2rj3gcd43pmw/DLJitQkj0BhMX87VYcn8Q/a04694b14bb31112d1ebf65e02c4d251/comp_buero.png.png?q=80&w=264",
    text: "Computer & Büro",
    link: "http://localhost:3000/"
  },
  {
    image: "https://cms-images.mmst.eu/2rj3gcd43pmw/3uPGnzWP5UtrIzIYpCK3eb/cfd2306fb5b725f5a1d8d954ba0978e7/Haushaltsgross.png.png?q=80&w=264",
    text: "Haushaltsgroßgeräte",
    link: "http://localhost:3000/"
  },
  {
    image: "https://cms-images.mmst.eu/2rj3gcd43pmw/2yyiPVv3zh8BU00P9mLJkq/bd6ee4d1709660b6772363f60a3e8701/Gaming_VR.png.png?q=80&w=264",
    text: "Gaming & VR",
    link: "http://localhost:3000/"
  },
]

const longCarousel1Data = [
  {
    brand: "LEGO",
    name: "Super Mario: Abenteuer mit Luigi – Starterset Bauset, Mehrfarbig",
    image: "./images/2022-04-29 15_51_43-React App.webp",
    link: "http://localhost:3000/",
    avgScore: Math.random() * 5,
    totalScores: Math.floor(Math.random() * 120),
    uvp: 59.99,
    price: 41.99,
    info: ["OUTLET%"],
  },
  {
    brand: "LG",
    name: "F4WV708P1E Waschmaschine (8 kg, 1360 U/Min., A)",
    image: "./images/2022-04-29 15_51_53-React App.webp",
    link: "http://localhost:3000/",
    avgScore: Math.random() * 5,
    totalScores: Math.floor(Math.random() * 120),
    uvp: 1329,
    price: 479,
    info: [],
  },
  {
    brand: "APPLE",
    name: "iPhone 13 Pro Max 128 GB Graphit Dual SIM",
    image: "./images/2022-04-29 15_52_00-React App.webp",
    link: "http://localhost:3000/",
    avgScore: Math.random() * 5,
    totalScores: Math.floor(Math.random() * 120),
    uvp: 1199,
    price: 1199,
    info: [],
  },
  {
    brand: "LG",
    name: "OLED65B19LA OLED TV (Flat, 65 Zoll / 164 cm, UHD 4K, SMART TV, webOS 6.0 mit LG ThinQ)",
    image: "./images/2022-04-29 15_52_07-React App.webp",
    link: "http://localhost:3000/",
    avgScore: Math.random() * 5,
    totalScores: Math.floor(Math.random() * 120),
    uvp: 2699,
    price: 1299,
    info: ["OUTLET%"],
  },
  {
    brand: "APPLE",
    name: "AirPods (3. Generation mit MagSafe Ladecase), In-ear Kopfhörer Bluetooth Weiß",
    image: "./images/2022-04-29 15_52_15-React App.webp",
    link: "http://localhost:3000/",
    avgScore: Math.random() * 5,
    totalScores: Math.floor(Math.random() * 120),
    uvp: 184.99,
    price: 184.99,
    info: [],
  },
  {
    brand: "APPLE",
    name: "iPad Wi-Fi (9. Generation 2021), Tablet, 64 GB, 10,2 Zoll, Silber",
    image: "./images/2022-04-29 15_52_21-React App.webp",
    link: "http://localhost:3000/",
    avgScore: Math.random() * 5,
    totalScores: Math.floor(Math.random() * 120),
    uvp: 379,
    price: 379,
    info: [],
  },
  {
    brand: "NINTENDO",
    name: "Switch Neon-Rot/Neon-Blau (neue Edition)",
    image: "./images/2022-04-29 15_52_29-React App.webp",
    link: "http://localhost:3000/",
    avgScore: Math.random() * 5,
    totalScores: Math.floor(Math.random() * 120),
    uvp: 279.99,
    price: 279.99,
    info: [],
  },
  {
    brand: "SAMSUNG",
    name: "Galaxy A52s 5G 128 GB Awesome Black Dual SIM",
    image: "./images/2022-04-29 15_52_35-React App.webp",
    link: "http://localhost:3000/",
    avgScore: Math.random() * 5,
    totalScores: Math.floor(Math.random() * 120),
    uvp: 449,
    price: 349,
    info: [],
  },
  {
    brand: "LG",
    name: "GBP62DSNCC Kühlgefrierkombination (C, 2030 mm hoch, Dark Graphite)",
    image: "./images/2022-04-29 15_52_39-React App.webp",
    link: "http://localhost:3000/",
    avgScore: Math.random() * 5,
    totalScores: Math.floor(Math.random() * 120),
    uvp: 1649,
    price: 559,
    info: [],
  },
  {
    brand: "LG",
    name: "65QNED919PA MiniLED TV (Flat, 65 Zoll / 164 cm, UHD 4K, SMART TV, webOS 6.0 mit LG ThinQ)",
    image: "./images/2022-04-29 15_52_45-React App.webp",
    link: "http://localhost:3000/",
    avgScore: Math.random() * 5,
    totalScores: Math.floor(Math.random() * 120),
    uvp: 2499,
    price: 1199,
    info: [],
  },
  {
    brand: "LG",
    name: "OLED65C17LB OLED TV (Flat, 65 Zoll / 164 cm, UHD 4K, SMART TV, webOS 6.0 mit LG ThinQ)",
    image: "./images/2022-04-29 15_52_52-React App.webp",
    link: "http://localhost:3000/",
    avgScore: Math.random() * 5,
    totalScores: Math.floor(Math.random() * 120),
    uvp: 2799,
    price: 1644,
    info: [],
  },
  {
    brand: "NINTENDO",
    name: "Switch (OLED-Modell) Weiss",
    image: "./images/2022-04-29 15_53_00-React App.webp",
    link: "http://localhost:3000/",
    avgScore: Math.random() * 5,
    totalScores: Math.floor(Math.random() * 120),
    uvp: 359.99,
    price: 359.99,
    info: [],
  },
  {
    brand: "APPLE",
    name: "MacBook Air (M1,2020) MGN63D/A, Notebook mit 13,3 Zoll Display, 8 GB RAM, 256 GB SSD, M1 GPU, Space Grau",
    image: "./images/2022-04-29 15_53_09-React App.webp",
    link: "http://localhost:3000/",
    avgScore: Math.random() * 5,
    totalScores: Math.floor(Math.random() * 120),
    uvp: 1129,
    price: 1129,
    info: [],
  },
  {
    brand: "APPLE",
    name: "iPhone 13 128 GB Mitternacht Dual SIM",
    image: "./images/2022-04-29 15_53_16-React App.webp",
    link: "http://localhost:3000/",
    avgScore: Math.random() * 5,
    totalScores: Math.floor(Math.random() * 120),
    uvp: 819.99,
    price: 819.99,
    info: [],
  },
  {
    brand: "Nintendo",
    name: "Switch Sports - [Nintendo Switch]",
    image: "./images/2022-04-29 15_53_23-React App.webp",
    link: "http://localhost:3000/",
    avgScore: Math.random() * 5,
    totalScores: Math.floor(Math.random() * 120),
    uvp: 49.99,
    price: 49.99,
    info: [],
  },
  {
    brand: "SAMSUNG",
    name: "GU43AU7199UXZG LED TV (Flat, 43 Zoll / 108 cm, UHD 4K, SMART TV)",
    image: "./images/2022-04-29 15_53_30-React App.webp",
    link: "http://localhost:3000/",
    avgScore: Math.random() * 5,
    totalScores: Math.floor(Math.random() * 120),
    uvp: 549,
    price: 384.99,
    info: [],
  },
  {
    brand: "SAMSUNG",
    name: "Galaxy A53 5G 128 GB Awesome Black Dual SIM",
    image: "./images/2022-04-29 15_53_37-React App.webp",
    link: "http://localhost:3000/",
    avgScore: Math.random() * 5,
    totalScores: Math.floor(Math.random() * 120),
    uvp: 449,
    price: 449,
    info: [],
  },
  {
    brand: "ROBOROCK",
    name: "S7 MaxV Saugroboter",
    image: "./images/2022-04-29 15_53_47-React App.webp",
    link: "http://localhost:3000/",
    avgScore: Math.random() * 5,
    totalScores: Math.floor(Math.random() * 120),
    uvp: 799,
    price: 799,
    info: [],
  },
  {
    brand: "SAMSUNG",
    name: "Galaxy Watch4, BT, 40 mm Smartwatch Aluminium Fluorkautschuk, S/M, Pink Gold",
    image: "./images/2022-04-29 15_53_58-React App.webp",
    link: "http://localhost:3000/",
    avgScore: Math.random() * 5,
    totalScores: Math.floor(Math.random() * 120),
    uvp: 178,
    price: 149.58,
    info: [],
  },

]