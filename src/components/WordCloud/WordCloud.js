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
        this.cloud
            .size([500, 500])
            .words([
                "Hello", "world", "normally", "you", "want", "more", "words",
                "than", "this"].map(function(d) {
                return {text: d, size: 10 + Math.random() * 90, test: "haha"};
            }))
            .padding(5)
            .rotate(function() { return ~~(Math.random() * 2) * 90; })
            .font("Impact")
            .fontSize(function(d) { return d.size; })
            .on("end", (cloudWords) => {
                this.setState({ cloudWords })
            })
            .start();
    }
    
    render() {
        const { cloudWords } = this.state
        console.log('cloudWords', cloudWords)
        const words = _map(cloudWords, ({size, x, y, text}) => <Word key={text} fontSize={size} x={x} y={y}>{text}</Word>);
        return (
            <Cloud>
                { words }
            </Cloud>
        );
    }
}
