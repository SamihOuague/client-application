import React, { Component } from "react";

class Home extends Component {
    componentDidMount() {
        console.log(window.location.pathname);
        this.props.heading("UN SOUPCON DE MAGIE", "Votre couture sur mesure !", "DECOUVRIR");
    }

    render() {
        return(
            <>
                <section className="about">
                    <h3 className="about--title">A PROPOS</h3>
                    <div className="about__article">
                        <div className="about__article--element">
                            <img width="100%" src="./images/patron.jpg" alt="bottle of oil"/>
                        </div>
                        <div className="about__article--element">
                            <h4 className="about__article--title">Qui sommes-nous ?</h4>
                            <p className="about__article--text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                Ut enim ad minim veniam, quis nostrud exercitation.</p>
                            <button className="btn btn-w100">EN SAVOIR PLUS</button>
                        </div>
                    </div>
                    <div className="about__article about__article--reverse">
                        <div className="about__article--element">
                            <img width="100%" src="./images/couture.jpg" alt="cup of tea"/>
                        </div>
                        <div className="about__article--element">
                            <h4 className="about__article--title">Qui sommes-nous ?</h4>
                            <p className="about__article--text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                Ut enim ad minim veniam, quis nostrud exercitation.</p>
                            <button className="btn btn-w100">EN SAVOIR PLUS</button>
                        </div>
                    </div>
                </section>
                <div className="btn__container">
                    <button className="btn btn-primary">DECOUVRIR</button>
                </div>
                <section className="shop">
                    <h3 className="shop--title">NOS PRODUITS</h3>
                    <div className="shop__image">
                        <img src="./images/anna.jpg" alt="shop" width="100%"/>
                    </div>
                    <div className="shop__info">
                        <p className="shop__info--text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            Ut enim ad minim veniam, quis nostrud exercitation.
                        </p>
                    </div>
                    <h4 className="shop--title-secondary">LES PLUS POPULAIRES</h4>
                    <div className="shop__container">
                        <div className="shop__container__elements">
                            <div className="shop__container--element">
                                <img src="./images/produit-1.jpg" width="100%" alt="produit"/>
                            </div>
                            <div className="shop__container--element">
                                <img src="./images/produit-2.jpg" width="100%" alt="produit"/>
                            </div>
                            <div className="shop__container--element">
                                <img src="./images/produit-3.jpg" width="100%" alt="produit"/>
                            </div>
                        </div>
                    </div> 
                    <button className="btn btn-primary" style={{margin: "50px 0"}}>VOIR PLUS</button>
                </section>
            </>
        );
    }
}

export default Home;