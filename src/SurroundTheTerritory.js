import React from 'react';
// import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import './SurroundTheTerritory.css';

class SurroundTheTerritoryGame extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            history: [{
                squares: Array(9).fill(null),
            }],
            stepNumber: 0,
            whoIsNext: true
        };
    }

    render() {
        return (
            <div className="content">
                <Link to="/GamesList/">Back To List</Link>
                <div className="game">
                </div>
                <div>

                </div>
            </div>
        );
    }
}

// ========================================

const SurroundTheTerritory = () => {
    return (<SurroundTheTerritoryGame />);
}

export { SurroundTheTerritory };