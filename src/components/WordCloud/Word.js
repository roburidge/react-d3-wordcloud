import React, { Component } from 'react';

export default class Word extends Component {
    render() {
        const {x, y, fontSize} = this.props;
        const style = {
            fontSize
        }
        return (
            <text
                style={style}
                transform={`translate(${x}, ${y})`}>
                { this.props.children }
            </text>
        );
    }
}
