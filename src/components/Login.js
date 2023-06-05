import React, {useState, useEffect} from "react";
import axios from "axios";
import { Link, useNavigate, redirect } from "react-router-dom";

import "../styles/Complaint.css"


function Login(props) {
    const [token, setToken] = useState()
    const [loading, setLoading] = useState();
    const [formUsername, setFormUsername] = useState();
    const [formPassword, setFormPassword] = useState();
    const [ firstName, setFirstName] = useState('');
    const [ lastName, setLastName] = useState('');
    const [ username, setUsername] = useState('');
    const [ email, setEmail] = useState('');
    const [ dateJoined, setDateJoined] = useState('');
    const [ groups, setGroups] = useState('');
    const [ error, setError] = useState();
    const navigate = useNavigate();

    useEffect(() => {
        if (token) {
            fetch(
                'http://127.0.0.1:8000/api/user',
                {
                headers: {
                  'Content-Type': 'application/json;charset=utf-8',
                  'Authorization': `Token ${token}`,
                },
                }
            )
            .then(response => {
                if (response.ok) {
                return response.json();
                } else {
                    if (response.status === 401) {
                        throw Error('refresh');
                    };
                    throw Error(`Something went wrong: code ${response.status}`);
                };
            })
            .then(({data}) => {
                setFirstName(data.first_name);
                setLastName(data.last_name);
                setUsername(data.username);
                setEmail(data.email);
                setDateJoined(data.date_joined);
                setGroups(data.groups);
                setError(null);
            })
            .catch(error => {
                console.log(error)
                setError('Ошибка, подробности в консоли')
            })
            console.log(data);
        }
    }, [token])

    const submitHandler = e => {
        props.onChange(token)
        e.preventDefault();
        setLoading(true);
        fetch(
            'http://127.0.0.1:8000/api/login',
            {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
            },
            body: JSON.stringify({
                username: formUsername,
                password: formPassword,
            })
            }
        )
        .then(response => {
            if (response.ok) {
                return response.json()
            } else {
                throw Error(`Something went wrong: code ${response.status}`)
            }
        })
        .then(({key}) => {
            setToken(key);
            props.onChange(token);
            setError(null);
        })
        .catch(error => {
            console.log(error)
            setError('Ошибка, подробности в консоли')
        })
        .finally(setLoading(false))
    }

    const handleClick = () => {
        navigate(`/`);
        props.onChange(token);
    };

    // const handleTokenChange = (event) => {
    //     props.onChange(token);
    // };

    return(
        <>
            {loading? "Загрузка..." :
                <form className="loginForm" onSubmit={submitHandler}>
                    <input type="text" name="username" value={formUsername} onChange={e => setFormUsername(e.target.value)} placeholder="Username"/>
                    <input type="password" name="password" value={formPassword} onChange={e => setFormPassword(e.target.value)} placeholder="Password"/>
                    <input type="submit" name="submit" value="Войти" onClick={handleClick} />
                </form>
            }
        </>
    );
}

export default Login;