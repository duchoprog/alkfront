import React, { useEffect, useState } from 'react';
import OpList from './OpList'
import axios from 'axios'



const Home = () => {

    let [responseData, setResponseData] = useState('');

    useEffect(() => {
        axios({
            "method": "GET",
            "url": "http://localhost:4000/retrieve",

        })
            .then((response) => {
                setResponseData(response.data)
            })
            .catch((error) => {
                console.log(error)
            });

    }, [])






    return (
        <div className='home'>
            <h1>Gastos-Ingresos</h1>
            <h2>Saldo actual</h2>
            <h2>Últimos 10 movimientos</h2>
            <div>
                {/* { JSON.stringify(responseData)} */}
            </div>

            <OpList myOps={Object.values(responseData)} />



        </div>
    );
}
export default Home;