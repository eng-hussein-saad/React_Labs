/* eslint-disable react/prop-types */
function WatchlistCard(props) {
  const { movie, handleRedirectView, handleRemoveWatchList } = props;
  return (
    <div className="card movie">
      <img
        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">{movie.title}</h5>
        <p className="card-text">
          {movie.overview.length > 100
            ? `${movie.overview.substring(0, 100)}...`
            : movie.overview}
        </p>
        <button
          className="btn btn-warning"
          onClick={() => {
            handleRedirectView(movie.id);
          }}
        >
          Details
        </button>
        <button
          className="btn btn-primary mx-3"
          onClick={() => {
            alert(`Removed ${movie.title} from watchList`);
            handleRemoveWatchList(movie.id);
          }}
        >
          Remove
        </button>
      </div>
    </div>
  );
}

export default WatchlistCard;
