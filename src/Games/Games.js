import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import { TicTacToe } from './TicTacToe/TicTacToe';

import './Games.css';

const Games = [
    { path: "/Game/TicTacToe", name: "Tic-Tac-Toe", component: TicTacToe }
]

class GamesList extends Component {
    render() {
        return (
            <div>
                <Link to="/">Back</Link>
                <h1>Games List</h1>
                <ol>
                    {Games.map((game) => {
                        return (<li key={game.name}><Link to={game.path}>{game.name}</Link></li>)
                    })}
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


const GamesRouteList = [
    // List
    (<Route path="/GamesList" key="GamesList" component={GamesList} />),
    // Games
    ...Games.map((game) => {
        return (<Route key={game.name} path={game.path} component={game.component} />)
    }),
    // NoGame
    (<Route path="/Game" key="NoGame" component={NoGame} />)
]

export { GamesList, NoGame, GamesRouteList }