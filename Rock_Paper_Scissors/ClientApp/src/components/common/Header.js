import React, { Component } from 'react';
import logo from '../../assets/images/logo.svg';
import dataCollector from '../../utils/dataCollector';
import { registerPlayerAction } from '../../store/actions/playerActions';
import { connect } from 'react-redux';

class Header extends Component {
    constructor() {
        super();

        this.state = {
            username: ''
        };

        this.onSubmitHandler = this.onSubmitHandler.bind(this);
    }

    onSubmitHandler(event) {
        event.preventDefault();

        this.props.register({username: this.state.username});
    }

    render() {
        const { error, loggedIn, message } = this.props;

        return (
            <header className="intro">
                <div className="logo">
                    <img src={logo} alt="" />
                </div>
                {!loggedIn && <form className="player-form" onSubmit={this.onSubmitHandler}>
                    <input name="username" type="text" className="player-username" placeholder="Enter your username" onChange={dataCollector.bind(this)}/>
                    <button type="submit" className={!message ? "btn btn--primary btn--inside uppercase" : "btn btn--primary btn--inside uppercase btn-error"}>Confirm</button>
                    {error && <label className="form-error" htmlFor="username">{message}</label>}
                </form>}
            </header>
        );
    }
}


function mapStateToProps(state) {
    return {
        error: state.ajax.error,
        message: state.ajax.message,
        loggedIn: state.player.loggedIn
    };
}

function mapDispatchToProps(dispatch) {
    return {
        register: (payload) => dispatch(registerPlayerAction(payload))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
