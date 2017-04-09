import React, { PropTypes } from 'react'
import './MetaList.css'

MetaList.propTypes = {
    label: PropTypes.string,
    volume: PropTypes.number,
    sentiment: PropTypes.object,
}

MetaList.defaultProps = {
    label: null,
    volume: 0,
    sentiment: {
        'negative': 0,
        'neutral': 0,
        'positive': 0,
    },
}

function MetaList ({label, volume, sentiment}) {
    return (
        <div className="c-meta-list">
            <h1>Information on topic "{label}"</h1>
            <dl>
                <div>
                    <dt>Total Mentions</dt>
                    <dd>{volume}</dd>
                </div>
                <div>
                    <dt>Positive Mentions</dt>
                    <dd>{sentiment.positive}</dd>

                    <dt>Neutral Mentions</dt>
                    <dd>{sentiment.neutral}</dd>

                    <dt>Negative Mentions</dt>
                    <dd>{sentiment.negative}</dd>
                </div>
            </dl>
        </div>
    )
}

export default MetaList