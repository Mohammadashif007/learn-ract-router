import React from 'react';
import './Post.css';
import { Link, useNavigate } from 'react-router-dom';



const Post = ({post}) => {

    const navigate = useNavigate();
    const {title, body, id} = post;


    const handleNavigate = () => {
        navigate(`/posts/${id}`);
    }
    return (
        <div className='post'>
            <h5>{id}</h5>
            <h3>Title : {title}</h3>
            <p>{body}</p>
            <Link to={`/posts/${id}`}>Show Post Detail</Link>
            
            <button onClick={handleNavigate}>Show Post Detail</button>

        </div>
    );
};

export default Post;