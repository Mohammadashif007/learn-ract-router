import React from 'react';
import { Outlet } from 'react-router';
import Header from '../Header/Header';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <h2>This is Home Route</h2>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;