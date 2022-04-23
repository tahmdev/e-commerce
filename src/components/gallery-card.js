const GalleryCard = ({item}) => {

  return(
    <a href={item.link} className="gallery-card">
      <img src={item.image} />
      <span> {item.text} </span>
    </a>
  )
}
export default GalleryCard