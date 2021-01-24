import React from 'react';
import OpList from './OpList'
const Home = () => {
    //Some data until db is up and running
    const myOps = [
        { categoria: "joda", concepto: "cine", monto: 100, fecha: "11/11/20", tipo: "gasto", id: 1 },
        { categoria: "comida", concepto: "pizza", monto: 50, fecha: "10/11/20", tipo: "gasto", id: 12 },
        { categoria: "trabajo", concepto: "webapp", monto: 1000, fecha: "03/03/21", tipo: "ingreso", id: 13 },
        { categoria: "transp", concepto: "bici", monto: 300, fecha: "03/02/20", tipo: "gasto", id: 4 },
        { categoria: "joda", concepto: "cine", monto: 100, fecha: "11/11/20", tipo: "gasto", id: 10 },
        { categoria: "comida", concepto: "pizza", monto: 50, fecha: "10/11/20", tipo: "gasto", id: 11 },
        { categoria: "trabajo", concepto: "webapp", monto: 1000, fecha: "03/03/21", tipo: "ingreso", id: 3 },
        { categoria: "transp", concepto: "bici", monto: 300, fecha: "03/02/20", tipo: "gasto", id: 5 },
        { categoria: "joda", concepto: "cine", monto: 100, fecha: "11/11/20", tipo: "gasto", id: 6 },
        { categoria: "comida", concepto: "pizza", monto: 50, fecha: "10/11/20", tipo: "gasto", id: 7 },
    ]


    return (
        <div className='home'>
            <h1>Gastos-Ingresos</h1>
            <h2>Saldo actual</h2>
            <h2>Últimos 10 movimientos</h2>

            <OpList myOps={myOps} />



        </div>
    );
}
export default Home;