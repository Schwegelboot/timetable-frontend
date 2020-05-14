import React, {Component} from "react";
import Axios from "axios";
import MyCalendar from "./MyCalendar";
import moment from "moment";
import {Calendar, momentLocalizer} from "react-big-calendar";
const localizer = momentLocalizer(moment);
moment.locale('de');

class FetchDataService extends Component {
    async fetchTimeslotId() {
        return Axios.get("http://localhost:8080/timeslot/get-single-via-course?course=WWI14B4")
            .then(async (response) => {
                return response.data.id;
            })
            .catch(function (error) {
                console.log(error);
            });

    }

    async fetchLectureByTimeslotId(timeslotId) {
        return Axios.get('http://localhost:8080/lecture/get-multiple-via-timeslot?timeslotID=' + timeslotId)
            .then(async (response) => {
                return response.data.map(item => {
                    return {
                        title: item.name,
                        start: item.startTime,
                        end: item.endTime,
                        desc: item.course,
                        id: item.id + "-" + item.lecturerID
                    };
                })
            })
            .catch(function (error) {
                console.log(error);
            });
    }
}

export default FetchDataService;