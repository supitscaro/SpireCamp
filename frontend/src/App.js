import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import HostingPage from "./components/HostingPage";
import HostingComponent from './components/HostingComponent';
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import StateHostings from "./components/StatesPage";
import { findAllStates } from "./store/hostings";
import ActivityHostings from "./components/ActivitiesPage";
import AccommodationsHostings from "./components/AccommodationsPage";
import SpotsComponent from "./components/HostingComponent/Spots";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    dispatch(findAllStates());
  }, [dispatch]);

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
          <Route path="/activities/:id">
            <ActivityHostings />
          </Route>
          <Route path="/accommodations/:id">
            <AccommodationsHostings />
          </Route>
          <Route path="/all-hostings">
            <SpotsComponent />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
