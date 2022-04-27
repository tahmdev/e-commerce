const WithSlideInBorder = ({children, style, }) => {

  return(
    <div className='slide-in-border-wrapper'>
      <div className="slide-in-border-content">
        {children}
      </div>
      <div className='animated-line-bottom-2' style={{borderBottom: style || "2px solid black"}} />
    </div>          
  )
}
export default WithSlideInBorder