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
            running: false,
            run_id: null,

            setting: {
                boardRowSize,
                boardColSize,
                cellStatus: [{
                    color: 'rgb(255, 255, 255, 0.5)'
                },
                {
                    color: '#FFFFFF'
                }]
            },
            cells: Array(boardRowSize * boardColSize).fill(0),
            iterateTimes: 0
        }
    }

    UpdateSetting(setting) {
        this.setState({
            setting: setting,
            cells: Array(setting.boardRowSize * setting.boardColSize).fill(0),
            iterateTimes: 0
        })
    }

    UpdateCells(index, valus) {
        var cells = this.state.cells;
        cells[index] = valus;
        this.setState({
            cells
        })
    }

    Check_3x3_AdjacentCells(index){
        var cells = this.state.cells,
            boardColSize = this.state.setting.boardColSize;
        var table = [
            cells[index - boardColSize - 1] ?? 0,   cells[index - boardColSize] ?? 0,   cells[index - boardColSize +1] ?? 0,
            cells[index - 1] ?? 0,                                                      cells[index +1] ?? 0,
            cells[index + boardColSize - 1] ?? 0,   cells[index + boardColSize] ?? 0,   cells[index + boardColSize +1] ?? 0
        ];

        return table.reduce((a, b) => a + b);
    }

    NextIterate() {
        var iterateTimes = this.state.iterateTimes + 1;
        var cells = Array(this.state.setting.boardColSize * this.state.setting.boardRowSize).fill(0);
        
        cells.forEach((c, i) => {
            var adj = this.Check_3x3_AdjacentCells(i);
            if(adj === 2)
                cells[i] = this.state.cells[i];
            else if(adj === 3)
                cells[i] = 1;
            else
                cells[i] = 0;
        })

        this.setState({
            iterateTimes,
            cells
        })
    }

    Run() {
        var run_id = null;
        if(!this.state.running){
            run_id = setInterval(() => {
                this.NextIterate(this)
            }, 100);
        }
        else {
            clearInterval(this.state.run_id);
        }
        this.setState({
            run_id,
            running: !this.state.running
        });
    }

    render() {
        return (
            <div className='CellularAutomaton'>
                <Link to="/ProjectsList">Back</Link>
                <div className='actionFun'>
                    <h1 className='title'>Cellular Automaton</h1>
                    <div className='funBtns'>
                        <button onClick={() => this.Run()}>{this.state.running ? "Stop" : "Run"}</button>
                    </div>
                </div>
                <Setting
                    setting={this.state.setting}
                    UpdateSetting={(setting) => this.UpdateSetting(setting)} />
                <Board
                    setting={this.state.setting}
                    cells={this.state.cells}
                    iterateTimes={this.state.iterateTimes}
                    UpdateCells={(index, valus) => this.UpdateCells(index, valus)}/>
            </div>
        )
    }
}

export { CellularAutomaton }