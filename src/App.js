import React, { Component } from "react";
import {Calendar, components, momentLocalizer} from "react-big-calendar";
import moment from "moment";

import "./App.css";
import "react-big-calendar/lib/css/react-big-calendar.css";
import 'moment/locale/de';
import 'typeface-roboto';
import PrivateRoute from "./components/PrivateRoute";
import history from "./utils/history";
import { Router, Route, Switch } from "react-router-dom";

import Profile from "./components/Profile";

// src/App.js
import NavBar from "./components/NavBar";
import { useAuth0 } from "./react-auth0-spa";
import CustomCalendar from "./components/CustomCalendar";
import MyCalendar from "./components/MyCalendar"
import 'bulma/css/bulma.css';
import Eingabe from "./components/Eingabe";
//-------------------------------------------------------------------------------

function App() {
    const { loading, loginWithRedirect, isAuthenticated } = useAuth0();

    if (loading) {
        return <div>Loading..</div>;
    }

    return (
        <div className="App">
            {/* Don't forget to include the history module */}
            <Router history={history}>
                <header>
                    <NavBar />
                </header>

                    {!isAuthenticated && (
                        <button className="button is-danger" onClick={() => loginWithRedirect({})}>Log in</button>
                    )}
                <Switch>
                    <Route  path="/" exact />
                    <PrivateRoute path="/profile" component={Profile} />
                    <PrivateRoute path="/mycalendar" component={MyCalendar}/>
                    <Route path="/eingabe" component={Eingabe}/>
                </Switch>

            </Router>

        </div>
    );
}

export default App;

//-------------------------------------------------------------------------------------------
/*

const localizer = momentLocalizer(moment);
moment.locale('de');


class App extends Component {
  state = {
    events: [
      {
        start: moment().toDate(),
        end: moment()
            .add(1, "days")
            .toDate(),
        title: "Some title"
      }
    ]
  };

  render() {
    return (
        <div className="App">
          <button onClick={() => this.handleLogoutClick()}>Logout</button>
          <Calendar
              localizer={localizer}
              defaultDate={new Date()}
              defaultView="month"
              events={this.state.events}
              style={{ height: "100vh" }}
          />
        </div>
    );
  }
}

export default App;
*/