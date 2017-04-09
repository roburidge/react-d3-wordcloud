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
            <h1 className="c-meta-list__heading">
                Information on topic "{topic.label}"
            </h1>
            <dl className="c-meta-list__list">
                <ListItem
                    label="Total Mentions"
                    value={topic.volume || 0}
                    className="c-list-item--heavy" />
                <ListItem
                    label="Positive Mentions"
                    value={topic.sentiment.positive || 0}
                    className="c-list-item--positive" />
                <ListItem
                    label="Neutral Mentions"
                    value={topic.sentiment.neutral || 0} />
                <ListItem
                    label="Negative Mentions"
                    value={topic.sentiment.negative || 0}
                    className="c-list-item--negative" />
            </dl>
        </div>
    )
}

function ListItem ({ label, value, className }) {
    return (
        <div className={`c-list-item ${className}`}>
            <dt className="c-list-item__label">
                {label}
            </dt>
            <dd className="c-list-item__value">
                {value || 0}
            </dd>
        </div>
    )
}

export default MetaList