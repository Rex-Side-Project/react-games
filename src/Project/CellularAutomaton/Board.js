import React, { Component } from 'react';

class Cell extends Component {
    render() {
        var background = this.props.status[this.props.value].color;
        return (
            <button className={"cell " + this.props.value} style={{background: background}}
                onClick={this.props.onClick}
            ><div></div>
            </button>
        )
    }
}

class Board extends Component {
    renderCell(index) {
        return <Cell
            key={index}
            value={this.props.cells[index]}
            status={this.props.setting.cellStatus}
            onClick={() => {
                this.props.UpdateCells(index, (this.props.cells[index] + 1) % (this.props.setting.cellStatus.length))
            }}
        />;
    }

    ClickCell(row, col){
        console.log(row, col);
    }

    calculateIndex(row, col) {
        return (row) * this.props.setting.boardColSize + (col)
    }

    render() {
        return (
            <div className='board'>
                <h3>Size: {this.props.setting.boardRowSize}x{this.props.setting.boardColSize}</h3>
                <h3>Iterate Times: {this.props.iterateTimes}</h3>
                {Array.from(Array(this.props.setting.boardRowSize).keys())
                    .map(row => {
                        return (<div className="board-row" key={row}>
                            {Array.from(Array(this.props.setting.boardColSize).keys())
                                .map(col => this.renderCell(this.calculateIndex(row, col)))}
                        </div>)
                    })}
            </div>
        )
    }
}

export { Board }