import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getHostings } from "../../store/hostings";
import "./hostingComponent.css";
import StatesComponent from './StatesComponent';
import ActivitiesComponent from './ActivitiesComponent';
import SpotsComponent from './Spots';

function HostingComponent() {

    return (
        <div>
            <div class="filters">
                <StatesComponent />
                <ActivitiesComponent />
                <SpotsComponent />
            </div>
        </div>
    )
}


export default HostingComponent;
