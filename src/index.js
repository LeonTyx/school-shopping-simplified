import React from "react";
import ReactDOM from "react-dom";
import Routing from "./components/page-layouts/routing/routing";
import Navbar from "./components/page-layouts/navigation/navbar";
import { HashRouter as Router, Link } from "react-router-dom";

import "./styles.scss";

function App() {
  return (
    <Router>
      <header>
        <Link to="/">School Shopping Simplified</Link>
      </header>
      <Navbar />
      <main>
        <Routing />
      </main>
    </Router>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
