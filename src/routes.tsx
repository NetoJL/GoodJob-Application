import React from "react";

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import LandingPage from './pages/LandingPage'
import Services from "./pages/Services";
import Scheduling from "./pages/Scheduling";
import ScheduleView from "./pages/ScheduleView";

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/services" element={<Services />} />
                <Route path="/scheduling" element={<Scheduling />} />
                <Route path="/schedule-view" element={<ScheduleView />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;