import React, { Component } from "react";
import { list } from "../api/blog";

class Blog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            pending: true
        }
    }
    
    componentDidMount() {
        this.props.heading("BLOG", "Decouvrez nos articles de blog", "S'ABONNER");
        list().then((res) => {
            this.setState({posts: res, pending: false});
        });
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
                    {this.state.posts.map((value, key) => (
                        <div key={key} className="blog__container__article">
                            <div className="blog__container__article__elt">
                                <img className="blog__container__article__elt--img" src={"http://localhost:3003/images/" + value.img} alt="product"/>
                            </div>
                            <div className="blog__container__article__elt">
                                <h3 className="blog__container__article__elt--title">{value.title}</h3>
                                <p className="blog__container__article__elt--text">{value.snippet}</p>
                            </div>
                            <div className="blog__container__article__elt">
                                <button className="btn btn-primary btn-primary-sm">Lire plus</button>
                            </div>
                        </div>
                    ))}
                    <button className="blog__container--btn btn btn-primary">VOIR PLUS</button>
                </div>
            </section>
        );
    }
}

export default Blog;