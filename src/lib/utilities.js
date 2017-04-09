import * as d3 from 'd3'

/**
 * Returns the font size for the input volume
 * @param {number} volume - volume we want to find fornt size for
 * @param {array} volumeRange - range to map font sizes against
 * @param {array} fontSizes - potential font sizes
 * @returns {number} font size after mapping range brackes to sizes
 */
export function getFontSize (volume, volumeRange, fontSizes) {
    const quantizeSizes = d3.scaleQuantize()
        .domain(volumeRange)
        .range(fontSizes)

    return quantizeSizes(volume)
}

/**
 * Returns red if score is less than 40, green if greater than 60
 * otherwise returns gray
 * @param {number} score
 * @returns {string} color
 */
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

/**
 * returns function for setState
 * @param {array} topics
 * @param {array} fontSizes
 * @returns {function}
 */
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
