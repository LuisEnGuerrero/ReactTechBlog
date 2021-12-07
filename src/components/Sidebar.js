import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';

class Sidebar extends Component {

    searchRef = React.createRef();

    state = {
        search: "",
        redirect: false
    }

    redirectToSearch = (e) => {
        e.preventDefault();

        this.setState({
            search: this.searchRef.current.value,
            redirect: true
        });

    }

    render() {

        if(this.state.redirect){
            return (
                <Redirect to={'/redirect/'+this.state.search} />
            )
        }

        return (
                <aside id="slidebar">
                    {this.props.blog === "true" &&
                        <div id="nav-blog" className="slidebar-item">
                            <h3>Puedes hacer esto:</h3>
                            <Link to="/blog/crear"className="btn btn-success">Crear Artículo</Link>
                        </div>
                    }
                    
                    <div id="search" className="slidebar-item">
                        <h3>Buscador</h3>
                        <p>Encuentra el artículo que buscas:</p>
                        <form onSubmit={this.redirectToSearch}>
                            <input type="text" name="search" ref={this.searchRef}/>
                            <input type="submit" name="submit" value="Buscar" className="btn btn-success"/>
                        </form>
                    </div>
                </aside>
        );
    }
}

export default Sidebar;