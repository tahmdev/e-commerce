const Info = ({array, color}) => {

  return(
    <div className="info-wrapper">
      {array.map(item => {
        return(
          <div className="info" style={{border: `1px solid ${color}` }} >
            <span style={{color: color}} > {item} </span>
          </div>
        )
      })}
    </div>
  )
}
export default Info