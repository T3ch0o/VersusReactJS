import React, { Component } from 'react';
import { connect } from 'react-redux';
import { requestPlayersStatusAction } from '../../../store/actions/playerActions';

class PlayersTable extends Component {
    constructor(props) {
        super(props);

    }

    componentWillMount() {
        this.props.requestPlayersStatus();
    }

    render() {
        const playersStatus = this.props.playersStatus;

        return (
            <table className="players-stats-table">
                <thead>
                <tr>
                    <th><h1>Player Name</h1></th>
                    <th><h1>Wins</h1></th>
                    <th><h1>Losses</h1></th>
                    <th><h1>Win Rate</h1></th>
                </tr>
                </thead>
                <tbody>
                {playersStatus.map(playerStatus =>
                    <tr key={playerStatus.username}>
                        <td>{playerStatus.username}</td>
                        <td>{playerStatus.wins}</td>
                        <td>{playerStatus.losses}</td>
                        <td>{playerStatus.winRate}</td>
                    </tr>
                )}
                </tbody>
            </table>
        );
    }
}

function mapStateToProps(state) {
    return {
        playersStatus: state.players
    };
}

function mapDispatchToProps(dispatch) {
    return {
        requestPlayersStatus: () => dispatch(requestPlayersStatusAction())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayersTable);
