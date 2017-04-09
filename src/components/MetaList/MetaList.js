import React, { PropTypes } from 'react'
import './MetaList.css'

MetaList.propTypes = {
    topic: PropTypes.object,
}

MetaList.defaultProps = {
    topic: null,
}

function MetaList ({ topic }) {
    if (topic === null) {
        return null
    }
    return (
        <div className="c-meta-list">
            <h1>Information on topic "{topic.label}"</h1>
            <dl>
                <div>
                    <dt>Total Mentions</dt>
                    <dd>{topic.volume || 0}</dd>
                </div>
                <div>
                    <dt>Positive Mentions</dt>
                    <dd>{topic.sentiment.positive || 0}</dd>

                    <dt>Neutral Mentions</dt>
                    <dd>{topic.sentiment.neutral || 0}</dd>

                    <dt>Negative Mentions</dt>
                    <dd>{topic.sentiment.negative || 0}</dd>
                </div>
            </dl>
        </div>
    )
}

export default MetaList