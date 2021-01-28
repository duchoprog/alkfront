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
        console.log(op)

        ///////////

        /*   const { fname, lname, email } = this.state;
  
          axios.post('/', { fname, lname, email }) */
        ////////////
        const { concepto, monto, fecha, tipo } = op
        console.log(concepto, monto, fecha, tipo)
        axios({
            "method": "POST",
            "url": "http://localhost:4000/operate",
            "data": op

        })
            .then((response) => {
                console.log("exito")
            })
            .catch((error) => {
                console.log(error)
            });

    }
    console.log(op)

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

