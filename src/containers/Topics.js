import React, { Component } from 'react'
import './Topics.css'
import { WordCloud } from '../components/WordCloud'
import * as d3 from 'd3'
import { updateCloudData } from '../lib/utilities.js'

export default class Topics extends Component {
    state = {
        cloudData: [],
    }

    componentWillMount() {
        this.loadRawData()
    }

    loadRawData() {
        d3.json(this.props.data, (error, data) => {
            if (data != null) {
                this.createCloudData(data)
            }
        })
    }

    createCloudData({ topics }) {
        const fontSizes = [15, 24, 34, 45, 56, 112]
        this.setState(updateCloudData(topics, fontSizes))
    }

    renderLoading() {
        return <h2 className="hello">Loading data...</h2>
    }

    renderContent() {
        return <WordCloud width={700} height={300} data={this.state.cloudData} />
    }

    render() {
        return (
            <div className="c-topics">
                { this.state.cloudData.length
                    ? this.renderContent()
                    : this.renderLoading() }
            </div>
        )
    }
}
