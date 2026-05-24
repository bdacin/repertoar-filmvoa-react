import React from "react";

import {
  Link,
  Routes,
  Route
} from "react-router-dom";

import AppInfo from "./AppInfo";
import AuthorInfo from "./AuthorInfo";

function About() {

  return (
    <div>

      <h1>About</h1>

      <nav>

        <Link to="app">App Info</Link>

        {" | "}

        <Link to="author">Author Info</Link>

      </nav>

      <Routes>

        <Route
          path="app"
          element={<AppInfo />}
        />

        <Route
          path="author"
          element={<AuthorInfo />}
        />

      </Routes>

    </div>
  );
}

export default About;