import React from 'react';
const Op = (props) => {
    return (
        <tr className='op' key={props.id}>
            <td>{props.categoria}</td>
            <td>{props.concepto}</td>
            <td>{props.monto}</td>
            <td>{props.fecha}</td>
            <td>{props.tipo}</td>

        </tr>
    );
}
export default Op;