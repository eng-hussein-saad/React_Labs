/* eslint-disable react/prop-types */
import "./MovieCard.css";
import { useDispatch, useSelector } from "react-redux";
import {
  addToWatchList,
  removeFromWatchList,
} from "../../store/slices/watchlist";

function MovieCard(props) {
  const { movie, handleRedirectView } = props;
  const watchListData = useSelector((state) => state.watchList.value);
  const dispatch = useDispatch();

  return (
    <div className="card movie mx-2 my-2">
      <img
        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">{movie.title}</h5>
        <p className="card-text">
          {movie.overview.length > 50
            ? `${movie.overview.substring(0, 50)}...`
            : movie.overview}
        </p>
        <div className="d-flex align-items-center">
          <button
            className="btn btn-warning me-2"
            onClick={() => {
              handleRedirectView(movie.id);
            }}
          >
            Details
          </button>
          <span>
            {watchListData.find((item) => item.id === movie.id) ? (
              <i
                className="fa-solid fa-heart fa-3x favourites"
                style={{ color: "#FFD43B" }}
                onClick={() => dispatch(removeFromWatchList(movie))}
              ></i>
            ) : (
              <i
                className="fa-regular fa-heart fa-3x favourites"
                onClick={() => {
                  dispatch(addToWatchList(movie));
                }}
                style={{ color: "#FFD43B" }}
              ></i>
            )}
          </span>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
