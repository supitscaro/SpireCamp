import React from 'react';
import "./hostingComponent.css";
import StatesComponent from './StatesComponent';
import ActivitiesComponent from './ActivitiesComponent';
import AccommodationsComponent from "./AccommComponent";
import HeaderComponent from './HeaderComponent';
import SearchAllComponent from './AllSpots';
import Footer from '../Footer';

function HostingComponent() {

    return (
        <div className="body-div">
            <HeaderComponent />
            <div className="filters">
                <h2 className="states-intro">Search By Our Most Popular States</h2>
                <StatesComponent />
                <h2 className="activities-intro">Search By The Most Popular Activities Offered at Spots</h2>
                <ActivitiesComponent />
                <h2 className="accommodations-intro">Search By Accommodations Offered</h2>
                <p className="accommodations-expo-intro">Our spots offered are focused on providing helpful activities, workshops, and scenery to help you relax and de-stress.</p>
                <AccommodationsComponent />
                {/* <SpotsComponent /> */}
            </div>
            <SearchAllComponent />
            <Footer />
        </div>
    )
}


export default HostingComponent;
