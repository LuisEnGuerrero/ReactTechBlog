import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';
import Global from '../Global';
import Sidebar from './Sidebar';
import Moment from 'react-moment';
import 'moment/locale/es';
import imageDefault from '../assets/images/default.png';
import swal from 'sweetalert';


class Article extends Component {

    url = Global.url;

    state = {
        article: false,
        status: null
    };

    componentWillMount() {
        this.getArticle();
    }

    getArticle = () => {
        var id = this.props.match.params.id;

        axios.get(this.url + 'article/' + id)
            .then(res => {
                this.setState({
                    article: res.data.article,
                    status: 'success'
                });
            })
            .catch(err => {

                this.setState({
                    article: false,
                    status: 'success'
                });

            });

    }

    deleteArticle = (id) => {
        //Confirmamos mediante un Alert, si realmente desea eliminar el Artículo:
        swal({
            title: "Está Seguro?",
            text: "Va a Eliminar el Artículo, esta acción no podrá deshacerse!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    // Confirmamos si la petición viene del Administrador:
                    const passwordAutorized = "ReactDesign"
                    swal("Ingrese su contraseña de Administrador para proceder:", {
                        content: "input",
                    })
                        .then((value) => {
                            //Eliminamos el Artículo:
                            if (value === passwordAutorized) {
                                axios.delete(this.url + 'article/' + id)
                                    .then(res => {

                                        this.setState({
                                            article: res.data.article,
                                            status: 'deleted'
                                        });
                                    })
                                swal("El Artículo fué Eliminado Permanentemente!", {
                                    icon: "success",
                                });
                            } else { //Si no es Administrador no podrá eliminar el artículo:
                                swal("Contraseña Incorrecta! El Artículo continuará Publicado!");
                                this.setState({
                                    status: 'safely'
                                });
                            }
                        });
                } else {
                    swal("Ufff!!! El Artículo aún continúa Publicado!");
                    this.setState({
                        status: 'safely'
                    });

                }
            });
    }

    render() {

        if (this.state.status === 'deleted' || this.state.status === 'safely') {
            return <Redirect to="/blog" />
        }

        var article = this.state.article;

        return (

            <div className="center">
                <section id="content">

                    {this.state.article &&
                        <article className="article-item article-detail">
                            <div className="image-wrap">
                                {article.image !== null ? (
                                    <img src={this.url + 'get-image/' + article.image} alt={article.title} />
                                ) : (
                                    <img src={imageDefault} alt={article.title} />
                                )
                                }
                            </div>

                            <h1 className="subheader">{article.title}</h1>
                            <span className="date">
                                <Moment locale="es" fromNow>{article.date}</Moment>
                            </span>
                            <p>
                                {article.content}
                            </p>
                            <button onClick={() => {
                                this.deleteArticle(article._id)
                            }
                            } className="btn btn-danger">Eliminar</button>
                            <Link to={'/blog/editar/'+article._id} className="btn btn-warning">Editar</Link>
                            <div className="clearfix"></div>
                        </article>
                    }

                    {!this.state.article && this.state.status === 'success' &&
                        <div id="article">
                            <h2 className="subheader">El artículo no existe!!!</h2>
                            <p>Intentalo de nuevo más tarde</p>
                        </div>
                    }

                    {this.state.status == null &&
                        <div id="article">
                            <h2 className="subheader">Cargando . . . </h2>
                            <p>Espera unos segundos!</p>
                        </div>
                    }
                </section>
                <Sidebar />
            </div>
        )
    }
}

export default Article;