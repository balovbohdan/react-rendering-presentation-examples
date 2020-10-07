import React from 'react';
import PropTypes from 'prop-types';

import './component.css';

const RenderOutput = (props) => (
  <div className="RenderOutput">
    <h3 className="title">{props.title}</h3>
    <div className="output" id={props.outputWrapperId}>
      <p>Nothing to show...</p>
    </div>
  </div>
);

RenderOutput.propTypes = {
  outputWrapperId: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  className: PropTypes.string,
};

RenderOutput.defaultProps = {
  className: undefined,
};

export default RenderOutput;
