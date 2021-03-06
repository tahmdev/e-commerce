import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

const Searchbar = ({placeholder, classes}) => {
  
  return(
    <form  className={`search-bar-wrapper ${classes}`}>
      <input placeholder={placeholder} className='search-input'></input>
      <button  className='search-btn' aria-hidden="true" tabIndex={-1} >
        <FontAwesomeIcon icon={faMagnifyingGlass} className="header-icon-link"/>
      </button>
    </form>
  )
}
export default Searchbar