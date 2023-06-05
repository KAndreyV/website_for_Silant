import React, {useState} from "react";
import axios from "axios";

import Machines from "./Machines";
import TechnicModel from "./TechnicModel";
import EngineModel from "./EngineModel";
import TransmissionModel from "./TransmissionModel";
import DrivingBridgeModel from "./DrivingBridgeModel";
import ControlledBridgeModel from "./ControlledBridgeModel";

import '../styles/MachineFilterForm.css';


function MachineFilterForm() {
    const [valueTM, setValueTM] = useState('');
    const [valueEM, setValueEM] = useState('');
    const [valueTrM, setValueTrM] = useState('');
    const [valueDBM, setValueDBM] = useState('');
    const [valueCBM, setValueCBM] = useState('');


    const handleTechicModelChange = (valueTM) => {
        setValueTM(valueTM);
    };

    const handleEngineModelChange = (valueEM) => {
        setValueEM(valueEM);
    };

    const handleTransmissionModelChange = (valueTrM) => {
        setValueTrM(valueTrM);
    };

    const handleDrivingBridgeModelChange = (valueDBM) => {
        setValueDBM(valueDBM);
    };

    const handleControlledBridgeModelChange = (valueCBM) => {
        setValueCBM(valueCBM);
    };

   
    return(
        <>
            <form>
                <p>
                    <label>
                        Модель техники:
                        <TechnicModel onChange={handleTechicModelChange} />
                    </label>
                </p>
                <p>
                    <label>
                        Модель двигателя: 
                        <EngineModel onChange={handleEngineModelChange} />
                    </label>
                </p>
                <p>
                    <label>
                        Модель трансмиссии: 
                        <TransmissionModel onChange={handleTransmissionModelChange} />
                    </label>
                </p>
                <p>
                    <label>
                        Модель ведущего моста: 
                        <DrivingBridgeModel onChange={handleDrivingBridgeModelChange} />
                    </label>
                </p>
                <p>
                    <label>
                        Модель управляемого моста: 
                        <ControlledBridgeModel onChange={handleControlledBridgeModelChange} />
                    </label>
                </p>
                
            </form>
            <div>
                <Machines valueTM={valueTM} valueEM={valueEM} valueTrM={valueTrM} valueDBM={valueDBM} valueCBM={valueCBM} />
            </div>
        </>
    );
}

export default MachineFilterForm;