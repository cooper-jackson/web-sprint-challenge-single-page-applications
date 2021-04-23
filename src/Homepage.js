import React from "react";
import {Route, Link} from 'react-router-dom';
import './Homepage.css'


export default function Homepage() {

    return(
        <div className="App">
            <header>
                <h2>Lambda Eats</h2>
                <div id="help-home-div">
                <button>Home</button>
                <button>Help</button>
                </div>
            </header>
            <div id="banner-img">
                <h1>Your favorite food, delivered while coding</h1>
                <Link to="/pizza">
                <button>Pizza?</button>
                </Link>
            </div>
        </div>
    )
}