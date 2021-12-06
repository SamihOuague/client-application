import React, { Component } from "react";

class Contact extends Component {
    componentDidMount() {
        this.props.heading("CONTACT", "Contactez nous facilement!", "NOUS CONTACTER");
    }
    render() {
        return(
            <section>
                <form>
                    
                </form>
            </section>
        );
    }
}

export default Contact;