import Popup from 'reactjs-popup'
import ReactPlayer from 'react-player'
import {IoMdClose} from 'react-icons/io'

import 'reactjs-popup/dist/index.css'
import './index.css'

const MovieItem = props => {
  const {movie} = props
  const {thumbnailUrl, videoUrl} = movie
  return (
    <div className="card-container">
      <Popup
        modal
        trigger={
          <img src={thumbnailUrl} className="movie-card" alt="thumbnail" />
        }
        className="popup-content"
      >
        {close => (
          <>
            <button
              className="close-btn"
              type="button"
              data-testid="closeButton"
              onClick={() => close()}
            >
              <IoMdClose className="close-icon" />
            </button>
            <ReactPlayer url={videoUrl} controls width="95%" height="88%" />
          </>
        )}
      </Popup>
    </div>
  )
}

export default MovieItem
