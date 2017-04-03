import React, { Component } from 'react';

export default class Cloud extends Component {
    render() {
        return (
            <svg>
                { this.props.children }
            </svg>
        );
    }
}
