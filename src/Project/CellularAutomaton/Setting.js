import React, { Component } from 'react';

class Setting extends Component {
    constructor(props) {
        super(props);
        this.state = {
            boardRowSize: props.setting.boardRowSize,
            boardColSize: props.setting.boardColSize
        }
    }

    Save() {
        var setting = {
            boardRowSize: this.state.boardRowSize,
            boardColSize: this.state.boardColSize,
            cellStatus: [{
                color: 'rgb(255, 255, 255, 0.5)'
            },
            {
                color: '#FFFFFF'
            }]
        }
        this.props.UpdateSetting(setting)
    }

    render() {
        return (
            <div className='setting'>
                <h2>
                    Setting
                </h2>

                <div className='form'>
                    <div className='inputGroup'>
                        <label>Board Size</label>
                        <div className='inputs'>
                            <input type="number" placeholder='Row'
                                value={this.state.boardRowSize}
                                onChange={(e) => this.setState({ boardRowSize: parseInt(e.target.value) })} />
                            <span>X</span>
                            <input type="number" placeholder='Col'
                                value={this.state.boardColSize}
                                onChange={(e) => this.setState({ boardColSize: parseInt(e.target.value) })} />
                        </div>
                    </div>
                </div>
                <button onClick={() => this.Save()}>Save</button>
            </div>
        )
    }
}

export { Setting }