import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import Header from "./components/Header/Header";
import Movies from "./pages/Movies/";
import MovieDetails from "./components/MovieDetails/MovieDetails";
import { useState } from "react";
import WatchList from "./pages/Watchlist";
import NotFound from "./pages/NotFound";
import Register from "./pages/Register"
function App() {
  const [watchList, setWatchList] = useState([]);

  function handleAddWatchList(data) {
    let flag;
    watchList?.map((movie) => {
      if (movie.id == data.id) {
        alert(`${movie.title} already exist in watchlist.`);
        flag = true;
      }
    });
    if (!flag) {
      setWatchList([...watchList, data]);
      alert(`${data.title} successfuly added to watchlist.`);
    }
  }

  function handleRemoveWatchList(movieId) {
    setWatchList(
      watchList.filter((movie) => {
        return movie.id !== movieId;
      })
    );
  }

  return (
    <>
      <BrowserRouter>
        <Header watchList={watchList} />
        <div className="container my-2">
          <Routes>
            <Route
              path="/"
              element={<Movies handleAddWatchList={handleAddWatchList} />}
            />
            <Route
              path="/Watchlist"
              element={
                <WatchList
                  watchList={watchList}
                  handleRemoveWatchList={handleRemoveWatchList}
                />
              }
            />
            <Route path="/Register" element={<Register />} />
            <Route path="/MovieDetails/:id" element={<MovieDetails />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
