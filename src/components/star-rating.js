import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useRef, useState } from 'react';
import userEvent from '@testing-library/user-event';

const StarRating = ({max, avgScore, totalScores}) => {
  let [percentFill, setPercentFill] = useState(0)
  
  useEffect(() => {
    console.log(avgScore, max, avgScore * 100 / max)
    setPercentFill(avgScore * 100 / max) 
  }, [])

  return(
    <div className="star-rating-wrapper" aria-label={`${avgScore.toFixed(1)} von ${max} Sternen bei ${totalScores} Bewertungen`} >
      <div className="stars" aria-hidden="true">
        {
          [...Array(max).keys()].map(item => <FontAwesomeIcon key={item} icon={faStar}  />)
        }
        <span className='small-text rating-counter' > ({totalScores}) </span>
      </div>
      <div className='stars-fill' style={{width: `${percentFill}%`}}>
        {
          [...Array(max).keys()].map(item => <FontAwesomeIcon key={item} icon={faStar}  />)
        }
      </div>
    </div>
  )
}
export default StarRating