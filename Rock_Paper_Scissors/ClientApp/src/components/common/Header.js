import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import logo from '../../assets/images/logo.svg';
import dataCollector from '../../utils/dataCollector';

// Store
import { logoutPlayerAction, registerPlayerAction } from '../../store/actions/playerActions';
import { connect } from 'react-redux';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Header extends Component {
    constructor() {
        super();

        this.state = {
            username: ''
        };

        this.onSubmitHandler = this.onSubmitHandler.bind(this);
        this.showForm = this.showForm.bind(this);
    }

    onSubmitHandler(event) {
        event.preventDefault();

        this.props.register({ username: this.state.username });
    }

    showForm() {
        this.props.logout();
    }

    render() {
        const { error, loggedIn, message } = this.props;

        return (
            <header className="intro">
                <div className="logo">
                    <img src={logo} alt="" />
                </div>

                <Fade top when={!loggedIn}>
                    {!loggedIn && <form className="player-form" onSubmit={this.onSubmitHandler}>
                        <input name="username" type="text" className="player-username" autoComplete="off" placeholder="Enter your username" onChange={dataCollector.bind(this)}/>
                        <button type="submit" className={!message ? "btn btn--primary btn--inside uppercase" : "btn btn--primary btn--inside uppercase btn-error"}>Confirm</button>
                        <Fade bottom collapse when={error}>
                            {error && <label className="form-error" htmlFor="username">{message}</label>}
                        </Fade>
                    </form>}
                </Fade>
                <Fade delay={1000}>
                    {loggedIn && <button type="button" className="btn-show" onClick={this.showForm}><FontAwesomeIcon icon="user-alt-slash"/></button>}
                </Fade>
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
        register: (payload) => dispatch(registerPlayerAction(payload)),
        logout: () => dispatch(logoutPlayerAction())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
