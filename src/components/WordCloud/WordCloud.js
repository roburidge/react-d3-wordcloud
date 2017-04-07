import React, { Component } from 'react';
import { Cloud, Word } from './';
import _map from 'lodash/map';
import d3Cloud from 'd3-cloud';

export default class WordCloud extends Component {
    state = {
        cloudWords: []
    }
    cloud = d3Cloud()
    
    componentWillMount() {
        this.update_d3(this.props)
    }
    
    componentWillUpdate(nextProps, nextState) {
        this.update_d3(nextProps)
    }
    
    update_d3(props) {
        const { data } = this.props;
        this.cloud
            .size([500, 500])
            .words(data.text.map(function(d) {
                return {text: d, size: 10 + Math.random() * 90, test: "haha"};
            }))
            .padding(5)
            .rotate(() => 0)
            .font("Roboto")
            .fontSize(function(d) { return d.size; })
            .on("end", (cloudWords) => {
                this.setState({ cloudWords })
            })
            .start();
    }
    
    render() {
        const { cloudWords } = this.state
        console.log('cloudWords', cloudWords)
        const words =
            _map(cloudWords, ({size, x, y, text, font, rotate}) =>
                <Word
                    key={text}
                    fontSize={size}
                    fontFamily={font}
                    rotate={rotate}
                    x={x}
                    y={y}>
                    {text}
                </Word>);
        return (
            <svg width="500" height="500">
                <g transform="translate(250, 250)">
                    { React.children.map(this.props.children, (child) => React.cloneElement(child, { x: 0, y: 0 })) }
                </g>
            </svg>
        );
    }
}
