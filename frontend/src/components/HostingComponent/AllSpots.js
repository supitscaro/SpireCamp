import React from 'react';
import { Link } from 'react-router-dom';
import Image from "../../images/allspots.jpeg";
import './allspots.css';

function SearchAllComponent() {

    return (
        <div className="search-all">
            <div className="img-outer">
                <img class="search-img" src={Image} alt="" />
            </div>
            <div className="allspots">
                <h2 className="allspots-title">Find your next adventure.</h2>
                <h2 className="subtitle">Don't miss your next getaway.</h2>
                <Link to="/all-hostings" className="search-all">
                    <h2>Search All Spots</h2>
                </Link>
            </div>
        </div>
    )
}


export default SearchAllComponent;
