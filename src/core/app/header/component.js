import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './component.css';

const Header = (props) => (
  <div className="Header">
    <Link className="button" to="/">Home</Link>
    <a className="button" href="https://github.com/balovbohdan/react-rendering-presentation-examples" target="_blank">
      GitHub
    </a>
  </div>
);

export default Header;
