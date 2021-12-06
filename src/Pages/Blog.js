import React, { Component } from "react";

class Blog extends Component {
    componentDidMount() {
        this.props.heading("BLOG", "Decouvrez nos articles de blog", "S'ABONNER");
    }
    render() {
        return(
            <section className="blog">
                <div className="blog__search">
                    <form className="blog__search__form">
                        <input className="blog__search__form--input" type="text" placeholder="Rechercher"/>
                        <button className="blog__search__form--button">
                            <i className="fas fa-search"></i>
                        </button>
                    </form>
                </div>
                <div className="blog__container">
                    <div className="blog__container__article">
                        <div className="blog__container__article__elt">
                            <img className="blog__container__article__elt--img" src="./images/produit-1.jpg" alt="product"/>
                        </div>
                        <div className="blog__container__article__elt">
                            <h3 className="blog__container__article__elt--title">Lorem ipsum</h3>
                            <p className="blog__container__article__elt--text">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                Ut enim ad minim veniam, quis nostrud exercitation.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                Ut enim ad minim veniam, quis nostrud exercitation.
                            </p>
                        </div>
                        <div className="blog__container__article__elt">
                            <button className="btn btn-primary btn-primary-sm">Lire plus</button>
                        </div>
                    </div>
                    <div className="blog__container__article">
                        <div className="blog__container__article__elt">
                            <img className="blog__container__article__elt--img" src="./images/produit-2.jpg" alt="product"/>
                        </div>
                        <div className="blog__container__article__elt">
                            <h3 className="blog__container__article__elt--title">Lorem ipsum</h3>
                            <p className="blog__container__article__elt--text">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                Ut enim ad minim veniam, quis nostrud exercitation.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                Ut enim ad minim veniam, quis nostrud exercitation.
                            </p>
                        </div>
                        <div className="blog__container__article__elt">
                            <button className="btn btn-primary btn-primary-sm">Lire plus</button>
                        </div>
                    </div>
                    <div className="blog__container__article">
                        <div className="blog__container__article__elt">
                            <img className="blog__container__article__elt--img" src="./images/produit-3.jpg" alt="product"/>
                        </div>
                        <div className="blog__container__article__elt">
                            <h3 className="blog__container__article__elt--title">Lorem ipsum</h3>
                            <p className="blog__container__article__elt--text">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                Ut enim ad minim veniam, quis nostrud exercitation.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                Ut enim ad minim veniam, quis nostrud exercitation.
                            </p>
                        </div>
                        <div className="blog__container__article__elt">
                            <button className="btn btn-primary btn-primary-sm">Lire plus</button>
                        </div>
                    </div>
                    <button className="blog__container--btn btn btn-primary">VOIR PLUS</button>
                </div>
            </section>
        );
    }
}

export default Blog;