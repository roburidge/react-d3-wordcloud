import React, { Component } from 'react';

export default class Word extends Component {
    render() {
        const {x, y, fontSize, fontFamily, rotate, label} = this.props;
        const style = {
            fontSize,
            fontFamily
        }
        return (
            <text
                style={style}
                transform={`translate(${x}, ${y}) rotate(${rotate})`}
                textAnchor="middle">
                { label }
            </text>
        );
    }
}
