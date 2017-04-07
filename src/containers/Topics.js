import React, { Component } from 'react';
import { WordCloud, Word } from '../components/WordCloud';
import _map from 'lodash/map';
import * as d3 from 'd3';

export default class Topics extends Component {
    state = {
        rawData: [],
        wordArray: []
    }

    componentWillMount() {
        this.loadRawData();
    }

    processData(data) {
        const wordArray = data.topics.map((word) => {
            return {
                label: word.label,
            }
        })
        return {
            rawData: data.topics,
            wordArray,
        }
    }
    
    loadRawData() {
        console.log('data', this.props.data)
        d3.json(this.props.data, (error, data) => {
            // if (error) throw error;
            if (data !== undefined) {
                this.setState(this.processData(data));
            }
        })
    }

    render() {
        const { rawData, wordArray } = this.state
        console.log('rawData', rawData)
        console.log('wordArray', wordArray)

        if (!rawData.length) {
            return <h2>Loading data...</h2>;
        }
        return (
            <WordCloud>
                { wordArray.map((options, key) => <Word key={ key } label={options.label} />) }
            </WordCloud>
        )
    }
}
