const GalleryCard = ({item}) => {

  return(
    <a href={item.link} className="gallery-card lift">
      <img src={item.image} />
      <span> {item.text} </span>
    </a>
  )
}
export default GalleryCard