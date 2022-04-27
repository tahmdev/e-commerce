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
      <img src={item.image} />
      <StarRating avgScore={item.avgScore} max={5} totalScores={item.totalScores} />
      <p> <span className="bold" > {item.brand} </span> {item.name} </p>
      {sale.current && <span className="bold uvp"> UVP <span className="bold strikethrough"> {item.uvp} </span> </span> }
      <span className={`bold ${sale.current ? "red-text" : null}`}> {` ${forceDecimal(item.price)}`} </span>
      {item.info && <Info array={item.info} color="red" classes="top" />}
    </a>
  )
}

export default LongCarouselCard