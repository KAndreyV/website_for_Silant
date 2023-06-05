import * as React from 'react';
import axios from 'axios';

import Maintenance from './Maintenance';
import { Table } from 'react-bootstrap';
import { Link, } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/Maintenances.css"


function Maintenances(props) {
    const [response, setResponse] = React.useState([]);
    let [requested, maintenanceReq] = React.useState(false);
    let[nothing, setNothing] = React.useState(false);
    

    const LINK = `http://127.0.0.1:8000/api/maintenances/?type_of_maintenance=${props.valueToM}&machine=${props.valueM}&service_company=${props.valueSC}`;

    var maintenances = [];
    

    function ReqMaintenances(){
        axios.get(LINK).then(res => {
            setResponse(res.data.results);
            if(res.data.results.length === 0 && requested === true){
                setNothing(true);
            }else{
                setNothing(false);
            };
        });
    };


    for(let i = 0; i < response.length; i+=1) {
        maintenances.push(response[i]);
    };
    

    if(requested === false){
        ReqMaintenances();
        maintenanceReq(true);
    };


    if(requested === true){
        console.log(maintenances);
    };


    const handleSubmitChange = () =>{
        ReqMaintenances();
    };


    return (
        <>
            <div className='button'><button onClick={handleSubmitChange}>Найти</button></div>
            <div className="links">
                <Link className="btn-primary" to="http://localhost:8080/">Общая информация</Link>
                <Link className="btn-primary" to="http://localhost:8080/maintenances">То</Link>
                <Link className="btn-primary" to="http://localhost:8080/complaints">Рекламации</Link>
            </div>
            <p>Информация о проведеных ТО Вашей техники</p>
            {nothing ?
                <p className='nothing_found'>По вашему запросу ничего не найдено</p>:
                <Table variant='' striped bordered hover className='maintenances'>
                    <thead>
                        <tr>
                            <th>Зав. № машины</th>
                            <th>Вид ТО</th>
                            <th>Дата проведения ТО</th>
                            <th>Наработка, м/час</th>
                            <th>№ заказ-наряда</th>
                            <th>Дата заказ-наряда</th>
                            <th>Организация, проводившая ТО</th>
                            <th>Сервисная компания</th>
                        </tr>
                    </thead>
                    <tbody>
                        {maintenances.map((maintenance) => <Maintenance key={maintenance.id} maintenance={maintenance}/>)}
                    </tbody>
                </Table>
            }
        </> 
    );
}

export default Maintenances;