import React from "react";
import "./styles.css";

import Navbar1 from './sidebar'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// PAGES
import Home from "./pages/Home";
import StudentComponent from "./pages/StudentComponent";
import Reports from "./pages/Reports";
import Footer from './pages/Footer';

export default function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Student" component={StudentComponent} />
          <Route path="/reports" component={Reports} />
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}
