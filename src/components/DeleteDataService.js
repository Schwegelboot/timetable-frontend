import React, {Component} from "react";
import Axios from "axios";
import moment from "moment";
import {Calendar, momentLocalizer} from "react-big-calendar";

const localizer = momentLocalizer(moment);
moment.locale('de');

class DeleteDataService extends Component {
    async deleteLecture(lectureID) {
        return Axios.delete("http://localhost:8080/lecture/delete", {
            lectureID: lectureID,

            name: title,
            lecturerID: userId,    // userId,
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

export default DeleteDataService;