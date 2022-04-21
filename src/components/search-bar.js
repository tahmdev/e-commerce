import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

const Searchbar = ({placeholder, classes}) => {
  
  return(
    <div  className={`search-bar-wrapper ${classes}`}>
      <input placeholder={placeholder} className='search-input'></input>
      <button  className='search-btn'>
        <FontAwesomeIcon icon={faMagnifyingGlass} className="header-icon-link"/>
      </button>
    </div>
  )
}
export default Searchbar