import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useRef, useState } from 'react';
import userEvent from '@testing-library/user-event';

const StarRating = ({max, avgScore, totalScores}) => {
  let [percentFill, setPercentFill] = useState(0)
  
  useEffect(() => {
    console.log(avgScore * 100 / max)
    setPercentFill(avgScore * 100 / max) 
    for (let i = 0; i < 100; i++){
      console.log(Math.random() * 5)
    }
  }, [])

  return(
    <div className="star-rating-wrapper" >
      <div className="stars">
        {
          [...Array(max).keys()].map(item => <FontAwesomeIcon icon={faStar}  />)
        }
        <span className='small-text' > ({totalScores}) </span>
      </div>
      <div className='stars-fill' style={{width: `${percentFill}%`}}>
        {
          [...Array(max).keys()].map(item => <FontAwesomeIcon icon={faStar}  />)
        }
      </div>
      
    </div>
  )
}
export default StarRating