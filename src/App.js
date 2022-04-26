import './App.css';
import Header from './components/Header';
import Banner from './components/banner';
import Carousel from './components/Carousel';
import CarouselCard from './components/carousel-card';
import Gallery from './components/gallery';
import GalleryCard from './components/gallery-card';
import LongCarouselCard from './components/longCarouselCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faEnvelope, faCommentDots } from '@fortawesome/free-solid-svg-icons'
import Accordion from './components/Accordion';

function App() {

  // fix sidebar animation
  // fix sidebar z index 
  // padding between sections
  // . fix header for large screens
  // Spend a day on fixing the accessiblity 
  // 7 footer (details later)
  return (
    <div className="App">
      <Header />
      <section>
        <Banner />
      </section>
      <Carousel autoScroll={9000} >
        {carousel1Data.map(item => <CarouselCard item={item}  /> )}
      </Carousel>
      <main>
        
        <section>
          <header>
            <h2> Unsere beliebtesten Kategorien</h2>
          </header>
          <Gallery>
            {gallery1Data.map(item => <GalleryCard item={item} /> )}
          </Gallery>
        </section>
        
        <section>
          <header>
            <h2> Aus der Werbung </h2>
          </header>
          <Carousel carouselClass="secondary-carousel" controlsClass="secondary-carousel-controls" autoScroll={9000} >
            {carousel1Data.map(item => <CarouselCard item={item} classes="secondary-card" infoClasses="top" /> )}
          </Carousel>
        </section>
        
        <section className='long-section'>
          <header>
            <h2> Unsere Tageshighlights </h2>
          </header>
          <Carousel carouselClass="long-carousel" controlsClass="long-controls" longCarousel>
            {longCarousel1Data.map(item => <LongCarouselCard item={item} /> )}
          </Carousel>
        </section>

        <section>
          <header>
            <h2> Top Angebote für Sie </h2>
          </header>
          <Carousel carouselClass="secondary-carousel" controlsClass="secondary-carousel-controls" autoScroll={9000} >
            {carousel1Data.map(item => <CarouselCard item={item} classes="secondary-card" infoClasses="top" /> )}
          </Carousel>
        </section>

        <section>
          <header>
            <h2> Die besten Angebote & Aktionen</h2>
          </header>
          <Gallery>
            {gallery2Data.map(item => <GalleryCard item={item} /> )}
          </Gallery>
        </section>

        <section className='long-section'>
          <header>
            <h2> Unsere Topseller</h2>
          </header>
          <Carousel carouselClass="long-carousel" controlsClass="long-controls" longCarousel>
            {longCarousel1Data.map(item => <LongCarouselCard item={item} /> )}
          </Carousel>
        </section>

        <section>
          <header>
            <h2> Highlights für Sie </h2>
          </header>
          <Gallery>
            {gallery1Data.map(item => <GalleryCard item={item} /> )}
          </Gallery>
        </section>

        <section className='long-section'>
          <header>
            <h2> Unsere Empfhehlungen</h2>
          </header>
          <Carousel carouselClass="long-carousel" controlsClass="long-controls" longCarousel>
            {longCarousel1Data.map(item => <LongCarouselCard item={item} /> )}
          </Carousel>
        </section>


        <section>
          <h2>Unsere Service Highlights für Sie</h2>
          <div className='split'>
            <div className='service-box'>
              <h3>Wunschprodukt einfach finanzieren</h3>
              <p>Ein Produkt kaufen oder lieber doch finanzieren? Lange Laufzeiten, 0% effektiver Jahreszins** und alles jederzeit unkompliziert online abschließbar.</p>
              <div className='animated-link'>
                <a href='http://localhost:3000/'>
                  <div className='animated-link-flex' >
                    <FontAwesomeIcon className="red-text" icon={faAngleRight} />
                    <span>Mehr erfahren <div className='animated-line-bottom' /></span>
                  </div>
                </a>
              </div>            
            </div>
            <div className='service-box'>
              <h3>Mieten statt kaufen mit Grover!</h3>
              <p>Viele Produkte bei MediaMarkt können mit unserem Kooperationspartner Grover zu flexiblen Laufzeiten gemietet werden.</p>
              <div className='animated-link'>
                <a href='http://localhost:3000/'>
                  <div className='animated-link-flex' >
                    <FontAwesomeIcon className="red-text" icon={faAngleRight} />
                    <span>Mehr erfahren <div className='animated-line-bottom' /></span>
                  </div>
                </a>
              </div>           
            </div>
            <div className='service-box'>
              <h3>Lieferung / Marktabholung</h3>
              <p>Lassen Sie sich Ihre Bestellung liefern oder holen Sie sie ganz bequem und kostenlos in einem von über 260 Märkten ab.</p>
              <div className='animated-link'>
                <a href='http://localhost:3000/'>
                  <div className='animated-link-flex' >
                    <FontAwesomeIcon className="red-text" icon={faAngleRight} />
                    <span>Mehr erfahren <div className='animated-line-bottom' /></span>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <button className='responsive-button btn'> Alle Services entdecken </button>

          <div className='split'>
          <div className='service-box'>
              <h3>Fragen zur Technik?</h3>
              <p>Technikfreude statt Technikfrust? Die Experten der Deutschen Technikberatung nehmen sich gerne die Zeit, Ihre Fragen zu beantworten.</p>
              <div className='animated-link'>
                <a href='http://localhost:3000/'>
                  <div className='animated-link-flex' >
                    <FontAwesomeIcon className="red-text" icon={faAngleRight} />
                    <span>Mehr erfahren <div className='animated-line-bottom' /></span>
                  </div>
                </a>
              </div>            
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
              <Accordion title="Über uns" classes="kontakt">
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
              <Accordion title="Über uns" classes="aktuell-beliebt">
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
              <Accordion title="Über uns" classes="service">
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
              <Accordion title="Über uns" classes="ueber-uns">
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
            </div>

          </section>
        </footer>
      </main>
    </div>
  );
}

export default App;



const carousel1Data = [
  {
    link: "http://localhost:3000/",
    image: ["https://i.imgur.com/LzavDa1.png", "alt here"],
    info: ["Yep info"],
    preTitle: "NUR BIS 27.04., 19:59 UHR",
    title: "WOW TITLE",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    tags: []
  },
  {
    link: "http://localhost:3000/",
    image: ["https://i.imgur.com/2bPhSZM.jpg", "alt here 2"],
    info: ["Yep info", "Another one"],
    preTitle: "Nur bis Gestern",
    title: "WOW TITLE",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    tags: []
  },
  { 
    link: "http://localhost:3000/",
    image: ["https://i.imgur.com/vZYA0EH.jpg", "alt here 3"],
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
    image: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_83355063/fee_786_587_png",
    link: "http://localhost:3000/",
    avgScore: 5,
    totalScores: 45,
    uvp: 59.99,
    price: 41.99,
    info: ["OUTLET%"],
  },
  {
    brand: "LG",
    name: "F4WV708P1E Waschmaschine (8 kg, 1360 U/Min., A)",
    image: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_80132324/fee_786_587_png",
    link: "http://localhost:3000/",
    avgScore: Math.random() * 5,
    totalScores: 45,
    uvp: 1329,
    price: 479,
    info: [],
  },
  {
    brand: "APPLE",
    name: "iPhone 13 Pro Max 128 GB Graphit Dual SIM",
    image: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_87346099/fee_786_587_png",
    link: "http://localhost:3000/",
    avgScore: Math.random() * 5,
    totalScores: 45,
    uvp: 1199,
    price: 1199,
    info: [],
  },
  {
    brand: "LG",
    name: "OLED65B19LA OLED TV (Flat, 65 Zoll / 164 cm, UHD 4K, SMART TV, webOS 6.0 mit LG ThinQ)",
    image: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_89256503/fee_786_587_png",
    link: "http://localhost:3000/",
    avgScore: Math.random() * 5,
    totalScores: 45,
    uvp: 2699,
    price: 1299,
    info: ["OUTLET%"],
  },
  {
    brand: "APPLE",
    name: "AirPods (3. Generation mit MagSafe Ladecase), In-ear Kopfhörer Bluetooth Weiß",
    image: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_88185475/fee_786_587_png",
    link: "http://localhost:3000/",
    avgScore: Math.random() * 5,
    totalScores: 45,
    uvp: 184.99,
    price: 184.99,
    info: [],
  },
  {
    brand: "APPLE",
    name: "iPad Wi-Fi (9. Generation 2021), Tablet, 64 GB, 10,2 Zoll, Silber",
    image: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_87259955/fee_786_587_png",
    link: "http://localhost:3000/",
    avgScore: Math.random() * 5,
    totalScores: 45,
    uvp: 379,
    price: 379,
    info: [],
  },
  {
    brand: "NINTENDO",
    name: "Switch Neon-Rot/Neon-Blau (neue Edition)",
    image: "https://assets.mmsrg.com/isr/166325/c1/-/pixelboxx-mss-82086848/fee_786_587_png",
    link: "http://localhost:3000/",
    avgScore: Math.random() * 5,
    totalScores: 45,
    uvp: 279.99,
    price: 279.99,
    info: [],
  },
  {
    brand: "SAMSUNG",
    name: "Galaxy A52s 5G 128 GB Awesome Black Dual SIM",
    image: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_86537177/fee_786_587_png",
    link: "http://localhost:3000/",
    avgScore: Math.random() * 5,
    totalScores: 45,
    uvp: 449,
    price: 349,
    info: [],
  },
  {
    brand: "LG",
    name: "GBP62DSNCC Kühlgefrierkombination (C, 2030 mm hoch, Dark Graphite)",
    image: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_84550814/fee_786_587_png",
    link: "http://localhost:3000/",
    avgScore: Math.random() * 5,
    totalScores: 45,
    uvp: 1649,
    price: 559,
    info: [],
  },
  {
    brand: "LG",
    name: "65QNED919PA MiniLED TV (Flat, 65 Zoll / 164 cm, UHD 4K, SMART TV, webOS 6.0 mit LG ThinQ)",
    image: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_84473764/fee_786_587_png",
    link: "http://localhost:3000/",
    avgScore: Math.random() * 5,
    totalScores: 45,
    uvp: 2499,
    price: 1199,
    info: [],
  },
  {
    brand: "LG",
    name: "OLED65C17LB OLED TV (Flat, 65 Zoll / 164 cm, UHD 4K, SMART TV, webOS 6.0 mit LG ThinQ)",
    image: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_82628798/fee_786_587_png",
    link: "http://localhost:3000/",
    avgScore: Math.random() * 5,
    totalScores: 45,
    uvp: 2799,
    price: 1644,
    info: [],
  },
  {
    brand: "NINTENDO",
    name: "Switch (OLED-Modell) Weiss",
    image: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_85525283/fee_786_587_png",
    link: "http://localhost:3000/",
    avgScore: Math.random() * 5,
    totalScores: 45,
    uvp: 359.99,
    price: 359.99,
    info: [],
  },
  {
    brand: "APPLE",
    name: "MacBook Air (M1,2020) MGN63D/A, Notebook mit 13,3 Zoll Display, 8 GB RAM, 256 GB SSD, M1 GPU, Space Grau",
    image: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_78963800/fee_786_587_png",
    link: "http://localhost:3000/",
    avgScore: Math.random() * 5,
    totalScores: 45,
    uvp: 1129,
    price: 1129,
    info: [],
  },
  {
    brand: "APPLE",
    name: "iPhone 13 128 GB Mitternacht Dual SIM",
    image: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_87346072/fee_786_587_png",
    link: "http://localhost:3000/",
    avgScore: Math.random() * 5,
    totalScores: 45,
    uvp: 819.99,
    price: 819.99,
    info: [],
  },
  {
    brand: "Nintendo",
    name: "Switch Sports - [Nintendo Switch]",
    image: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_92754844/fee_786_587_png",
    link: "http://localhost:3000/",
    avgScore: Math.random() * 5,
    totalScores: 45,
    uvp: 49.99,
    price: 49.99,
    info: [],
  },
  {
    brand: "SAMSUNG",
    name: "GU43AU7199UXZG LED TV (Flat, 43 Zoll / 108 cm, UHD 4K, SMART TV)",
    image: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_85840158/fee_786_587_png",
    link: "http://localhost:3000/",
    avgScore: Math.random() * 5,
    totalScores: 45,
    uvp: 549,
    price: 384.99,
    info: [],
  },
  {
    brand: "SAMSUNG",
    name: "Galaxy A53 5G 128 GB Awesome Black Dual SIM",
    image: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_92379434/fee_786_587_png",
    link: "http://localhost:3000/",
    avgScore: Math.random() * 5,
    totalScores: 45,
    uvp: 449,
    price: 449,
    info: [],
  },
  {
    brand: "ROBOROCK",
    name: "S7 MaxV Saugroboter",
    image: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_91644879/fee_786_587_png",
    link: "http://localhost:3000/",
    avgScore: Math.random() * 5,
    totalScores: 45,
    uvp: 799,
    price: 799,
    info: [],
  },
  {
    brand: "SAMSUNG",
    name: "Galaxy Watch4, BT, 40 mm Smartwatch Aluminium Fluorkautschuk, S/M, Pink Gold",
    image: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_87346072/fee_786_587_png",
    link: "http://localhost:3000/",
    avgScore: Math.random() * 5,
    totalScores: 45,
    uvp: 178,
    price: 149.58,
    info: [],
  },
  {
    brand: "SAMSUNG",
    name: "Galaxy Watch4, BT, 40 mm Smartwatch Aluminium Fluorkautschuk, S/M, Pink Gold",
    image: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_87346072/fee_786_587_png",
    link: "http://localhost:3000/",
    avgScore: Math.random() * 5,
    totalScores: 45,
    uvp: 178,
    price: 149.58,
    info: [],
  },

]