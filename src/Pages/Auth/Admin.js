import React, { Component } from "react";
import Login from "./Login";
import Panel from "./Panel";

class Admin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            token: false
        }
    }

    setToken = (token) => {
        this.setState({token: token});
    }

    componentDidMount() {
        this.props.heading("", "", "");
    }

    render() {
        return(
            (!this.state.token) ?
                <Login setToken={this.setToken}/> :
                <Panel token={this.state.token}/>
        );
    }
}

export default Admin;