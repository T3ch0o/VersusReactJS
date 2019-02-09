import React, { Component } from 'react';
import './App.scss';

// Components
import Header from './components/common/Header';

class App extends Component {
    constructor() {
        super();
    }

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
