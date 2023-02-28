import React from "react";
import EdinaRegular from "../views/all-home-version/EdinaRegular";
import NotFound from "../views/NotFound";
import { Routes, Route } from "react-router-dom";
import ScrollTopBehaviour from "../components/ScrollTopBehaviour";

const AllRoutes = () => {
    return (
        <>
            <ScrollTopBehaviour />
            <Routes>
                <Route path="/" element={<EdinaRegular />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </>
    );
};

export default AllRoutes;
