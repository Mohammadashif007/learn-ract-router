import React from 'react';
import { useLoaderData, useNavigate } from 'react-router';

const PostDetail = () => {
    const postInfo = useLoaderData();
    const navigate = useNavigate();

    const handleNavigateBack = () =>  {
        navigate(-1);
    }
    
    return (
        <div>
            <h3>All post Detail here</h3>
            <h2>{postInfo.body}</h2>
            <button onClick={handleNavigateBack}>Go Back</button>
        </div>
    );
};

export default PostDetail;