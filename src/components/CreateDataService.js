import React, {Component} from "react";
import Axios from "axios";
import MyCalendar from "./MyCalendar";
import moment from "moment";
import {Calendar} from "react-big-calendar";

class CreateDataService extends Component {
    async createLecture(title, start, end) {
        return Axios.post("http://localhost:8080/lecture/create", {
            name: title,
            lecturerID: "test",
            course: "WWI14B4",
            location: "EG",
            startTime: "2020-06-13T09:30:00.000Z",
            endTime: "2020-06-13T10:30:00.000Z",
        }).then(async (response) => {
            console.log(response.data)
        }).catch(error => {
            console.log(error);
        });
    }
}

export default CreateDataService;