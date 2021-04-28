import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import HostingPage from "./components/HostingPage";
import HomePage from "./components/HomePage";
import HostingComponent from './components/HostingComponent';
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import StateHostings from "./components/StateHostingsComponent";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route exact path="/">
            <HostingComponent />
          </Route>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          <Route path="/postings/:id">
            <HostingPage />
          </Route>
          <Route path="/states/:id">
            <StateHostings />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
