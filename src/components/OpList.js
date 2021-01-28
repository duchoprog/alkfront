import React from 'react';
import Op from './Op';
let saldo = 0

const OpList = ({ myOps }) => {
    if (myOps[0]) {
        saldo = myOps[0].balance
    }




    return (
        <>
            <div>
                <h2>Saldo actual</h2>
                <h2>$ {saldo} </h2>
                <h2>Últimos 10 movimientos</h2>
            </div>
            <table className="table">
                <tbody>
                    <tr id="tableHeaders">
                        <th id="buttons" >Modificar</th>
                        <th>Concepto</th>
                        <th>Monto</th>
                        <th>Fecha</th>
                        <th>Tipo</th>
                    </tr>

                    {myOps.slice(1, 11).map(op => (

                        <Op id={op.id}
                            concepto={op.concepto}
                            monto={op.monto}
                            fecha={op.fecha}
                            tipo={op.tipo}
                        />


                    ))}
                </tbody>
            </table>
        </>
    )
};


export default OpList;

