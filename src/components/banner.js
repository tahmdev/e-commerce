const Banner = () => {

  return (
    <a href="http://localhost:3000/" className="banner">
      <div>
        <h2>Jetzt täglich neu: Unser Deal des Tages</h2>
        <button className="responsive-button" tabIndex={-1} aria-hidden="true"  > Zum Angebot </button>
      </div>
    </a>
  )
}
export default Banner