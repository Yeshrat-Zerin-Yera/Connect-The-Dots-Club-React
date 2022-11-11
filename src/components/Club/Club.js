import React, { useEffect, useState } from 'react';
import './Club.css';
import Logo from '../../images/logo.png';
import Activity from '../Activity/Activity';
import Details from '../Details/Details';

const Club = () => {
    const [activities, setActivities] = useState([]);

    useEffect(() => {
        fetch('activities.json')
            .then(res => res.json())
            .then(data => setActivities(data))
    }, []);

    return (
        <div className='club'>
            {/* Activities Container */}
            <div className='activities-container'>
                <div className='club-title'>
                    <img src={Logo} className='club-logo' alt=''></img>
                    <h1 className='club-name'>Connect The Dots Club</h1>
                </div>
                <h2>Select Today's Activity</h2>
                <div className='activities'>
                    {
                        activities.map(activity => <Activity key={activity.id} activity={activity}></Activity>)
                    }
                </div>
            </div>

            {/* Details Container */}
            <div className='details-container'>
                <Details></Details>
            </div>
        </div>
    );
};

export default Club;