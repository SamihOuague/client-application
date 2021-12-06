import React, { Component } from "react";
import { signIn } from "../../api/auth";

class Login extends Component {
    constructor(props) {
        super(props);
        this.email = "";
        this.password = "";
        this.state = {
            pending: false
        }
    }

    handleSub = (e) => {
        const { email, password } = this;
        this.setState({pending: true});
        signIn({email, password}).then((res) => {
            this.setState({pending: false});
            console.log(res);
            if (res.success && res.token) {
                this.props.setToken(res.token);
            }
        });
        e.preventDefault();
    }

    render() {
        return(
            <section className="auth">
                <div className="auth__container">
                    {(this.state.pending) ? <Spinner/> :
                    <form className="auth__container__form" onSubmit={this.handleSub}>
                        <input 
                            onChange={(e) => {this.email = e.target.value}} 
                            className="auth__container__form--input" type="email" 
                            placeholder="Nom d'utilisateur" />
                        <input 
                            onChange={(e) => {this.password = e.target.value}} 
                            className="auth__container__form--input" type="password" 
                            placeholder="Mot de passe" />
                        <button type="submit" className="btn btn-primary btn-primary-sm">Login</button>
                    </form>}
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

export default Login;