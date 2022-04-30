import { useRef } from "react"
import Info from "./info"
import StarRating from "./star-rating"
const LongCarouselCard = ({item}) => {
  let sale = useRef(item.price < item.uvp)

  const forceDecimal = (num) => {
    if (num % 1 === 0) return `${num}.-`
    else return num
  }

  return(
    <a className="long-carousel-card-wrapper lift" href={item.link} >
      {item.info && <Info array={item.info} color="red" classes="top" />}
      <img src={item.image} aria-hidden="true" />
      <StarRating avgScore={item.avgScore} max={5} totalScores={item.totalScores} />
      <p> <span className="bold" > {item.brand} </span> {item.name} </p>
      
      <div role="link" aria-label={`Erhältlich für ${item.price}€ ${sale.current ? "statt" + item.uvp + "€" : ""}`}>
        <p aria-hidden="true" >
          {sale.current &&
          <>
            <span className="bold uvp"> UVP</span>  
            <span className="bold strikethrough uvp"> {item.uvp} </span>
          </>
          }
          <span className={`bold ${sale.current ? "red-text" : null}`}> {` ${forceDecimal(item.price)}`} </span>
        </p>
      </div>
      
    </a>
  )
}

export default LongCarouselCard