import { useEffect, useRef } from "react"

const Sidebar = ({setShow}) => {
  let ref = useRef(null)

  useEffect(() => {
    document.addEventListener("mousedown", handleClick)
    return () => document.removeEventListener("mousedown", handleClick)
  }, [])
  const handleClick = (e) => {
    if (ref && !ref.current.contains(e.target)) handleHide()
  }
  const handleHide = () => {
    document.getElementById("sidebar-wrapper").classList.add("slide-out")
    document.getElementById("background").classList.add("fade-out")
    setTimeout(() => {
      setShow(false)
    }, 300);
  }
  return(
    <div id="background" className="background">
      <div id="sidebar-wrapper" className="sidebar-wrapper" ref={ref}>
        
        <nav aria-label="Alle Kategorien">

        </nav>    
      </div>
    </div>
  )
}
export default Sidebar