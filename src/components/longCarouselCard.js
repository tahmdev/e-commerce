import { useRef } from "react"
import Info from "./info"
const LongCarouselCard = ({item}) => {
  let sale = useRef(item.price < item.uvp)

  return(
    <a className="long-carousel-card-wrapper" href={item.link} >
      <img src={item.image} />
      <div className="score-bar" />
      <span className="total-scores" > {item.totalScores} </span>
      <p> <span className="bold" > {item.brand} </span> {item.name} </p>
      {sale.current && <span className="bold uvp"> UVP <span className="bold strikethrough"> {item.uvp} </span> </span> }
      <span className={`bold ${sale.current ? "red-text" : null}`}> {` ${item.price}`} </span>
      {item.info && <Info array={item.info} color="red" classes="top" />}
    </a>
  )
}

export default LongCarouselCard