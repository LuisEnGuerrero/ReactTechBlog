import React from 'react';
import { NavLink } from 'react-router-dom';

const Error = () => {

    return (
        <section id="content">
            <h2 className="subheader">Página no encontrada!</h2>
            <p>La página a la que intentas acceder <strong>No Existe!</strong> <NavLink to="/" className="btn-white">Ir al Home</NavLink></p>
        </section>

    );
}

export default Error;