import React, {Component} from "react";
import Axios from "axios";
import moment from "moment";
import {Calendar, momentLocalizer} from "react-big-calendar";

const localizer = momentLocalizer(moment);
moment.locale('de');

class CreateDataService extends Component {
    async createLecture(title, start, end, userId) {
        return Axios.post("http://localhost:8080/lecture/create", {
            name: title,
            lecturerID: userId,
            course: "WWI14B4",
            location: "EG",
            startTime: moment.utc(start).toDate(),   //"2020-06-13T09:30:00.000Z",
            endTime: moment.utc(end).toDate(), //"2020-06-13T10:30:00.000Z",
        }).then(async (response) => {
            console.log(response.data)
        }).catch(error => {
            console.log(error);
        });
    };
}

export default CreateDataService;