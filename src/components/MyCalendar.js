import React, {Component, Fragment, useContext} from "react";


import {Calendar, components, momentLocalizer} from "react-big-calendar";
import moment from "moment";
import "../App.css";
import "react-big-calendar/lib/css/react-big-calendar.css";
import 'moment/locale/de';
import FetchDataService from "./FetchDataService";
import CreateDataService from "./CreateDataService";
import {Auth0Context, useAuth0} from "../react-auth0-spa";
import DeleteDataService from "./DeleteDataService";
import 'typeface-roboto';

const localizer = momentLocalizer(moment);
moment.locale('de');

const propTypes = {};

class MyCalendar extends Component {
    fetchDataService = new FetchDataService();
    createDataService = new CreateDataService();
    deleteDataService = new DeleteDataService();
    static contextType = Auth0Context;


    constructor(props) {
        super(props);
        this.state = {
            cal_events: [],
            timeslotId: String,
            userId: String
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
           this.createDataService.createLecture(title, start, end, this.state.userId);
        }
    };
//-----------------------------------------------------------------------------------------------------

//Clicking an existing event allows you to remove it
onSelectEvent(pEvent) {
    const r = window.confirm("Would you like to remove this event?");
    console.log(pEvent);
    let userIdFromEvent = pEvent.id.split("-")[1];
    let lectureId = pEvent.id.split("-")[0];
    if (userIdFromEvent===this.state.userId){
        if(r === true){
            this.deleteDataService.deleteLecture(lectureId);
        }
    }
}



//-----------------------------------------------------------------------------------------------------

     componentDidMount() {
        let context = this.context;
        this.setState({
            userId: context.user.sub
        });
        this.fetchDataService.fetchTimeslotId()
            .then(timeslotId => {
                this.fetchDataService.fetchLectureByTimeslotId(timeslotId)
                    .then(events => {
                        events.map(element=>{
                            element.start= moment.utc(element.start).toDate();
                            element.end= moment.utc(element.end).toDate();
                            return element;
                        }).map(eventList =>{
                            this.setState({
                                cal_events: events,
                                timeslotId: timeslotId
                            });
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
                        culture='de'
                        components={{
                            event: Event,
                            agenda: {
                                event: EventAgenda
                            },
                        }}
                        selectable
                        onSelectEvent={event => alert(event.title)}
                        onSelectSlot={this.handleSelect}

                        onSelectEvent = {event2 => this.onSelectEvent(event2)} //Fires selecting existing event

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
                <em style={{color: '#bf1650'}}>{event.title}</em>
                <p>{event.desc}</p>
            </span>
    );
}
MyCalendar.propTypes = propTypes;

export default MyCalendar;