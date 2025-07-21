import React from 'react';
import FileNavber from '../filenavber/FileNavber';
import { Outlet } from 'react-router-dom';

const DashbordFile = () => {
    return (
        <div>
            <FileNavber></FileNavber>
           {/* <Outlet></Outlet> */}
        </div>
    );
};

export default DashbordFile;