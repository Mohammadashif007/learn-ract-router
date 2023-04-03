import React from 'react';
import './Friend.css';

const Friend = ({friend}) => {
    const {name, email, phone} = friend;
    return (
        <div className='friend-info'>
            <h3>{name}</h3>
            <h4>{email}</h4>
            <h5>{phone}</h5>
        </div>
    );
};

export default Friend;