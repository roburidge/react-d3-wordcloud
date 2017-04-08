import React, { PropTypes } from 'react';

Word.propTypes = {
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
    fontSize: PropTypes.number.isRequired,
    fontFamily: PropTypes.string.isRequired,
    rotate: PropTypes.number,
    textAnchor: PropTypes.oneOf(['start', 'middle', 'end', 'inherit'])
};

Word.defaultProps = {
    rotate: 0,
    textAnchor: 'middle'
};

function Word({ x, y, fontSize, fontFamily, children, rotate, textAnchor }) {
    return (
        <text
            style={{ fontSize, fontFamily }}
            transform={`translate(${x}, ${y}) rotate(${rotate})`}
            textAnchor={textAnchor}>
            { children }
        </text>
    );
};

export default Word;