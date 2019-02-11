import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.scss';

// Components
import Header from './components/common/Header';
import Main from './components/common/Main';

// FontAwesome Icons
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHandRock, faHandPaper, faHandPeace, faUserAltSlash } from '@fortawesome/free-solid-svg-icons'

library.add(faHandRock);
library.add(faHandPaper);
library.add(faHandPeace);
library.add(faUserAltSlash);

class App extends Component {

    componentWillMount() {
        localStorage.clear();
    }

    render() {
        const loggedIn = this.props.loggedIn;

        return (
            <div>
                <Header />
                {loggedIn && <Main />}
                <footer>

                </footer>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        loggedIn: state.player.loggedIn
    }
}

export default connect(mapStateToProps)(App);
