import Info from "./info"

const PrimaryCard = ({item, classes}) => {
  return(
    <a className={`primary-link ${classes}`} href={item.link} >
      <div className="primary-text-container">
        <Info array={item.info} color="red" />
        <span className="preTitle" > {item.preTitle} </span>
        <h4 className="primary-title"> {item.title} </h4>
        <p className="primary-p"> {item.description} </p>
        <Info array={item.tags}  color="grey" />
      </div>
      <img className="primary-image" src={item.image[0]} alt={item.image[1]}  />
    </a>
  )
}

export default PrimaryCard