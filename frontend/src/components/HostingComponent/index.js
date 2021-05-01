import React from 'react';
import "./hostingComponent.css";
import StatesComponent from './StatesComponent';
import ActivitiesComponent from './ActivitiesComponent';
import AccommodationsComponent from "./AccommComponent";
import SpotsComponent from './Spots';
import HeaderComponent from './HeaderComponent';
import SearchAllComponent from './AllSpots';

function HostingComponent() {

    return (
        <div className="body-div">
            <HeaderComponent />
            <div className="filters">
                <StatesComponent />
                <ActivitiesComponent />
                {/* <AccommodationsComponent /> */}
                {/* <SpotsComponent /> */}
            </div>
            <SearchAllComponent />
        </div>
    )
}


export default HostingComponent;
