import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import Home from "./components/Home";
function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path={["/", "/Home"]}>
            <Home />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="*">
            <div className="container">
              <div className="row justify-content-center mt-5 h1">
                404 Page is not found
              </div>
            </div>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
