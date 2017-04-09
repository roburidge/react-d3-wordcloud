import React, { Component } from 'react'
import { WordCloud } from '../components/WordCloud'
import * as d3 from 'd3'

export default class Topics extends Component {
    state = {
        wordArray: []
    }

    componentWillMount() {
        this.loadRawData()
    }

    loadRawData() {
        console.log('data', this.props.data)
        d3.json(this.props.data, (error, data) => {
            // if (error) throw error;
            if (data !== undefined) {
                this.setState(this.processData(data))
            }
        })
    }

    processData({ topics }) {
        const volumeRange = d3.extent(topics, (d) => d.volume)
        const quantizeSizes = d3.scaleQuantize()
            .domain(volumeRange)
            .range([20, 24, 34, 45, 56, 112])

        const setColor = (score) => {
            switch (true) {
                case score < 40:
                    return 'red'
                case score > 60:
                    return 'green'
                default:
                    return 'gray'
            }
        }
        const wordArray = topics.map((word) => {
            return {
                label: word.label,
                size: quantizeSizes(word.volume),
                color: setColor(word.sentimentScore),
            }
        })
        return {
            wordArray
        }
    }

    render() {
        const { wordArray } = this.state
        console.log('wordArray', wordArray)

        if (!wordArray.length) {
            return <h2 className="hello">Loading data... { wordArray.length }</h2>
        }
        return (
            <div>
                <WordCloud
                    width={700}
                    height={300}
                    data={wordArray} />
            </div>
        )
    }
}
