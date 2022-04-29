import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useRef, useState } from 'react';
import userEvent from '@testing-library/user-event';

const StarRating = ({max, avgScore, totalScores}) => {
  let [percentFill, setPercentFill] = useState(0)
  
  useEffect(() => {
    setPercentFill(avgScore * 100 / max) 
  }, [])

  return(
    <div className="star-rating-wrapper" >
      <div className="stars">
        {
          [...Array(max).keys()].map(item => <FontAwesomeIcon key={item} icon={faStar}  />)
        }
        <span className='small-text' > ({totalScores}) </span>
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