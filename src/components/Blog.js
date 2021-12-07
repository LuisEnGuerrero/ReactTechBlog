import React, { Component } from 'react';
import Slider from './Slider';
import Sidebar from './Sidebar';
import Articles from './Articles';

class Blog extends Component {

    render(){

        return (
            <div id="blog">
                
                <Slider
                    title="Blog"
                    size="slider-small"
                />

                <div className="center">

                    <div id="content">
                        <h1 className="subheader">Listado de Artículos Publicados:</h1>
                        {/* LISTADO de Articulos que vienen del API REST de Node.js */}
                        <Articles/>
                    </div>

                    <Sidebar 
                        blog="true"
                    />

                </div> {/* FIN DIV CENTER */}


            </div>
        );
    }
}

export default Blog;