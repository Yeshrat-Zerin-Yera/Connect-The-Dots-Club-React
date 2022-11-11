import React from 'react';
import './Activity.css';

const Activity = ({ activity, handleActivityTime }) => {
    const { img, name, info, age, time } = activity;
    return (
        <div className='activity'>
            <img src={img} className='activity-img' alt=''></img>
            <div className='activity-info'>
                <h3>{name}</h3>
                <p>{info}</p>
                <p><b>For Age: {age}</b></p>
                <p><b>Time Required: {time}s</b></p>
            </div>
            <button onClick={() => handleActivityTime(time)} className='add-to-list-btn'>Add To List</button>
        </div>
    );
};

export default Activity;