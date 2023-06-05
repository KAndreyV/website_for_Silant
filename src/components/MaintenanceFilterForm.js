import React, {useState} from "react";
import axios from "axios";

import Maintenances from "./Maintenances"
import TypeOfMaintenance from "./TypeOfMaintenance";
import MachineNumberM from "./MachineNumberM";
import ServiceCompany from "./ServiceCompany";


function MaintenanceFilterForm() {
    const [valueToM, setValueToM] = useState('');
    const [valueM, setValueM] = useState('');
    const [valueSC, setValueSC] = useState('');


    const handleTypeOfMaintenanceChange = (valueToM) => {
        setValueToM(valueToM);
    };

    const handleMachineChange = (valueM) => {
        setValueM(valueM);
    };

    const handleServiceCompanyChange = (valueSC) => {
        setValueSC(valueSC);
    };


    return(
        <>
            <form>
                <p>
                    <label>
                        Вид ТО:
                        <TypeOfMaintenance onChange={handleTypeOfMaintenanceChange} />
                    </label>
                </p>
                <p>
                    <label>
                        Зав. номер машины: 
                        <MachineNumberM onChange={handleMachineChange} />
                    </label>
                </p>
                <p>
                    <label>
                        Сервисная компания:
                        <ServiceCompany onChange={handleServiceCompanyChange} />
                    </label>
                </p>
            </form>
            <div>
                <Maintenances valueToM={valueToM} valueM={valueM} valueSC={valueSC}  />
            </div>
        </>
    );
}

export default MaintenanceFilterForm;