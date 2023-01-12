import React, {useState} from 'react';
import {Route, Routes} from "react-router-dom";
import MainPage from "../pages/Main";
import AboutMePage from "../pages/AboutMe";
import BlogPage from "../pages/blog";
import PortfolioPage from "../pages/Portfolio";

const RoutesList = () => {

    return (
        <Routes>
            <Route index element={<MainPage/>}/>}/>
            <Route path="/about-me" element={<AboutMePage/>}/>
            <Route path="/portfolio" element={<PortfolioPage/>}/>
            <Route path="/blog" element={<BlogPage/>}/>
        </Routes>
    );
};

export default RoutesList;