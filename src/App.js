import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import { GamesRouteList } from './Games/Games';
import { ProjectsRouteList } from './Project/Projects';

class Index extends Component {
    render() {
        return (
            <div>
                <h1>Hello</h1>
                <ol>
                    <li><Link to="/GamesList">GamesList</Link></li>
                    <li><Link to="/ProjectsList">ProjectsList</Link></li>
                </ol>
            </div>
        )
    }
}

class App extends Component {
    render() {
        const gameList = [(<Route path="/" key="index" exact component={Index} />)] // 首頁
            .concat(GamesRouteList)
            .concat(ProjectsRouteList)

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