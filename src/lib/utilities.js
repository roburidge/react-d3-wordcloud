import * as d3 from 'd3'

export function getFontSize (volume, volumeRange, fontSizes) {
    const quantizeSizes = d3.scaleQuantize()
        .domain(volumeRange)
        .range(fontSizes)

    return quantizeSizes(volume)
}

export function getFontColor (score) {
    switch (true) {
        case score < 40:
            return 'red'
        case score > 60:
            return 'green'
        default:
            return 'gray'
    }
}

export function updateCloudData (topics, fontSizes) {
    return (prevState, props) => {
        const volumeRange = d3.extent(topics, (d) => d.volume)
        return {
            cloudData: topics.map((word) => {
                return {
                    label: word.label,
                    size: getFontSize(word.volume, volumeRange, fontSizes),
                    color: getFontColor(word.sentimentScore),
                }
            }),
        }
    }
}
