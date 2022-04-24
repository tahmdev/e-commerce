import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useRef, useState } from "react"

const Carousel = ({children, autoScroll, carouselClass , carouselItemClass, controlsClass}) => {
  let carouselRef = useRef(null)
  let [currentPosState, setCurrentPosState] = useState(0)
  let timer = useRef(null);

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
  
  // set initial timer
  useEffect(() => {
    handleTimer(autoScroll)
  }, [])

  //used to color current dot navigation & reset timer on scroll
  const updateCurrentPosState = () => {
    handleTimer(autoScroll)
    let unit = carouselRef.current.offsetWidth
    let currentPos = carouselRef.current.scrollLeft
    setCurrentPosState(Math.floor(currentPos / unit))
  }
  useEffect(() => {
    carouselRef.current.addEventListener("scroll", updateCurrentPosState)
    return () => carouselRef.current.removeEventListener("scroll", updateCurrentPosState)
  }, [updateCurrentPosState])
  
  const handleTimer = (delay) => {
    if (autoScroll){
      if (timer.current) clearInterval(timer.current)
      timer.current = setInterval(() => {
        nextPage()
      }, delay);
    }
  }

  return(
    <>
    <div className={`carousel-wrapper ${carouselClass}`} ref={carouselRef} >
      <ul className="carousel" >
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
      
    </div>
    <div className={`flex-container carousel-controls ${controlsClass}`}>
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
        <div className={`button-wrapper`} >
          <button className="carousel-navigation" onClick={prevPage} > 
            <FontAwesomeIcon icon={faAngleLeft} />
          </button>
          <button className={`carousel-navigation`} onClick={nextPage} > 
            <FontAwesomeIcon icon={faAngleRight} />
          </button>
        </div>
      </div>
    </>
  )
}
export default Carousel