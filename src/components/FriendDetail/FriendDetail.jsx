import React from 'react';
import { useLoaderData } from 'react-router';

const FriendDetail = () => {
    const friendInfo = useLoaderData();
    console.log(friendInfo);
    return (
        <div>
            <h3>Everything about this person is here.</h3>
            <h4>{friendInfo.name}</h4>
            <h3>{friendInfo.phone}</h3>
            <button>Go Back</button>
        </div>
    );
};

export default FriendDetail;