import React from "react";

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import LandingPage from './pages/LandingPage'
import Professionals from "./pages/Professionals";
import Scheduling from "./pages/Scheduling";
import ScheduleView from "./pages/ScheduleView";

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/professionals" element={<Professionals />} />
                <Route path="/scheduling" element={<Scheduling />} />
                <Route path="/schedule-view" element={<ScheduleView />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;