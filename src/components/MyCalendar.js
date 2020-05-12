import React, {Component, Fragment} from "react";
import {useAuth0} from "../react-auth0-spa";

import {Calendar, components, momentLocalizer} from "react-big-calendar";
import moment from "moment";
import "../App.css";
import "react-big-calendar/lib/css/react-big-calendar.css";
import 'moment/locale/de';
import FetchDataService from "./FetchDataService";
import CreateDataService from "./CreateDataService";

const localizer = momentLocalizer(moment);
moment.locale('de');

const propTypes = {};

class MyCalendar extends Component {
    fetchDataService = new FetchDataService();
    createDataService = new CreateDataService();

    constructor(props) {
        super(props);
        this.state = {
            cal_events: [],
            timeslotId: String
        }
    }

    handleSelect = ({ start, end }) => {
        const title = window.prompt('Enter the title for a new calendar entry')
        if (title){
            this.setState({
                cal_events: [
                    ...this.state.cal_events,
                    {
                        start,
                        end,
                        title,
                    },
                ],
            });
           this.createDataService.createLecture(title, start, end);
        }
    };

    async componentDidMount() {
        await this.fetchDataService.fetchTimeslotId()
            .then(timeslotId => {
                this.fetchDataService.fetchLectureByTimeslotId(timeslotId)
                    .then(events => {
                        this.setState({
                            cal_events: events,
                            timeslotId: timeslotId
                        });
                    });
            });
    }

    render() {
        const {cal_events} = this.state;
        return (
            <div>
                <p>
                    Timeslot: {this.state.timeslotId}
                </p>
                <div style={{height: '500pt'}}>
                    <Calendar
                        events={cal_events}
                        //         defaultView="month"
                        startAccessor="start"
                        endAccessor="end"
                        defaultDate={moment().toDate()}
                        localizer={localizer}
                        components={{
                            event: Event,
                            agenda: {
                                event: EventAgenda
                            },
                        }}
                        selectable
                        onSelectEvent={event => alert(event.title)}
                        onSelectSlot={this.handleSelect}
                    />
                </div>
            </div>
        );
    }
}

function Event({event}) {
    return (
        <span>
      <strong>{event.title}</strong>
            {event.desc && ':  ' + event.desc}
    </span>
    )
}

function EventAgenda({event}) {
    return (
        <span>
                <em style={{color: 'magenta'}}>{event.title}</em>
                <p>{event.desc}</p>
            </span>
    );
}

/* return (
      <Fragment>
          <img src={user.picture} alt="Profile" />

          <h2>{user.name}</h2>
          <p>{user.email}</p>
          <code>{JSON.stringify(user, null, 2)}</code>
      </Fragment>
  );
};
*/
MyCalendar.propTypes = propTypes;

export default MyCalendar;