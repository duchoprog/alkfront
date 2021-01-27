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

          let responseProxy=responseData;
          for(let item in responseProxy){
              if(responseProxy[item].monto>0){
                  responseProxy[item].tipo="ingreso"
              }else{
                  responseProxy[item].tipo="gasto"
              }
              setResponseData({1:1})
              console.log(responseData)
          }
          // eslint-disable-next-line react-hooks/exhaustive-deps
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