import Slider from 'react-slick'
import MovieItem from '../MovieItem'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const MoviesSlider = props => {
  const {moviesList} = props
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
  }
  return (
    <Slider {...settings}>
      {moviesList.map(each => (
        <MovieItem movie={each} key={each.id} />
      ))}
    </Slider>
  )
}

export default MoviesSlider
