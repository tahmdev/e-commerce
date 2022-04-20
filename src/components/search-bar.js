import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

const Searchbar = ({placeholder, classes}) => {
  
  return(
    <div className={`search-bar-wrapper ${classes}`}>
      <button className='search-btn'>
        <FontAwesomeIcon icon={faMagnifyingGlass} className="header-icon-link"/>
      </button>
      <input placeholder={placeholder} className='search-input'></input>
    </div>
  )
}
export default Searchbar