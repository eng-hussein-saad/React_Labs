/* eslint-disable react/prop-types */
import React, { useEffect, useState, useRef } from "react";
import "../components/Movies/Movies.css";
import MovieCard from "../components/MovieCard/MovieCard";
import axiosInstance from "../apis/config";
import Pagination from "../components/pagination/Pagination";
import { useNavigate } from "react-router";

function Movies(props) {
  const navigate = useNavigate();
  const { handleAddWatchList } = props;
  const [movies, setMovies] = useState(null);
  const [page, setPage] = useState(1);
  const [firstPage, setFirstPage] = useState(null);
  const [lastPage, setLastPage] = useState(null);
  const [search, setSearch] = useState(null);

  const searchRef = useRef();
  function handleRedirectView(id) {
    navigate(`/MovieDetails/${id}`);
  }

  function handleSearchChange(data) {
    setSearch(data);
  }

  function handleResetClick() {
    setPage(1);
    searchRef.current.value = "";
    axiosInstance
      .get("/movie/popular", {
        params: {
          order: "desc",
          sortBy: "popularity",
        },
      })
      .then((res) => {
        setMovies(res.data.results);
        setFirstPage(res.data.page || 0);
        //because api has maximum of 500 pages
        if (res.data.total_pages > 500) {
          res.data.total_pages = 500;
        }
        setLastPage(res.data.total_pages || 0);
      })
      .catch((err) => console.log(err));
  }

  function handleSearchClick() {
    setFirstPage(null);
    setLastPage(null);
    setPage(1);
    axiosInstance
      .get("/search/movie", {
        params: {
          query: search,
        },
      })
      .then((res) => {
        setMovies(res.data.results);
        setFirstPage(res.data.page || 0);
        //because api has maximum of 500 pages
        if (res.data.total_pages > 500) {
          res.data.total_pages = 500;
        }
        setLastPage(res.data.total_pages || 0);
      })
      .catch((err) => console.log(err));
  }

  function handlePageChange(val) {
    setPage(val);
  }

  //get first and last page when rendering first time used for pagination.
  useEffect(() => {
    axiosInstance
      .get("/movie/popular", {
        params: {
          order: "desc",
          sortBy: "popularity",
        },
      })
      .then((res) => {
        setFirstPage(res.data.page || 0);
        if (res.data.total_pages > 500) {
          res.data.total_pages = 500;
        }
        setLastPage(res.data.total_pages || 0);
      })
      .catch((err) => console.log(err));
  }, []);

  //fetch movies and fires each time we change page.
  //first time it will go in the else to get all movies,
  //searching.
  useEffect(() => {
    if (search) {
      axiosInstance
        .get("/search/movie", {
          params: {
            query: search,
            page: page,
          },
        })
        .then((res) => {
          setMovies(res.data.results);
          setSearch(null);
        })
        .catch((err) => console.log(err));
    } else {
      axiosInstance
        .get("/movie/popular", {
          params: {
            page: page,
            order: "desc",
            sortBy: "popularity",
          },
        })
        .then((res) => {
          setMovies(res.data.results);
        })
        .catch((err) => console.log(err));
    }
  }, [page]);

  return (
    <>
      <div className="container p-5 search">
        <h2> Welcome To our movie app</h2>
        <p>Millions of movies, TV shows and people to discover. Explore now</p>
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            placeholder="Search and explore..."
            aria-label="Username"
            aria-describedby="addon-wrapping"
            ref={searchRef}
            onChange={(e) => handleSearchChange(e.target.value)}
          />
          <button
            type="button"
            className="btn btn-warning mx-2"
            disabled={!searchRef.current?.value}
            onClick={handleSearchClick}
          >
            Search
          </button>
          <button
            type="button"
            className="btn btn-danger mx-2"
            onClick={handleResetClick}
          >
            Reset
          </button>
        </div>
      </div>
      <h3 className="my-4">Popular Movies</h3>
      <div className="row row-cols-1 row-cols-md-4 g-4 ">
        {movies?.map((movie) => (
          <div className="col" key={movie.id}>
            <MovieCard movie={movie} handleRedirectView={handleRedirectView} />
          </div>
        ))}
      </div>
      <Pagination
        firstPage={firstPage}
        lastPage={lastPage}
        page={page}
        handlePageChange={handlePageChange}
      />
    </>
  );
}

export default Movies;
