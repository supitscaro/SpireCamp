import React from 'react';
import Image from "../../images/allspots.jpeg";
import './allspots.css';

function SearchAllComponent() {

    return (
        <div className="search-all">
            <img class="search-img" src={Image} alt="" />
        </div>
    )
}


export default SearchAllComponent;
