import React, { Component } from 'react';

class Cell extends Component {
    render() {
        return (
            <button className={"cell " + this.props.value}
            // id={this.props.value}
            // onClick={this.props.onClick}
            ><div>{this.props.value}</div>
            </button>
        )
    }
}

class Board extends Component {
    renderCell(row, col) {
        return <Cell
            key={`${row}_${col}`}
            value={this.props.cells[row][col]}
        // onClick={() => this.props.SquareOnClick(i)}
        />;
    }

    render() {
        return (
            <div className='board'>
                <h3>{this.props.setting.boardRowSize}x{this.props.setting.boardColSize}</h3>
                {this.props.cells.map((cellRow, row) => {
                    return (<div className="board-row" key={row}>
                        {cellRow.map((cell, col) => this.renderCell(row, col))}
                    </div>)
                })}
            </div>
        )
    }
}

export { Board }