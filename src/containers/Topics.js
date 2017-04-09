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
        const wordArray = topics.map((word) => {
            return {
                label: word.label,
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
                    width={500}
                    height={500}
                    data={wordArray}/>
                <div onClick={()=>{}}>Hello</div>
            </div>
        )
    }
}
