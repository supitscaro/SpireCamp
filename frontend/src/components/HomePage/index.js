import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import HostingComponent from '../HostingComponent';
import { oneHosting } from "../../store/hostings";

function HomePage() {
    const dispatch = useDispatch();
    const { hostingId } = useParams();
    // const hostingLists = useSelector((state) => state.hosting.list);

    // useEffect(() => {
    //     dispatch(oneHosting(hostingId));
    // }, [dispatch]);

    return (
        <div>
            <HostingComponent />
            {/* {console.log(hostingLists)} */}
        </div>
    )
}


export default HomePage;
