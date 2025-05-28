import React, { useReducer, useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Booking from "./booking";
import Confirmation from "./confirmation";
import Main from "./main";
import Header from "./header";
import Footer from "./footer";

// function Home() {
//     return (
//       <>
//         <Header />
//         <Main />
//       </>
//     );
//   }


const Logic = () => {
    const seededRandom = function (seed) {
        var m = 2**35 - 31;
        var a = 185852;
        var s = seed % m;
        return function () {
            return (s = s * a % m) / m;
        };
    }

    const fetchAPI = function(date) {
        let result = [];
        let random = seededRandom(date.getDate());

        for(let i = 17; i <= 23; i++) {
            if(random() < 0.5) {
                result.push(i + ':00');
            }
            if(random() < 0.5) {
                result.push(i + ':30');
            }
        }
        return result;
    };
    const submitAPI = function(formData) {
        return true;
    };

    const initialState = {availableTimes:  fetchAPI(new Date())}
    const [state, dispatch] = useReducer(updateTimes, initialState);

    function updateTimes(state, date) {
        return {availableTimes: fetchAPI(new Date(date))}
    }
    const [bookingState, bookingDispatch] = useReducer(updateTimes, initialState);
    const navigate = useNavigate();
    function submitForm (formData) {
        if (submitAPI(formData)) {
            navigate("/confirmed")
        }
    }

    return(
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/booking" element={<Booking availableTimes={bookingState} dispatch={bookingDispatch} submitForm={submitForm} />}/>
                {/* <Route path="/booking" element={<Booking availableTimes={state} dispatch={dispatch} submitForm={submitForm}/>} /> */}
                <Route path="/confirmed" element={<Confirmation/> } />
            </Routes>


    )
}

export default Logic;