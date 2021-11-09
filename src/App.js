import { BrowserRouter, Switch, Route, NavLink, Redirect } from "react-router-dom";
import { HiHome } from "react-icons/hi";
import { MdGroup } from "react-icons/md";

import "./App.css";
import Movie from "./pages/Movie";
import Profile from "./pages/Profile";

function App() {
  return (
    <BrowserRouter>
      <header>
        <p id="titleGroup">Kelompok 30</p>
      </header>
      <Switch>
        <Route exact path="/">
          <Redirect to="/movie"/>
        </Route>
        <Route path="/movie">
          <Movie />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
      </Switch>
      <footer>
        <NavLink to="/movie" className="iconWrapper">
          <HiHome className="icon" />
          Movie
        </NavLink>
        <NavLink to="/profile" className="iconWrapper">
          <MdGroup className="icon" />
          Profile
        </NavLink>
      </footer>
    </BrowserRouter>
  );
}

export default App;
