import React, { PropTypes } from 'react';

Cloud.propTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  children: PropTypes.oneOfType([
    React.PropTypes.array,
    React.PropTypes.element,
  ])
}

function Cloud({ width, height, children }) {
    return (
        <svg width={width} height={height}>
            <g transform={`translate(${width/2}, ${height/2})`}>
                { children }
            </g>
        </svg>
    );
}

export default Cloud;