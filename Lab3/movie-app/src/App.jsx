import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import Header from "./components/Header/Header";
import Movies from "./pages/Movies/";
import MovieDetails from "./components/MovieDetails/MovieDetails";
import WatchList from "./pages/Watchlist";
import NotFound from "./pages/NotFound";
import { Provider } from "react-redux";
import store from "./store/index.js";
import Register from "./pages/Register.jsx";
function App() {
  return (
    <>
      <BrowserRouter>
        <Provider store={store}>
          <Header />
          <div className="container my-2">
            <Routes>
              <Route path="/" element={<Movies />} />
              <Route path="/Watchlist" element={<WatchList />} />
              <Route path="/Register" element={<Register />} />
              <Route path="/MovieDetails/:id" element={<MovieDetails />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
