import React, { Component } from 'react';
import { WordCloud } from '../components/WordCloud';
import _map from 'lodash/map';
import * as d3 from 'd3';

export default class Topics extends Component {
    state = {
        rawData: []
    }

    componentWillMount() {
        this.loadRawData();
    }
    
    loadRawData() {
        console.log('data', this.props.data)
        d3.json(this.props.data, (error, data) => {
            // if (error) throw error;
            if (data !== undefined) {
                this.setState({
                    rawData: data.topics
                });
            }
        })
    }

    render() {
        const { rawData } = this.state
        console.log('rawData', rawData)

        if (!rawData.length) {
            return <h2>Loading data...</h2>;
        }
        return <WordCloud data="rawData" />    
    }
}
