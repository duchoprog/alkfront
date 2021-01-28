import React, { useState } from 'react';
import axios from 'axios'
import { useHistory } from 'react-router-dom'

const Update = () => {
    let history = useHistory();

    console.log(sessionStorage.getItem("fecha"))

    const [op, setOp] = useState({
        concepto: sessionStorage.getItem("concepto"),
        monto: sessionStorage.getItem("monto"),
        fecha: sessionStorage.getItem("fecha").substr(0, 10),
        id: sessionStorage.getItem("id")

    })

    const handleChange = e => {
        setOp({
            ...op,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()
        //Form checks
        if (!op.concepto) {
            alert("Concepto es obligatorio")
            return
        }
        if (!op.monto) {
            alert("Ingresar monto mayor que 0")
            return
        }
        if (!op.fecha) {
            alert("Ingresar fecha de la operación")
            return
        }


        axios({
            "method": "POST",
            "url": "http://localhost:4000/update",
            "data": op

        })
            .then((response) => {
                console.log("exito")
                history.push("/Home");

            })
            .catch((error) => {
                console.log("CATCH = ", error.response)
            });

    }

    return (
        <>
            <div className="row d-flex justify-content-center">

                <form id="updateForm" onSubmit={handleSubmit}>
                    <h1>Modificar</h1>

                    <div>
                        <input
                            type="text"
                            name="concepto"
                            value={op.concepto}
                            onChange={handleChange}
                        />
                        <label>Concepto</label>
                    </div>
                    <div>
                        <input
                            type="number"
                            name="monto"
                            value={op.monto}
                            onChange={handleChange}
                            min="1" max="99999999.99"
                            step="0.01"
                        /><label>Monto</label>
                    </div>
                    <div>
                        <input
                            type="date"
                            name="fecha"
                            value={op.fecha}
                            onChange={handleChange}
                        />
                        <label>Fecha</label>
                    </div>
                    <input type="submit" value="Submit" className="btn btn-primary"></input>
                </form>
            </div>
        </>
    )
};


export default Update;

