import React, { Component } from "react";
import { Link } from "react-router-dom";

class Shop extends Component {
    componentDidMount() {
        this.props.heading("BOUTIQUE", "Decouvrez nos gammes de produits !", "NOS PRODUITS");
    }
    render() {
        return(
            <section className="boutique">
                <div className="boutique__nav">
                    <ul className="boutique__nav__navbar">
                        <li className="boutique__nav__navbar--link">
                            <Link to="/">NOS CREATIONS</Link>
                        </li>
                        <li className="boutique__nav__navbar--link">
                            <Link className="bordered" to="/">NOS PATRONS</Link>
                        </li>
                        <li className="boutique__nav__navbar--link">
                            <Link className="bordered" to="/">NOS ACCESSOIRES</Link>
                        </li>
                    </ul>
                </div>
                <div className="blog__search">
                    <form className="blog__search__form">
                        <input className="blog__search__form--input" type="text" placeholder="Rechercher"/>
                        <button className="blog__search__form--button">
                            <i className="fas fa-search"></i>
                        </button>
                    </form>
                </div>
                <div className="boutique__container">
                    <div className="boutique__container__content">
                        <div className="boutique__container__content__elt">
                            <div className="boutique__container__content__elt--img"></div>
                            <h3 className="boutique__container__content__elt--title">Lorem ipsum</h3>
                            <p className="boutique__container__content__elt--text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <div className="boutique__container__content__elt__infos">
                                <span className="boutique__container__content__elt__infos--price">49.90$</span>
                                <button className="btn btn-w100 btn-primary-sm">Ajouter au panier</button>
                            </div>
                        </div>
                        <div className="boutique__container__content__elt">
                            <div className="boutique__container__content__elt--img"></div>
                            <h3 className="boutique__container__content__elt--title">Lorem ipsum</h3>
                            <p className="boutique__container__content__elt--text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <div className="boutique__container__content__elt__infos">
                                <span className="boutique__container__content__elt__infos--price">29.90$</span>
                                <button className="btn btn-w100 btn-primary-sm">Ajouter au panier</button>
                            </div>
                        </div>
                        <div className="boutique__container__content__elt">
                            <div className="boutique__container__content__elt--img"></div>
                            <h3 className="boutique__container__content__elt--title">Lorem ipsum</h3>
                            <p className="boutique__container__content__elt--text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <div className="boutique__container__content__elt__infos">
                                <span className="boutique__container__content__elt__infos--price">79.90$</span>
                                <button className="btn btn-w100 btn-primary-sm">Ajouter au panier</button>
                            </div>
                        </div>
                        <div className="boutique__container__content__elt">
                            <div className="boutique__container__content__elt--img"></div>
                            <h3 className="boutique__container__content__elt--title">Lorem ipsum</h3>
                            <p className="boutique__container__content__elt--text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <div className="boutique__container__content__elt__infos">
                                <span className="boutique__container__content__elt__infos--price">39.90$</span>
                                <button className="btn btn-w100 btn-primary-sm">Ajouter au panier</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Shop;