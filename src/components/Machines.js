import * as React from 'react';
import axios from 'axios';

import Machine from './Machine';
import Table from 'react-bootstrap/Table';
import { Link } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/Machines.css"


function Machines(props) {
    const [response, setResponse] = React.useState([]);
    let [requested, machineReq] = React.useState(false);
    let[nothing, setNothing] = React.useState(false);

    const LINK = `http://127.0.0.1:8000/api/machines/?machine_factory_number=&technic_model=${props.valueTM}&engine_model=${props.valueEM}&transmission_model=${props.valueTrM}&driving_bridge_model=${props.valueDBM}&controlled_bridge_model=${props.valueCBM}`;

    var machines = [];


    function ReqMachines(){
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
        machines.push(response[i]);
    };


    if(requested === false){
        ReqMachines();
        machineReq(true);
    };


    if(requested === true){
        console.log(machines);
    };


    const handleSubmitChange = () =>{
        ReqMachines();
    };


    return (
        <>
            <div className='button'><button onClick={handleSubmitChange}>Найти</button></div>
            <div className="links">
                <Link className="btn-primary" to="http://localhost:8080/">Общая информация</Link>
                <Link className="btn-primary" to="http://localhost:8080/maintenances">То</Link>
                <Link className="btn-primary" to="http://localhost:8080/complaints">Рекламации</Link>
            </div>
            <p>Информация о комплектации и технических характеристиках Вашей техники</p>
            {nothing ?
                <p className='nothing_found'>По вашему запросу ничего не найдено</p>:
                <Table variant='' striped bordered hover className='machines'>
                    <thead>
                        <tr>
                            <th>Модель техники</th>
                            <th>Зав. № машины</th>
                            <th>Модель двигателя</th>
                            <th>Зав. № двигателя</th>
                            <th>Модель трансмисии (производитель, артикул)</th>
                            <th>Зав. № трансмисии</th>
                            <th>Модель ведущего моста</th>
                            <th>Зав. № ведущего моста</th>
                            <th>Модель управляемого моста</th>
                            <th>Зав. № управляемого моста</th>
                            <th>Договор поставки №, дата</th>
                            <th>Дата отгрузки с завода</th>
                            <th>Клиент</th>
                            <th>Грузополучатель (конечный потребитель)</th>
                            <th>Адрес поставки (эксплуатации)</th>
                            <th>Комплектация (доп. опции)</th>
                            <th>Сервисная компания</th>
                        </tr>
                    </thead>
                    <tbody>
                        {machines.map((machine) => <Machine key={machine.id} machine={machine}/>)}
                    </tbody>
                </Table>
            }
            
        </> 
    );
}

export default Machines;