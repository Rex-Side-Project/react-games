import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './CellularAutomaton.css';
import { Board } from './Board';
import { Setting } from './Setting';

class CellularAutomaton extends Component {
    constructor(props) {
        super(props);
        var boardRowSize = 4,
            boardColSize = 4;
        this.state = {
            setting: {
                boardRowSize,
                boardColSize
            },
            cells: Array(boardRowSize).fill(Array(boardColSize).fill(null))
        }
    }

    UpdateSetting(setting) {
        this.setState({
            setting: setting,
            cells: Array(setting.boardRowSize).fill(Array(setting.boardColSize).fill(null))
        })
    }


    render() {
        return (
            <div className='CellularAutomaton'>
                <Link to="/ProjectsList">Back</Link>
                <h1 className='title'>Cellular Automaton</h1>
                <Setting
                    setting={this.state.setting}
                    UpdateSetting={(setting) => this.UpdateSetting(setting)} />
                <Board
                    setting={this.state.setting}
                    cells={this.state.cells} />
            </div>
        )
    }
}

export { CellularAutomaton }