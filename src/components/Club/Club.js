import React, { useEffect, useState } from 'react';
import './Club.css';
import Logo from '../../images/logo.png';
import Activity from '../Activity/Activity';
import Details from '../Details/Details';

const Club = () => {
    const [activities, setActivities] = useState([]);
    const [activityTime, setActivityTime] = useState(0);

    useEffect(() => {
        fetch('activities.json')
            .then(res => res.json())
            .then(data => setActivities(data))
    }, []);

    const handleActivityTime = time => {
        let totalTime = activityTime + time;
        setActivityTime(totalTime);
    }

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
                        activities.map(activity => <Activity key={activity.id} activity={activity} handleActivityTime={handleActivityTime}></Activity>)
                    }
                </div>
            </div>

            {/* Details Container */}
            <div className='details-container'>
                <Details activityTime={activityTime}></Details>
            </div>
        </div>
    );
};

export default Club;