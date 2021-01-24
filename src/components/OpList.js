import React from 'react';
import Op from './Op';
const OpList = ({ myOps }) => {
    return (
        <table>
            <tbody>
                <tr>
                    <th>Categoría</th>
                    <th>Concepto</th>
                    <th>Monto</th>
                    <th>Fecha</th>
                    <th>Tipo</th>
                </tr>

                {myOps.map(op => (

                    <Op key={op.id}
                        categoria={op.categoria}
                        concepto={op.concepto}
                        monto={op.monto}
                        fecha={op.fecha}
                        tipo={op.tipo}
                    />


                ))}
            </tbody>
        </table>
    )
};


export default OpList;

