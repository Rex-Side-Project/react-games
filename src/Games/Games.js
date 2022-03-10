import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { TicTacToe } from './TicTacToe/TicTacToe';

const GamesRouteList = [
    { path: "/Game/TicTacToe", name: "Tic-Tac-Toe", component: TicTacToe },
]

class GamesList extends Component {
    render() {
        const gameList = GamesRouteList.map((game) => {
            return (<li key={game.name}><Link to={game.path}>{game.name}</Link></li>)
        })

        return (
            <div>
                <Link to="/">Back</Link>
                <h1>Games List</h1>
                <ol>
                    {/* <li><Link to="/TicTacToe">Tic-Tac-Toe</Link></li> */}
                    {gameList}
                </ol>
            </div>
        )
    }
}

class NoGame extends Component {
    render() {
        return (
            <div className="noGameStyle">
                No This Game
            </div>
        )
    }
}

// export default Games;
export { GamesList, NoGame, GamesRouteList }