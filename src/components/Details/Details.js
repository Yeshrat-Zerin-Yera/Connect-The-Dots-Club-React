import React from 'react';
import './Details.css';
import Profile from '../../images/profile.jpeg';

const Details = () => {
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
                <p>10s</p>
                <p>20s</p>
                <p>30s</p>
                <p>40s</p>
                <p>60s</p>
            </div>
            <h2>Activity Details</h2>
            <div className='activity-details'>
                <div className='activity-time'>
                    <h3>Activity Time</h3>
                    <h3><span>0</span> Seconds</h3>
                </div>
                <div className='break-time'>
                    <h3>Break Time</h3>
                    <h3><span>0</span> Seconds</h3>
                </div>
            </div>
            <button className='activity-completed-btn'>Activity Completed</button>
        </div>
    );
};

export default Details;