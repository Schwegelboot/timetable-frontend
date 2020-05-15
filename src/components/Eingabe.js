

import * as React from "react";
import CreateTimeslotService from "./CreateTimeslotService";

class Eingabe extends React.Component {
    createTimeSlotService = new CreateTimeslotService();

    constructor(props) {
        super(props);
        this.state = {value: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    async handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
        console.log(event.target.value);
        console.log(event.target.value);
        console.log(event.target.value);
        let name = event.target.elements.name.value;
        let course = event.target.elements.course.value;
        let isActive = false;
        if (event.target.elements.isActive.value==="on"){
            isActive = true;
        }
        let startTime = event.target.elements.startTime.value;
        let endTime = event.target.elements.endTime.value;
        await this.createTimeSlotService.createTimeslot(name, course, isActive, startTime, endTime);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" placeholder="name" name="name" />
                <input type="text" placeholder="course" name="course"  />
                <input type="checkbox" placeholder="isActive" name="isActive"  />
                <input type="datetime" placeholder="startTime" name="startTime"/>
                <input type="datetime" placeholder="endTime" name="endTime"/>
                <input type="submit" />
            </form>
        );
    }
}

export default Eingabe;