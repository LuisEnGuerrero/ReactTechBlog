import React, { Component } from 'react';
import logo from '../assets/images/logo.svg';
import { NavLink } from 'react-router-dom';

class Header extends Component {

    render() {

        return (
            <header id="header">
                <div className="center">
                    {/* LOGO */}
                    <div id="logo">
                        <img src={logo} className="app-logo" alt="Logotipo" />
                        <span id="brand">
                            <strong>React</strong>Design
                    </span>
                    </div>

                    {/* MENU */}
                    <nav id="menu">
                        <ul>
                            <li>
                                <NavLink to="/home" activeClassName="active">React</NavLink>
                            </li>
                            <li>
                                <NavLink to="/blog" activeClassName="active">Blog</NavLink>
                            </li>
                            <li>
                                <NavLink to="/formulario" activeClassName="active">Formulario</NavLink>
                            </li>
                            <li>
                                <NavLink to="/portfolio" activeClassName="active">Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="/Angular" activeClassName="active">Angular</NavLink>
                            </li>
                            <li>
                                <NavLink to="/Vue" activeClassName="active">Vue</NavLink>
                            </li>
                        </ul>
                    </nav>
                    {/* LIMPIAR FLOTADOS */}
                    <div className="clearfix"></div>
                </div>
            </header>

        );
    }
}

export default Header;