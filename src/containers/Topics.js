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
        const fontSizes = [20, 24, 34, 45, 56, 112]
        this.setState(updateCloudData(topics, fontSizes))
    }

    render() {
        const { cloudData } = this.state

        if (!cloudData.length) {
            return <h2 className="hello">Loading data... { cloudData.length }</h2>
        }
        return (
            <div className="c-topics">
                <WordCloud
                    width={700}
                    height={300}
                    data={cloudData} />
            </div>
        )
    }
}
