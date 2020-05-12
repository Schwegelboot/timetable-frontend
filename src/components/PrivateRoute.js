// src/components/PrivateRoute.js

import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import { useAuth0 } from "../react-auth0-spa";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import CustomCalendar from "./CustomCalendar";

const PrivateRoute = ({ component: Component, path, ...rest }) => {
    const { loading, isAuthenticated, loginWithRedirect } = useAuth0();
    const localizer = momentLocalizer(moment);
    moment.locale('de');

    useEffect(() => {
        if (loading || isAuthenticated) {
            return;
        }
        const fn = async () => {
            await loginWithRedirect({
                appState: {targetUrl: window.location.pathname}
            });
        };
        fn();
    }, [loading, isAuthenticated, loginWithRedirect, path]);

    const render = props =>
        isAuthenticated === true ? <Component {...props} /> :null;
            /*    <div className="App">
                    <button onClick={() => this.handleLogoutClick()}>Logout</button>
                    <Calendar
                        localizer={localizer}
                        defaultDate={new Date()}
                        defaultView="month"
                        style={{ height: "100vh" }}
                    />
                </div>*/

    return <Route path={path} render={render} {...rest} />;
};

export default PrivateRoute;