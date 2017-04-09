import React, { Component } from 'react'
import { Cloud, Word } from './'
import d3Cloud from 'd3-cloud'

export default class WordCloud extends Component {

    static defaultProps = {
        width: 500,
        height: 500,
    }
    static propTypes = {
        data: React.PropTypes.array.isRequired,
        width: React.PropTypes.number,
        height: React.PropTypes.number,
    }
    state = { cloudWords: [] }

    componentWillMount() {
        this.update_d3(this.props)
    }

    update_d3(props) {
        const { data, width, height } = this.props
        d3Cloud()
            .size([width, height])
            .words(data.map(function(d) {
                return {text: d.label, size: d.size, color: d.color, test: 'haha'}
            }))
            .padding(5)
            .rotate(() => 0)
            .random(() => 0.5)
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
        const words =
            cloudWords.map((word) =>
                <Word
                    key={word.text}
                    fontSize={word.size}
                    color={word.color}
                    fontFamily={word.font}
                    rotate={word.rotate}
                    x={word.x}
                    y={word.y}
                    onClick={() => this.props.updateTopic(word)}>
                    {word.text}
                </Word>)
        return (
            <Cloud width={width} height={height}>
                { words }
            </Cloud>
        )
    }
}
