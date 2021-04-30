import React from 'react';
import "./hostingComponent.css";
import StatesComponent from './StatesComponent';
import ActivitiesComponent from './ActivitiesComponent';
import AccommodationsComponent from "./AccommComponent";
import SpotsComponent from './Spots';

function HostingComponent() {

    return (
        <div>
            <div className="filters">
                <StatesComponent />
                <ActivitiesComponent />
                <AccommodationsComponent />
                <SpotsComponent />
            </div>
        </div>
    )
}


export default HostingComponent;
