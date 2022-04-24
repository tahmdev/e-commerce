import './App.css';
import Header from './components/Header';
import Banner from './components/banner';
import Carousel from './components/Carousel';
import CarouselCard from './components/carousel-card';
import Gallery from './components/gallery';
import GalleryCard from './components/gallery-card';
import LongCarouselCard from './components/longCarouselCard';
function App() {

  // 4 Carousel => Info part has border / red info card is at top of image in phone mode
  // 5 Carousel => Width 100 / no controls / no snap. Info card (red info card, image, score, **Brand** + name, price(if uvp > price => sale))
  // 4 Carousel.
  // 3 Gallery.
  // 5 Carousel.
  // 3 Gallery.
  // 5 Carousel. 
  // 6 Flex(Info boxes with link inside) Width 100, flex direction column. media 1000px => row
  // . fix header for large screens
  // Spend a day on fixing the accessiblity 
  // 7 footer (details later)
  return (
    <div className="App">
      <Header />
      <Banner />
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

const longCarousel1Data = [
  {
    brand: "LEGO",
    name: "Super Mario: Abenteuer mit Luigi – Starterset Bauset, Mehrfarbig",
    image: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_83355063/fee_786_587_png",
    link: "http://localhost:3000/",
    avgScore: 4.5,
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
    avgScore: 4.5,
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
    avgScore: 4.5,
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
    avgScore: 4.5,
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
    avgScore: 4.5,
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
    avgScore: 4.5,
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
    avgScore: 4.5,
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
    avgScore: 4.5,
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
    avgScore: 4.5,
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
    avgScore: 4.5,
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
    avgScore: 4.5,
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
    avgScore: 4.5,
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
    avgScore: 4.5,
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
    avgScore: 4.5,
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
    avgScore: 4.5,
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
    avgScore: 4.5,
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
    avgScore: 4.5,
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
    avgScore: 4.5,
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
    avgScore: 4.5,
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
    avgScore: 4.5,
    totalScores: 45,
    uvp: 178,
    price: 149.58,
    info: [],
  },

]