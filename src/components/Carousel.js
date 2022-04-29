import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'
import React, { useEffect, useRef, useState } from "react"

const Carousel = ({children, autoScroll, carouselClass , carouselItemClass, controlsClass}) => {
  let carouselRef = useRef(null)
  let [currentPosDot, setCurrentPosDot] = useState(0)
  let [currentPosPxl, setCurrentPosPxl] = useState(0)
  let timer = useRef(null);

  const nextPage = () => {
    let unit = carouselRef.current.offsetWidth
    let currentPos = carouselRef.current.scrollLeft
    let newPos = currentPos + unit
    //handle loop on autoScroll
    if (isLastPage(carouselRef.current)) carouselRef.current.scroll(0, 0)
    else carouselRef.current.scroll(newPos, 0)
  }

  const isLastPage = (element) => {
    return element.scrollLeft === element.scrollWidth - element.clientWidth
  }

  const prevPage = () => {
    let unit = carouselRef.current.offsetWidth
    let currentPos = carouselRef.current.scrollLeft
    let newPos = currentPos - unit
    carouselRef.current.scroll(newPos, 0)
  }

  const jumpTo = (num) => {
    let unit = carouselRef.current.offsetWidth
    carouselRef.current.scroll(unit * num, 0)
  }
  
  // set initial timer
  useEffect(() => {
    if(autoScroll) createResetTimer(autoScroll)
  }, [])

  //used to color current dot navigation & reset timer on scroll
  const updateCurrentPos = () => {
    if (autoScroll) createResetTimer(autoScroll)
    let unit = carouselRef.current.offsetWidth
    let currentPos = carouselRef.current.scrollLeft
    setCurrentPosPxl(currentPos)
    setCurrentPosDot(Math.floor(currentPos / unit))
  }

  useEffect(() => {
    carouselRef.current.addEventListener("scroll", updateCurrentPos)
    return () => carouselRef.current.removeEventListener("scroll", updateCurrentPos)
  }, [updateCurrentPos])
  
  const createResetTimer = (delay) => {
    if (timer.current) clearInterval(timer.current)
    timer.current = setInterval(() => {
      nextPage()
    }, delay);
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
    <div className={`flex-container carousel-controls ${controlsClass}`} aria-hidden="true"  >
        <div className="dot-wrapper">
          {
            children.map((item, idx) => {
              return (
                <button className='carousel-dot-button' key={idx} onClick={() => jumpTo(idx)} style={currentPosDot === idx ? {color: "red", fontSize: "1rem"} : null} >
                  <FontAwesomeIcon icon={faCircle}/>
                </button>
              )
            })
          }
        </div>
        <div  className={`button-wrapper`} >
          <button className="carousel-navigation" onClick={prevPage} disabled={carouselRef.current ? currentPosPxl <= 25 : true} > 
            <FontAwesomeIcon icon={faAngleLeft} />
          </button>
          <button className={`carousel-navigation`} onClick={nextPage} disabled={carouselRef.current ? isLastPage(carouselRef.current) : false} > 
            <FontAwesomeIcon icon={faAngleRight} />
          </button>
        </div>
      </div>
    </>
  )
}
export default Carousel