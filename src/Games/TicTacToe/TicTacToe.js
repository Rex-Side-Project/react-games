import React from 'react';
// import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import './TicTacToe.css';

function Square(props) {
    return (
        <button className={"square " + props.value}
            id={props.value}
            onClick={props.onClick}
        >{props.value}
        </button>
    );
}

class Board extends React.Component {
    renderSquare(i) {
        return <Square
            value={this.props.squares[i]}
            onClick={() => this.props.SquareOnClick(i)} />;
    }

    render() {
        return (
            <div>
                {/* <div className="status">{status}</div> */}
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        );
    }
}

class TicTacToeGame extends React.Component {
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

    SquareOnClick(i) {
        const history = this.state.history;
        const squares = history[history.length - 1].squares.slice();
        if (this.calculateWinner() || squares[i]) return; //點的那個格子已經有了

        squares[i] = this.state.whoIsNext ? 'X' : 'O';
        this.setState({
            history: history.concat([{
                squares: squares
            }]),
            stepNumber: this.state.stepNumber + 1,
            whoIsNext: !this.state.whoIsNext
        });
    }


    calculateWinner() {
        const squares = this.state.history[this.state.stepNumber].squares;

        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
            }
        }
        return null;
    }

    jumpToMove(i) {
        const history = this.state.history.slice(0, i + 1);
        this.setState({
            history: history,
            stepNumber: i,
            whoIsNext: i % 2 === 0
        });
    }

    render() {
        const history = this.state.history;
        const currentSquares = history[this.state.stepNumber].squares;
        const winner = this.calculateWinner();

        const status = winner ? `Winner Is ${winner}`
            : `Next player: ${this.state.whoIsNext ? 'X' : 'O'}`;

        const moves = history.map((step, move) => {
            const desc = move ? `Go to move #${move}` : "Game is start";
            return (
                <li key={move} >
                    <button onClick={() => this.jumpToMove(move)}>{desc}</button>
                </li>
            )
        })

        return (
            <div className="content">
                <Link to="/GamesList/">Back To List</Link>
                <div className="game">
                    <div className="game-board">
                        <Board
                            SquareOnClick={(i) => this.SquareOnClick(i)}
                            squares={currentSquares}
                            whoIsNext={this.state.whoIsNext} />
                    </div>
                    <div className="game-info">
                        <div>{status}</div>
                        <ol>{moves}</ol>
                    </div>
                </div>
                <div>

                </div>
            </div>
        );
    }
}

// ========================================

// ReactDOM.render(
//     <TicTacToeGame />,
//     document.getElementById('root')
// );

const TicTacToe = () => {
    return (<TicTacToeGame />);
}

export { TicTacToe };