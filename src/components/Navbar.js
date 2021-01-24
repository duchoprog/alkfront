import React from 'react';
import { Link } from 'react-router-dom'
const Navbar = ({ title }) => {

    return (
        <nav className="navbar  bg-primary">
            <h1>
                {title}
            </h1>
            <ul>
                <li>
                    <Link to=''>Operar</Link>
                </li>
                <li>
                    <Link to='/'>Home</Link>
                </li>
            </ul>
        </nav>
    )

}
Navbar.defaultProps = {
    title: 'Gastos-Ingresos'
};
export default Navbar