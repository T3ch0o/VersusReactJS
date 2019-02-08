import React, { Component } from 'react';
import './App.scss';
import dataCollector from './utils/dataCollector';
import logo from './assets/images/logo.svg'
import { registerPlayerAction } from './store/actions/playerActions';
import connect from 'react-redux/es/connect/connect';

class App extends Component {
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
        return (
            <div>
                <header className="intro">
                    <div className="logo">
                        <img src={logo} alt="" />
                    </div>
                    <form className="player-form" onSubmit={this.onSubmitHandler}>
                        <input name="username" type="text" className="player-username" placeholder="Enter your username" onChange={dataCollector.bind(this)}/>
                        <button type="submit" className="btn btn--primary btn--inside uppercase">Confirm</button>
                    </form>
                </header>
                <main>

                </main>
                <footer>

                </footer>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { };
}

function mapDispatchToProps(dispatch) {
    return {
        register: (payload) => dispatch(registerPlayerAction(payload))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
