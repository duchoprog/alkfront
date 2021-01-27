import React from 'react';
const Op = (props) => {
    return (
        <tr className='op' key={props.id}>
            <td><button name={props.id}>modificar</button>
            <button name={props.id}>eliminar</button></td>
            <td>{props.concepto}</td>
            <td>{props.monto}</td>
            <td>{props.fecha}</td>
            <td>{props.tipo}</td>

        </tr>
    );
}
export default Op;