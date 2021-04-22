import "./App.css";
import { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import Home from "./components/Home";
import { useDispatch, useSelector } from "react-redux";
import { handleCheckAuth } from "./redux/actions/user";
import { history } from "./helpers/history";
function App() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  // console.log(state.user.user);
  const isLoggedIn = state.user.user ? true : false;

  useEffect(() => {
    dispatch(handleCheckAuth());
  }, [dispatch]);
  return (
    <>
      <Router history={history}>
        <Switch>
          <Route exact path={["/", "/Home"]}>
            {isLoggedIn ? <Home /> : <Login />}
          </Route>
          <Route path="/register">{isLoggedIn ? <Home /> : <Register />}</Route>
          <Route path="/login">{isLoggedIn ? <Home /> : <Login />}</Route>
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
