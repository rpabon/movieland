import { Link, NavLink } from "react-router-dom"
import { useSelector } from 'react-redux'

import '../styles/header.scss'

const Header = ({ searchMovies }) => {

  /**
   * Creating custom hooks as a facade to expose the store state
   * to avoid direct access to the store and provide better maintainability.
   */
  const { starredMovies } = useSelector((state) => state.starred)

  return (
    <header>
      <Link to="/" data-testid="home" onClick={() => searchMovies('')}>
        <i className="bi bi-film" />
      </Link>

      <nav>
        <NavLink to="/starred" data-testid="nav-starred" className="nav-starred">
          {starredMovies.length > 0 ? (
            <>
            <i className="bi bi-star-fill bi-star-fill-white" />
            <sup className="star-number">{starredMovies.length}</sup>
            </>
          ) : (
            <i className="bi bi-star" />
          )}
        </NavLink>
        <NavLink to="/watch-later" className="nav-fav">
          watch later
        </NavLink>
      </nav>

      {/* Consider moving the search input to its own component file. */}
      <div className="input-group rounded">
        {/* I'd be better UX if the navigation is fired when the API call is made, not when clicking. */}
        <Link to="/" onClick={(e) => searchMovies('')} className="search-link" >
          <input type="search" data-testid="search-movies"
            /**
             * This will trigger a fetch every time the user types in the input,
             * debounce it to limit the number of API calls. Also, consider using
             * the onChange event instead of onKeyUp.
             */
            onKeyUp={(e) => searchMovies(e.target.value)} 
            className="form-control rounded" 
            placeholder="Search movies..." 
            aria-label="Search movies" 
            aria-describedby="search-addon" 
            />
        </Link>            
      </div>      
    </header>
  )
}

export default Header
