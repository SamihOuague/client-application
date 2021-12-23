import React, { Component } from "react";
import { addLead } from "../api/contact";

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pending: false,
            sended: false,
            response: "Merci pour votre demande de contacte !",
        }
        this.firstname = "";
        this.lastname = "";
        this.email = "";
        this.phone = "";
        this.message = "";
    }

    reset = () => {
        this.firstname = "";
        this.lastname = "";
        this.email = "";
        this.phone = "";
        this.message = "";
    }

    handleSub = (e) => {
        const { firstname, lastname, email, phone, message } = this;
        this.setState({pending: true});
        addLead({firstname, lastname, email, phone, message}).then((res) => {
            if (res.success) {
                this.setState({pending: false, sended: true});
            } else {
                this.setState({message: "Un probleme est survenue lors de l'envoi"});
            }
            this.reset();
        });
        e.preventDefault();
    }

    componentDidMount() {
        this.props.heading("CONTACT", "Contactez nous facilement!", "NOUS CONTACTER");
    }

    render() {
        const { pending, sended, response } = this.state; 
        return(
            <section className="contact">
                <div className="contact__container">
                    {(pending) ? 
                        <Spinner/>
                    : 
                        (sended) ? 
                            <Message response={response}/>
                        : 
                            <Form othis={this}/>
                    }
                </div>
            </section>
        );
    }
}

const Spinner = () => (
    <div className="auth__container__spinner">
        <i className="fas fa-spinner"></i>
    </div>
);

const Message = (props) => (
    <p className="contact__container--message">{props.response}</p>
);

const Form = (props) => (
    <form className="contact__container__form" onSubmit={props.othis.handleSub}>
        <input onChange={(e) => { props.othis.firstname = e.target.value }} className="contact__container__form--input" type="text" placeholder="Votre Prenom" name="firstname"/>
        <input onChange={(e) => { props.othis.lastname = e.target.value }} className="contact__container__form--input" type="text" placeholder="Votre Nom" name="lastname"/>
        <input onChange={(e) => { props.othis.email = e.target.value }} className="contact__container__form--input" type="email" placeholder="Votre Email" name="email"/>
        <input onChange={(e) => { props.othis.phone = e.target.value }} className="contact__container__form--input" type="tel" placeholder="Numero de telephone *" name="phone"/>
        <textarea onChange={(e) => { props.othis.message = e.target.value }} className="contact__container__form--input" row="3" placeholder="Votre message"></textarea> 
        <button className="btn btn-w100 contact--btn">NOUS CONTACTER</button>
    </form>
);

export default Contact;