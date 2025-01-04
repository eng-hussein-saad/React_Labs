/* eslint-disable react/prop-types */
import { useState } from "react";
import WatchlistCard from "../components/MovieCard/WatchlistCard";
import { useNavigate } from "react-router";
function WatchList(props) {
  const { watchList, handleRemoveWatchList } = props;
  const navigate = useNavigate();

  function handleRedirectView(id) {
    navigate(`/MovieDetails/${id}`);
  }
  return (
    <>
      <h3 className="my-4">Your Watchlist</h3>
      <div className="row row-cols-1 row-cols-md-5 g-4">
        {watchList?.map((movie) => (
          <div className="col" key={movie.id}>
            <WatchlistCard
              movie={movie}
              handleRedirectView={handleRedirectView}
              handleRemoveWatchList={handleRemoveWatchList}
            />
          </div>
        ))}
      </div>
    </>
  );
}

export default WatchList;
