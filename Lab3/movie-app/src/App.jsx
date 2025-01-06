import { BrowserRouter, Route, Routes } from "react-router";
import React, { Suspense, useState } from "react";
import "./App.css";
import Header from "./components/Header/Header.jsx";
import { Provider } from "react-redux";
import LanguageContext from "./context/language";
import store from "./store/index.js";
function App() {
  const [lang, setLang] = useState("en");
  const Movies = React.lazy(() => import("./pages/Movies/"));
  const MovieDetails = React.lazy(() =>
    import("./components/MovieDetails/MovieDetails")
  );
  const NotFound = React.lazy(() => import("./pages/NotFound"));
  const Register = React.lazy(() => import("./pages/Register.jsx"));
  const WatchList = React.lazy(() => import("./pages/Watchlist"));

  return (
    <>
      <BrowserRouter>
        <LanguageContext.Provider value={{ lang, setLang }}>
          <Provider store={store}>
            <Header />
            <div className="container my-2" dir={lang === "ar" ? "rtl" : "ltr"}>
              <Suspense fallback={<p>Loading...</p>}>
                <Routes>
                  <Route path="/" element={<Movies />} />
                  <Route path="/Watchlist" element={<WatchList />} />
                  <Route path="/Register" element={<Register />} />
                  <Route
                    path="/MovieDetails/:id"
                    element={<MovieDetails />}
                    lang={lang}
                  />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </Suspense>
            </div>
          </Provider>
        </LanguageContext.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
