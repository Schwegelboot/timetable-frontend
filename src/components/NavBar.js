// src/components/NavBar.js

import React from "react";
import {Auth0Context, useAuth0} from "../react-auth0-spa";
import { Link } from "react-router-dom";

const NavBar = () => {
    const { isAuthenticated, loginWithRedirect, logout } = useAuth0();
    return (
        <div>
            {  /*     {!isAuthenticated && (
                <button onClick={() => loginWithRedirect({})}>Log in</button>
            )} */}

            {isAuthenticated && <button onClick={() => logout()}>Log out</button>}

            {isAuthenticated && (
                <span>
                    <Link to="/">Home</Link>&nbsp;
                    
                        <Link to="/profile">Profile</Link>
                    <Link to="/mycalendar">Kalender</Link>
                    <Link to="/eingabe">Eingabe</Link>
                </span>
            )}


        </div>
    );
};

export default NavBar;