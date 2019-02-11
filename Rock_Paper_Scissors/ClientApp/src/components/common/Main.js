import React, { Component } from 'react';
import { connect } from 'react-redux';
import Fade from 'react-reveal/Fade';
import PlayersTable from './partials/PlayersTable';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { getReactStatusAction } from '../../store/actions/reactActions';

class Main extends Component {
    constructor() {
        super();

        this.onClickHandler = this.onClickHandler.bind(this);
    }

    onClickHandler(handSign) {
        const payload = {
            username: localStorage.getItem('username'),
            handSign
        };

        this.props.getReactStatus(payload);
    }

    render() {
        return (
            <main>
                <Fade left delay={800} duration={1000}>
                    <p className="versus-text">VS</p>
                </Fade>

                <Fade left delay={1500}>
                    <div className="rock-paper-scissors">
                        <div className="rock" onClick={() => this.onClickHandler('Rock')}>
                            <FontAwesomeIcon icon="hand-rock"/>
                        </div>
                        <div className="paper" onClick={() => this.onClickHandler('Paper')}>
                            <FontAwesomeIcon icon="hand-paper"/>
                        </div>
                        <div className="scissors" onClick={() => this.onClickHandler('Scissors')}>
                            <FontAwesomeIcon icon="hand-peace"/>
                        </div>
                    </div>
                </Fade>

                <Fade bottom delay={1900}>
                    <PlayersTable />
                </Fade>
            </main>
        );
    }
}

function mapStateToProps(state) {
    return { }
}

function mapDispatchToProps(dispatch) {
    return {
        getReactStatus: (payload) => dispatch(getReactStatusAction(payload))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);

