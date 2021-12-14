import React, { Component } from 'react';
import Slider from './Slider';
import Sidebar from './Sidebar';
import Articles from './Articles';

class Home extends Component {

    render(){

        return (
            <div id="home">
                
                <Slider
                    title="Gracias por Visitarnos! Este Sitio está Diseñado con React!"
                    btn="Ir al Blog"
                    size="slider-big"
                />

                <div className="center">

                    <div id="content">
                        <h1 className="subheader">Últimos Artículos</h1>
                        <Articles
                            home="true"
                        />
                    </div>

                    <Sidebar />

                </div> {/* FIN DIV CENTER */}


            </div>
        );
    }
}

export default Home;