import React, {Component} from 'react';
import { useForm } from 'react-hook-form';
import "../App.css";

//class Eingabe extends Component{

function Eingabe() {
    const { register, handleSubmit,watch, errors } = useForm();
    const onSubmit = data => {console.log(data);};
    console.log(errors);
    console.log(watch("example")); // you can watch individual input by pass the name of the input


        return (
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="text" placeholder="Name" name="Name" ref={register({required: true, maxLength: 80})}/>
                <input type="text" placeholder="Email" name="Email"
                       ref={register({required: true, pattern: /^\S+@\S+$/i})}/>
                <input type="text" placeholder="Course" name="Course" ref={register({required: true, maxLength: 80})}/>
                <input type="text" placeholder="Location" name="Location"
                       ref={register({required: true, maxLength: 45})}/>
                <input type="datetime" placeholder="Day" name="Day" ref={register({required: true})}/>
                <input type="time" placeholder="Starttime" name="Starttime" ref={register}/>
                <input type="time" placeholder="EndTime" name="EndTime" ref={register}/>

                <input type="submit"/>
            </form>
        );

}
export default Eingabe;