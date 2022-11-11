import React, { useEffect, useState } from 'react';
import './Details.css';
import Profile from '../../images/profile.jpeg';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Details = ({ activityTime }) => {
    const [breakTime, setBreakTime] = useState(0);

    useEffect(() => {
        const breakTime = localStorage.getItem('Break Time');
        if (breakTime) {
            setBreakTime(breakTime);
        }
        else {
            localStorage.setItem('Break Time', 0);
        }
    }, [])

    const handleBreakTime = (time) => {
        setBreakTime(time);
        localStorage.setItem('Break Time', time);
    }

    // Toast
    const notify = () => toast.success("Activity Completed!", { position: "top-center" });

    return (
        <div className='details'>
            <div className='profile'>
                <img src={Profile} className='profile-img' alt=''></img>
                <div className='profile-details'>
                    <h2>Nicola Florence</h2>
                    <p><small>Canberra, Australia</small></p>
                </div>
            </div>
            <div className='physical-info'>
                <div>
                    <h2>55<small>kg</small></h2>
                    <p>Weight</p>
                </div>
                <div>
                    <h2>5.4</h2>
                    <p>Height</p>
                </div>
                <div>
                    <h2>24<small>yrs</small></h2>
                    <p>Weight</p>
                </div>
            </div>
            <h2>Select Break</h2>
            <div className='breaks'>
                <p onClick={() => handleBreakTime(10)}>10s</p>
                <p onClick={() => handleBreakTime(20)}>20s</p>
                <p onClick={() => handleBreakTime(30)}>30s</p>
                <p onClick={() => handleBreakTime(40)}>40s</p>
                <p onClick={() => handleBreakTime(60)}>60s</p>
            </div>
            <h2>Activity Details</h2>
            <div className='activity-details'>
                <div className='activity-time'>
                    <h3>Activity Time</h3>
                    <h3><span>{activityTime}</span> Seconds</h3>
                </div>
                <div className='break-time'>
                    <h3>Break Time</h3>
                    <h3>{breakTime} Seconds</h3>
                </div>
            </div>
            <button onClick={notify} className='activity-completed-btn'>Activity Completed</button>
            <ToastContainer />
        </div>
    );
};

export default Details;