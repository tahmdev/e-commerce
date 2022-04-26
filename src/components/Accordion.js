import { useEffect, useRef, useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'

const Accordion = ({children, title, classes}) => {
  let [expanded, setExpanded] = useState(true)
  let accordRef = useRef()
  let [maxHeight, setMaxHeight] = useState(5000)
  
  // need maximum height since fit-content doesn't work with transition
  useEffect(() => {
    setMaxHeight(accordRef.current.offsetHeight)
    setExpanded(false)
  }, [])

  const handleClick = () => {
    setExpanded(prev => !prev)
  }

  return(
    <div className={`accord-wrapper ${classes}`} ref={accordRef} >
      <button className="accord-button" onClick={handleClick}>
         {title} 
         <FontAwesomeIcon className="accord-icon" icon={faAngleDown} style={ expanded ? {transform: "rotateZ(180deg)"} : null } />
      </button>
      <div className={`accord-items`} style={expanded && maxHeight ? {maxHeight: maxHeight} : null}>
        {children}
      </div>
    </div>
  )
}
export default Accordion