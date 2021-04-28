import React from 'react';
import HostingComponent from '../HostingComponent';
import HostingPage from "../HostingPage";
import { Route, Switch } from "react-router-dom";

// import StateHostingsComponent from '../StateHostingsComponent';


function HomePage() {


    return (
        <div>
            <Switch>
                <Route>
                    <HostingPage />
                </Route>
                {/* <Route path="/posts/:host.id">
                    <HostingPage />
                </Route> */}
            </Switch>
        </div>
    )
}


export default HomePage;
