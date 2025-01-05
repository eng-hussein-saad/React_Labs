import { useParams } from "react-router";
import axiosInstance from "../../apis/config";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  removeFromWatchList,
  addToWatchList,
} from "../../store/slices/watchlist";
function MovieDetails() {
  const dispatch = useDispatch();
  const [movie, setMovie] = useState();
  const params = useParams();
  const watchListData = useSelector((state) => state.watchList.value);
  useEffect(() => {
    axiosInstance
      .get(`/movie/${params.id}`)
      .then((res) => {
        console.log(res.data.id);
        console.log(res.data);
        setMovie(res.data);
        // console.log(res.data.title);
        // console.log(res.data.overview);
      })
      .catch((err) => console.log(err));
  }, [params.id]);

  return (
    <>
      {movie && (
        <>
          <div className="row featurette my-5">
            <div className="col-md-7 order-md-2">
              <h2 className="featurette-heading fw-bold lh-1 mb-4">
                {movie.title}
              </h2>

              <p className="lead">Release date: {movie.release_date}</p>
              <p className="lead">{movie.overview}</p>
              <p className="lead">
                Rating: {movie.vote_average} from {movie.vote_count} reviews
              </p>
              <p className="lead">
                Rating: {movie.genre_ids} from {movie.vote_count} reviews
              </p>
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
            <div className="col-md-5 order-md-1">
              <img
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt=""
                className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
              />
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default MovieDetails;
