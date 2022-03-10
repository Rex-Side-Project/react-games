import React, { Component } from 'react';
import { Link } from 'react-router-dom';



class CellularAutomaton extends Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {
        return (
            <div>
                <Link to="/ProjectsList">Back</Link>
                <h1>Cellular Automaton</h1>
            </div>
        )
    }
}

export { CellularAutomaton }