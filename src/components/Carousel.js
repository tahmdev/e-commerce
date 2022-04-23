import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useRef, useState } from "react"

const Carousel = ({children, carouselClass , carouselItemClass, arrowNavigationClass, dotNavigationClass, navigationClass}) => {
  let carouselRef = useRef(null)
  let [currentPosState, setCurrentPosState] = useState(0)

  const nextPage = () => {
    let carouselLength = children.length - 1
    let unit = carouselRef.current.offsetWidth
    let currentPos = carouselRef.current.scrollLeft
    let newPos = currentPos + unit
  
    // go to next or loop to first
    if (newPos <= carouselLength * unit){
      carouselRef.current.scroll(newPos, 0)
    }else{
      carouselRef.current.scroll(0, 0)
    }
  }
  const prevPage = () => {
    let carouselLength = children.length - 1
    let unit = carouselRef.current.offsetWidth
    let currentPos = carouselRef.current.scrollLeft
    let newPos = currentPos - unit
    
    // go to previous or loop to last
    if (newPos >= 0){
      carouselRef.current.scroll(newPos, 0)
    }else{
      carouselRef.current.scroll(carouselLength * unit , 0)
    }
  }
  const jumpTo = (num) => {
    let unit = carouselRef.current.offsetWidth
    carouselRef.current.scroll(unit * num, 0)
  }

  const updateCurrentPosState = () => {
    let unit = carouselRef.current.offsetWidth
    let currentPos = carouselRef.current.scrollLeft
    setCurrentPosState(Math.floor(currentPos / unit))
  }
  useEffect(() => {
    carouselRef.current.addEventListener("scroll", updateCurrentPosState)
    return () => carouselRef.current.removeEventListener("scroll", updateCurrentPosState)
  }, [updateCurrentPosState])
  
  return(
    <div className={`carousel-wrapper ${carouselClass}`} >
      <ul className="carousel" ref={carouselRef} >
        {
          children.map((item, idx) => {
            return(
              <li key={idx} className={` carousel-item ${carouselItemClass}`} >
                {item}
              </li>
            )
          })
        }
      </ul>
      <div className={`flex-container carousel-controls ${navigationClass}`}>
        <div className="dot-wrapper">
          {
            children.map((item, idx) => {
              return (
                <button className='carousel-dot-button' onClick={() => jumpTo(idx)} style={currentPosState === idx ? {color: "red", fontSize: "1rem"} : null} >
                  <FontAwesomeIcon icon={faCircle}/>
                </button>
              )
            })
          }
        </div>
        <div className={`button-wrapper ${dotNavigationClass}`} >
          <button className="carousel-navigation" onClick={prevPage} > 
            <FontAwesomeIcon icon={faAngleLeft} />
          </button>
          <button className={`carousel-navigation ${arrowNavigationClass}`} onClick={nextPage} > 
            <FontAwesomeIcon icon={faAngleRight} />
          </button>
        </div>
      </div>
    </div>
  )
}
export default Carousel