import React from "react";

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import Movies from "./components/Movies";

function App() {

  return (
    <BrowserRouter>

      <div className="app">

        <Header />

        <Routes>

          <Route
            path="/"
            element={<Home />}
          />

          <Route
            path="/about/*"
            element={<About />}
          />

          <Route
            path="/movies"
            element={<Movies />}
          />

        </Routes>

        <Footer />

      </div>

    </BrowserRouter>
  );
}

export default App;