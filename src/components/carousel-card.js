import Info from "./info"

const CarouselCard = ({item, classes, infoClasses}) => {
  return(
    <a className={`carousel-card-link ${classes}`} href={item.link} >
      <div className="carousel-card-text-container">
        <Info array={item.info} color="red" classes={infoClasses} />
        <span className="preTitle" > {item.preTitle} </span>
        <h4 className="carousel-card-title"> {item.title} </h4>
        <p className="carousel-card-p"> {item.description} </p>
        <Info array={item.tags}  color="grey" />
      </div>
      <img className="carousel-card-image" src={item.image[0]} alt={item.image[1]}  />
    </a>
  )
}

export default CarouselCard