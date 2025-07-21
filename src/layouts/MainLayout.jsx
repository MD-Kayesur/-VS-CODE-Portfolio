import React from 'react';
 import { Outlet } from 'react-router-dom';
import Navber from '../components/navbar/Navber';
import Dashbors from '../components/dashbord/Dashbors';
 

const MainLayout = () => {
    return (
        <div >
            <Navber></Navber>
            
            <div>
                <Dashbors></Dashbors>
            </div>
        </div>
    );
};

export default MainLayout;