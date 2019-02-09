import React, { Component } from 'react';
import './App.scss';

// Components
import Header from './components/common/Header';

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
        return (
            <div>
                <Header />
                <main>

                </main>
                <footer>

                </footer>
            </div>
        );
    }
}

export default App;
