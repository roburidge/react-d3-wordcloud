import React, { PropTypes } from 'react'
import './Word.css'

Word.propTypes = {
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
    fontSize: PropTypes.number.isRequired,
    fontFamily: PropTypes.string.isRequired,
    children: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    rotate: PropTypes.number,
    textAnchor: PropTypes.oneOf(['start', 'middle', 'end', 'inherit']),
}

Word.defaultProps = {
    rotate: 0,
    textAnchor: 'middle',
}

function Word({ x, y, fontSize, color, fontFamily, children, rotate, textAnchor, onClick }) {
    return (
        <text
            className="c-text"
            style={{ fontSize, fontFamily, fill: color }}
            transform={`translate(${x}, ${y}) rotate(${rotate})`}
            textAnchor={textAnchor}
            onClick={onClick}>
            { children }
        </text>
    )
}

export default Word