import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Navbar from "./statics/Navbar/Navbar";
import Footer from "./statics/Footer/Footer";
// import Topnav from "./Components/Navbar/Topnav";

const App = () => {
  return (
    <Router>
      {/* <Topnav /> */}
      <Navbar />
      <main>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/About" exact>
            <About />
          </Route>
          <Route path="/Contact" exact>
            <Contact />
          </Route>

          <Redirect to="/" />
        </Switch>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
