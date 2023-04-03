import React from 'react';
import './Friend.css';
import { Link } from 'react-router-dom';

const Friend = ({friend}) => {
    const {name, email, phone, id} = friend;
    return (
        <div className='friend-info'>
            <h3>{name}</h3>
            <h4>{email}</h4>
            <h5>{phone}</h5>
            <p><Link to = {`/friend/${id}`}>Show details</Link></p>
        </div>
    );
};

export default Friend;