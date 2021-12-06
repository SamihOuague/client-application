import React, { Component } from "react";
import Home from "./Pages/Home";
import Blog from "./Pages/Blog";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Shop from "./Pages/Shop";
import Contact from "./Pages/Contact";
import Admin from "./Pages/Auth/Admin";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "L'HERBOTICAIRE",
            subtitle: "Un peu d'eau fraiche,<br/>et de verdure !",
            btnContent: "DECOUVRIR"
        }
    }

    handleHeading = (title, subtitle, btnContent) => {
        this.setState({
            title,
            subtitle,
            btnContent,
        })
    }

    render() {
        const { title, subtitle, btnContent } = this.state;
        return(
            <Router>
                <header className="header">
                    <nav className="header__nav">
                        <div className="header__navbrand">
                            <div className="header__navbrand--logo">
                                <img src="./images/logo.png" alt="logo" width="90px"/>
                            </div>
                            <Link to="/" className="header__navbrand--title borderd">L'HERBOTICAIRE</Link>
                        </div>
                        <div className="header__hamburger">
                            <div className="header__hamburger--element"></div>
                            <div className="header__hamburger--element"></div>
                            <div className="header__hamburger--element"></div>
                        </div>
                        <ul className="header__navbar">
                            <li className={"header__navbar--link " + ((window.location.pathname === "/") ? "borderd" : "")}>
                                <Link to="/"><i className="fas fa-home"></i></Link>
                            </li>
                            <li className={"header__navbar--link " + ((window.location.pathname === "/blog") ? "borderd" : "")}>
                                <Link to="/blog">BLOG</Link>
                            </li>
                            <li className={"header__navbar--link " + ((window.location.pathname === "/shop") ? "borderd" : "")}>
                                <Link to="/shop">BOUTIQUE</Link>
                            </li>
                            <li className={"header__navbar--link " + ((window.location.pathname === "/contact") ? "borderd" : "")}>
                                <Link to="/contact">CONTACT</Link>
                            </li>
                            <li className={"header__navbar--link " + ((window.location.pathname === "/panier") ? "borderd" : "")}>
                                <Link to="/shop"><i className="fas fa-shopping-cart"></i></Link>
                            </li>
                        </ul>
                    </nav>
                    <div className="header__body">
                        <div>
                            <h1 className="header__body--title">{title}</h1>
                            <p className="header__body--slog" dangerouslySetInnerHTML={{__html: subtitle}}/>
                        </div>
                        {(btnContent !== "") &&
                            <button className="btn btn-primary">{btnContent}</button>
                        }
                    </div>
                </header>
                <Routes>
                    <Route exact path="/" element={<Home heading={this.handleHeading}/>}/>
                    <Route path="/blog" element={<Blog heading={this.handleHeading}/>}/>
                    <Route path="/shop" element={<Shop heading={this.handleHeading}/>}/>
                    <Route path="/contact" element={<Contact heading={this.handleHeading}/>}/>
                    <Route path="/admin" element={<Admin heading={this.handleHeading}/>}/>
                </Routes>
                <footer className="footer">
                    <div className="footer__links">
                        <h5 className="footer--title">Liens Utiles</h5>
                        <ul className="footer--links">
                            <li className="footer--link">A Propos</li>
                            <li className="footer--link">Blog</li>
                            <li className="footer--link">Politique de Confidentialite</li>
                            <li className="footer--link">Contact</li>
                        </ul>
                    </div>
                    <div className="footer__links">
                        <h5 className="footer--title">RESEAUX SOCIAUX</h5>
                        <div className="d-flex">
                            <div className="footer__link footer__social">
                                <img src="./images/fb.png" width="30px" alt="facebook"/>
                            </div>
                            <div className="footer__link footer__social">
                                <img src="./images/ig.png" width="30px" alt="instagram"/>
                            </div>
                            <div className="footer__link footer__social">
                                <img src="./images/tk.png" width="30px" alt="TikTok"/>
                            </div>
                            <div className="footer__link footer__social">
                                <img src="./images/tw.png" width="30px" alt="Twitter"/>
                            </div>
                        </div>
                    </div>
                </footer>
            </Router>
        );
    }
}

export default App;