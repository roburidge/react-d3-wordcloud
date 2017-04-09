import React, { Component } from 'react'
import { Cloud, Word } from './'
import d3Cloud from 'd3-cloud'

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
        const { data, width, height } = this.props
        this.cloud
            .size([width, height])
            .words(data.map(function(d) {
                return {text: d.label, size: (0.6 + Math.random()) * 20, test: 'haha'}
            }))
            .padding(5)
            .rotate(() => 0)
            .font('Roboto')
            .fontSize(function(d) { return d.size })
            .on('end', (cloudWords) => {
                this.setState({ cloudWords })
            })
            .start()
    }

    render() {
        const { width, height } = this.props
        const { cloudWords } = this.state
        console.log('cloudWords', cloudWords)
        const words =
            cloudWords.map(({size, x, y, text, font, rotate}) =>
                <Word
                    key={text}
                    fontSize={size}
                    fontFamily={font}
                    rotate={rotate}
                    x={x}
                    y={y}>
                    {text}
                </Word>)
        return (
            <Cloud width={width} height={height}>
                { words }
            </Cloud>
        )
    }
}
