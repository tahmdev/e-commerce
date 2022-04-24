import './App.css';
import Header from './components/Header';
import Banner from './components/banner';
import Carousel from './components/Carousel';
import CarouselCard from './components/carousel-card';
import Gallery from './components/gallery';
import GalleryCard from './components/gallery-card';
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
          <Carousel carouselClass="secondary-carousel" controlsClass="secondary-carousel-controls" >
            {carousel1Data.map(item => <CarouselCard item={item} classes="secondary-card" infoClasses="top" /> )}
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
