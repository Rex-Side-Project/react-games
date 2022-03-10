import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import { GamesList, NoGame, GamesRouteList } from './Games/Games';

class Index extends Component {
    render() {
        return (
            <div>
                <h1>Hello</h1>
                <ol>
                    <li><Link to="/GamesList">GamesList</Link></li>
                </ol>
            </div>
        )
    }
}

class App extends Component {
    render() {
        const gameList = [(<Route path="/" key="index" exact component={Index} />)] // 首頁
            .concat([(<Route path="/GamesList" key="GamesList" component={GamesList} />)]) // GameList
            .concat(GamesRouteList.map((game) => {
                return (<Route key={game.name} path={game.path} component={game.component} />)
            }))
            .concat([(<Route key="NoGame" component={NoGame} />)]);// 如果沒有的話

        return (
            <div className="container">
                <Switch>
                    {/* The corresponding component will show here if the current URL matches the path */}
                    {/* <Route path="/" exact component={GamesList} />
                    <Route path="/TicTacToe" component={TicTacToe} />
                    <Route component={NoGame} /> */}
                    {gameList}
                </Switch>
            </div>
        );
    }
}

export default App;