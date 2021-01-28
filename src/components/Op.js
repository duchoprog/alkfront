import React from 'react';
import { useHistory } from 'react-router-dom'

const Op = (props) => {
    let history = useHistory();
    function handleUpdate(e) {
        sessionStorage.setItem("concepto", props.concepto)
        sessionStorage.setItem("monto", props.monto)
        sessionStorage.setItem("fecha", props.fecha)
        sessionStorage.setItem("id", props.id)
        history.push("/Update");
    }
    function handleDelete(e) {

    }

    return (
        <tr className='op' key={props.id}>
            <td><button name={props.id} onClick={handleUpdate}>modificar</button>
                <button name={props.id} onClick={handleDelete}>eliminar</button></td>
            <td>{props.concepto}</td>
            <td>{props.monto.toFixed(2)}</td>
            <td>{props.fecha.substr(0, 10)}</td>
            <td>{props.tipo}</td>

        </tr>
    );
}
export default Op;