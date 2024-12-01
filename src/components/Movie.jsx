import { useDispatch, useSelector } from 'react-redux'
import starredSlice from '../data/starredSlice'
import watchLaterSlice from '../data/watchLaterSlice'
import placeholder from '../assets/not-found-500X750.jpeg'

// Prop closeCard is not being used. Remove it if not needed.
const Movie = ({ movie, viewTrailer, closeCard }) => {
    // Consider moving the state logic into a custom hook.
    const state = useSelector((state) => state)
    const { starred, watchLater } = state
    const { starMovie, unstarMovie } = starredSlice.actions
    const { addToWatchLater, removeFromWatchLater } = watchLaterSlice.actions

    const dispatch = useDispatch()

    /**
     * The function name doesn't provide a hint of what it does and the contet
     * is confusing. If what it does is to toggle a className, consider using
     * a useState hook to handle the css class and update it on an event.
     */
    const myClickHandler = (e) => {
        if (!e) var e = window.event
        e.cancelBubble = true
        if (e.stopPropagation) e.stopPropagation()
        e.target.parentElement.parentElement.classList.remove('opened')
    }

    return (
        <div className="wrapper col-3 col-sm-4 col-md-3 col-lg-3 col-xl-2">
        <div className="card" onClick={(e) => e.currentTarget.classList.add('opened')} >
            <div className="card-body text-center">
                <div className="overlay" />
                <div className="info_panel">
                    <div className="overview">{movie.overview}</div>
                    <div className="year">{movie.release_date?.substring(0, 4)}</div>
                    {/* Consider moving this block to its own conmponent file. */}
                    {!starred.starredMovies.map(movie => movie.id).includes(movie.id) ? (
                        <span className="btn-star" data-testid="starred-link" onClick={() => 
                            dispatch(starMovie({
                                id: movie.id, 
                                overview: movie.overview, 
                                release_date: movie.release_date?.substring(0, 4),
                                poster_path: movie.poster_path,
                                title: movie.title
                            })
                        )}>
                            <i className="bi bi-star" />
                        </span>
                    ) : (
                        <span className="btn-star" data-testid="unstar-link" onClick={() => dispatch(unstarMovie(movie))}>
                            <i className="bi bi-star-fill" data-testid="star-fill" />
                        </span>
                    )}
                    {/* Consider moving this block to its own conmponent file. */}
                    {!watchLater.watchLaterMovies.map(movie => movie.id).includes(movie.id) ? (
                        <button type="button" data-testid="watch-later" className="btn btn-light btn-watch-later" onClick={() => dispatch(addToWatchLater({
                                id: movie.id, 
                                overview: movie.overview, 
                                release_date: movie.release_date?.substring(0, 4),
                                poster_path: movie.poster_path,
                                title: movie.title
                        }))}>Watch Later</button>
                    ) : (
                        <button type="button" data-testid="remove-watch-later" className="btn btn-light btn-watch-later blue" onClick={() => dispatch(removeFromWatchLater(movie))}><i className="bi bi-check"></i></button>
                    )}
                    <button type="button" className="btn btn-dark" onClick={() => viewTrailer(movie)}>View Trailer</button>                                                
                </div>
                <img className="center-block" src={(movie.poster_path) ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}` : placeholder} alt="Movie poster" />
            </div>
            <h6 className="title mobile-card">{movie.title}</h6>
            <h6 className="title">{movie.title}</h6>
            {/* It's not clear what this closes. Maybe a modal that is not yet implmented? */}
            <button type="button" className="close" onClick={(e) => myClickHandler(e)} aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
    </div>        
    )
}

export default Movie