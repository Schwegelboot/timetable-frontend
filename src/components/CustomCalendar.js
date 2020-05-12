// src/components/Profile.js

import React from "react";
import {useAuth0} from "../react-auth0-spa";
import {Calendar, momentLocalizer} from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import 'moment/locale/de';
import 'typeface-roboto';

//-------------------------------------------------------------------------------------

//-------------------------------------------------------------------------------------

const CustomCalendar = () => {
    const { loading, user } = useAuth0();

    const localizer = momentLocalizer(moment);
    moment.locale('de');

    if (loading || !user) {
        return <div>Loading...</div>;
    }


    let state;
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





  //  render()
    //{
        return (
            <div className="App">
                <Calendar
                    localizer={localizer}
                    defaultDate={new Date()}
                    defaultView="month"
                    events={this.state.events}
                    style={{height: "100vh"}}
                />
            </div>
        );
  //  }
};

export default CustomCalendar;

//------------------------------------------------------------------------------------------------------------------
/*class App extends Component {
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
                    style={{height: "100vh"}}
                />
            </div>
        );
    }
}}*/