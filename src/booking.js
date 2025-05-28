import React from "react";
import Form from "./form";
// import { useState } from "react";

const Booking = (props) => {

    return (

        <Form availableTimes={props.availableTimes} dispatch={props.dispatch} submitForm={props.submitForm}/>
    )
}

export default Booking;