

import React, {Component} from "react";
import Axios from "axios";
import moment from "moment";
import {Calendar, momentLocalizer} from "react-big-calendar";

const localizer = momentLocalizer(moment);
moment.locale('de');


class CreateTimeslotService extends Component {
    async createTimeslot(name, course, isActive, startTime, endTime) {
        return Axios.post("http://localhost:8080/timeslot/create", {
            name: name,
            course: course,
            isActive: isActive,
            startTime: startTime,   //"2020-06-13T09:30:00.000Z",
            endTime: endTime, //"2020-06-13T10:30:00.000Z",
        }).then(async (response) => {
            console.log(response.data)
        }).catch(error => {
            console.log(error);
        });
    };
}

export default CreateTimeslotService;