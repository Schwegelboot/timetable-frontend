import React, {Component} from "react";
import Axios from "axios";
import moment from "moment";
import {Calendar, momentLocalizer} from "react-big-calendar";

const localizer = momentLocalizer(moment);
moment.locale('de');

class DeleteDataService extends Component {
    async deleteLecture(lectureID) {
         Axios.delete("http://localhost:8080/lecture/delete?lectureID=" + lectureID)
            .then(async (response) => {
            console.log(response.data)
        }).catch(error => {
            console.log(error);
        });
    };
}

export default DeleteDataService;