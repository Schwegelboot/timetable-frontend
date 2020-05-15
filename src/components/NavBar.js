// src/components/NavBar.js

import React from "react";
import {Auth0Context, useAuth0} from "../react-auth0-spa";
import { Link } from "react-router-dom";
import 'bulma/css/bulma.css';


const NavBar = () => {
    const { isAuthenticated, loginWithRedirect, logout, user } = useAuth0();
    let hasRole = false;
    if (isAuthenticated){
        let adminUser= "5eb71511d0fa1e0bfeee3e74";
        if (user.sub.split("|")[1]===adminUser){
            hasRole = true;
        }
    }

    return (
        <div>
            {  /*     {!isAuthenticated && (
                <button onClick={() => loginWithRedirect({})}>Log in</button>
            )} */}


            {isAuthenticated && (

                <nav class="navbar" role="navigation" aria-label="main navigation">
                    <div className="navbar-start">
                        <div className="navbar-item">
                        <div className="buttons">
                            <button className="button is-danger" onClick={() => logout({})}>Log out</button>


                        </div>
                        </div>
                    </div>

                    <div className="navbar-end">
                        <a className="navbar-item">
                            <Link to="/profile">Profile</Link>
                        </a>
                        <a className="navbar-item">
                            <Link to="/mycalendar">Kalender</Link>
                        </a>
                        <a className="navbar-item">
                            {hasRole && (<Link to="/eingabe">Eingabe</Link>)}
                        </a>
                    </div>
                </nav>
            )}


        </div>


    );
};

export default NavBar;

/*
<Link to="/">Home</Link>&nbsp;
<Link to="/profile">Profile</Link>
<Link to="/mycalendar">Kalender</Link>
<Link to="/eingabe">Eingabe</Link>
 */