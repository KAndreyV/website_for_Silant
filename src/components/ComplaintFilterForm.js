import React, {useState} from "react";
import axios from "axios";

import Complaints from "./Complaints";
import RecoveryMethod from "./RecoveryMethod";
import FailureNode from "./FailureNode";
import ServiceCompany from "./ServiceCompany";


function ComplaintFilterForm() {
    const [valueFN, setValueFN] = useState('');
    const [valueRM, setValueRM] = useState('');
    const [valueSC, setValueSC] = useState('');


    const handleFailureNodeChange = (valueFN) => {
        setValueFN(valueFN);
    };

    const handleRecoveryMethodChange = (valueRM) => {
        setValueRM(valueRM);
    };

    const handleServiceCompanyChange = (valueSC) => {
        setValueSC(valueSC);
    };


    return(
        <>
            <form>
                <p>
                    <label>
                        Узел отказа:
                        <FailureNode onChange={handleFailureNodeChange} />
                    </label>
                </p>
                <p>
                    <label>
                        Способ восстановления: 
                        <RecoveryMethod onChange={handleRecoveryMethodChange} />
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
                <Complaints valueFN={valueFN} valueRM={valueRM} valueSC={valueSC}  />
            </div>
        </>
    );
}

export default ComplaintFilterForm;