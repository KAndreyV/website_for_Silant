import React, {useState, useEffect} from "react";
import { Routes, Route } from 'react-router-dom'; 
import axios from 'axios';

import Group from "./Group";
import MachineFilterForm from "./MachineFilterForm";
import ComplaintFilterForm from "./ComplaintFilterForm";
import MaintenanceFilterForm from "./MaintenanceFilterForm";
import GuidesMachine from "./GuidesMachine";
import GuidesMaintenances from "./GuideMaintenances";
import GuideComplaints from "./GuideComplaints";
import Login from "./Login";


function App () {
    const [token, setToken] = useState('');

    const handleTokenChange = (token) => {
        setToken(token);
    };

    return (
        <>
            <Routes>
                <Route path="/" element={<Group token={token}/> }>
                    <Route index path="/" element={<MachineFilterForm />}></Route>
                    <Route path="/login" element={<Login onChange={handleTokenChange}/>}/>
                    <Route path="/maintenances" element={<MaintenanceFilterForm />}/>
                    <Route path="/complaints" element={<ComplaintFilterForm />}/>
                    <Route path="/guides/machines/:id" element={<GuidesMachine /> } />
                    <Route path="/guides/maintenances/:id" element={<GuidesMaintenances /> } />
                    <Route path="/guides/complaints/:id" element={<GuideComplaints /> } />
                </Route>
            </Routes>
        </>
    );
}

export default App;