import React, { useState } from 'react';
import axios from 'axios'

const NewOp = () => {


    const [op, setOp] = useState({
        concepto: "",
        monto: 0,
        fecha: "",
        tipo: ""
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
        if (!op.tipo) {
            alert("Ingresar tipo de operación")
            return
        }

        axios({
            "method": "POST",
            "url": "http://localhost:4000/operate",
            "data": op

        })
            .then((response) => {
                console.log("exito")
                setOp({
                    concepto: "",
                    monto: 0,
                    fecha: "",
                    tipo: ""
                })

            })
            .catch((error) => {
                console.log("CATCH = ", error.response)
            });

    }

    return (
        <>
            <div className="row d-flex justify-content-center">

                <form id="newOpForm" onSubmit={handleSubmit}>
                    <h1>Nueva Operación</h1>

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
                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="radio"
                            name="tipo"
                            value="ingreso"
                            checked={op.tipo === "ingreso" ? true : false}
                            onChange={handleChange}
                        />
                        <label>Ingreso</label>
                    </div>
                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="radio"
                            name="tipo"
                            value="gasto"
                            checked={op.tipo === "gasto" ? true : false}
                            onChange={handleChange}
                        />
                        <label >Gasto</label>

                    </div>
                    <input type="submit" value="Submit" className="btn btn-primary"></input>
                </form>
            </div>
        </>
    )
};


export default NewOp;

