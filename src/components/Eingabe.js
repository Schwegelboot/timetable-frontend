import React, {Component} from 'react';
import { useForm } from 'react-hook-form';
import "../App.css";
import Axios from "axios";
import moment from "moment";

//class Eingabe extends Component{

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



function Eingabe() {
    const { register, handleSubmit,watch, errors } = useForm();
    const onSubmit = data => {console.log(data);};
    console.log(errors);
    console.log(watch("example")); // you can watch individual input by pass the name of the input


    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" placeholder="name" name="name" ref={register({required: true})} />
            <input type="text" placeholder="course" name="course" ref={register({required: true})} />
            <input type="checkbox" placeholder="isActive" name="isActive" ref={register} />
            <input type="datetime" placeholder="startTime" name="startTime" ref={register({required: true})} />
            <input type="datetime" placeholder="endTime" name="endTime" ref={register({required: true})} />

            <input type="submit" />
        </form>
        );

}
export default Eingabe;
