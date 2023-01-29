import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Pages/Header/Header';

const MainLayout = () => {
    return (
        <>
        <Header/>
        <Outlet/>          
        </>
    );
};

export default MainLayout;