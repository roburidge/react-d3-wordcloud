import React, { Component, PropTypes } from 'react'
import { Cloud, Word } from './'
import d3Cloud from 'd3-cloud'

export default class WordCloud extends Component {

    static defaultProps = {
        width: 500,
        height: 500,
    }
    static propTypes = {
        data: PropTypes.array.isRequired,
        updateTopic: PropTypes.func.isRequired,
        width: PropTypes.number,
        height: PropTypes.number,
    }
    state = { cloudWords: [] }

    componentWillMount() {
        this.update_d3(this.props)
    }

    update_d3(props) {
        const { data, width, height } = props
        d3Cloud()
            .size([width, height])
            .words(data.map(function(d) {
                return {text: d.label, ...d}
            }))
            .padding(5)
            .rotate(() => 0)
            .random(() => 0.5)
            .font('Roboto, sans-serif')
            .fontSize(function(d) { return d.size })
            .on('end', (cloudWords) => {
                this.setState({ cloudWords })
            })
            .start()
    }

    render() {
        const { width, height, updateTopic } = this.props
        const { cloudWords } = this.state
        const words =
            cloudWords.map((topic) =>
                <Word
                    key={topic.text}
                    fontSize={topic.size}
                    color={topic.color}
                    fontFamily={topic.font}
                    rotate={topic.rotate}
                    x={topic.x}
                    y={topic.y}
                    onClick={() => updateTopic(topic)}>
                    {topic.text}
                </Word>)
        return (
            <Cloud width={width} height={height}>
                { words }
            </Cloud>
        )
    }
}
