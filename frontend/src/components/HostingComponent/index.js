import React from 'react';
import "./hostingComponent.css";
import StatesComponent from './StatesComponent';
import ActivitiesComponent from './ActivitiesComponent';
import AccommodationsComponent from "./AccommComponent";
import SpotsComponent from './Spots';
import HeaderComponent from './HeaderComponent';

function HostingComponent() {

    return (
        <div>
            <HeaderComponent />
            <div className="filters">
                <StatesComponent />
                <ActivitiesComponent />
                <AccommodationsComponent />
                {/* <SpotsComponent /> */}
            </div>
        </div>
    )
}


export default HostingComponent;
